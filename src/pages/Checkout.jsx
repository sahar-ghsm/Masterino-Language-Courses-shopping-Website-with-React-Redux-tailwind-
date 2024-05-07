import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { HOME_PAGE, LOGIN_PAGE, ORDER_RECIEVED_PAGE } from '../utils/constants';
import { createOrder } from '../services/apiOrders';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTotalPriceOfCart,
  getShoppingCart,
  clearCart,
} from '../features/cart/cartSlice';
import store from '../utils/store';
import { fetchAddress } from '../features/user/userSlice';

function CheckoutPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const { username, position, address, error, status } = useSelector(
    (store) => store.user,
  );
  const shoppingCart = useSelector(getShoppingCart);
  const orderTotalPrice = useSelector(getTotalPriceOfCart);
  const dispatch = useDispatch();
  const isLoadingAddress = status === 'loading';

  function setPaymentMethod() {}
  return (
    <div className="m-5 max-w-screen-lg lg:mx-auto">
      <div className="mb-5 rounded-md bg-lime-100 px-5 py-4 text-base">
        Already registered? Click{' '}
        <Link to={LOGIN_PAGE}>
          <span className="text-red-500">here</span>
        </Link>{' '}
        to enter.
      </div>
      <div className="pt-8">
        <span className="text-md font-semibold "> Billing Details</span>

        <div className={`my-3 text-xs text-red-500`}>
          {formErrors?.map((error) => (
            <span key={error}>{error}</span>
          ))}
        </div>
        <Form method="POST" className="mt-2 text-sm">
          <div className="mb-5">
            <label className="text-sm font-semibold">First Name</label>
            <input
              name="customerFirstName"
              defaultValue={username}
              className="mt-2 w-full rounded-md border-2 p-2"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm font-semibold">Last Name</label>
            <input
              name="customerLastName"
              className="mt-2 w-full rounded-md border-2 p-2"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              name="customerPhone"
              className="mt-2 w-full rounded-md border-2 p-2"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm font-semibold">Email</label>
            <input
              name="customerEmail"
              className="mt-2 w-full rounded-md border-2 p-2"
            />
          </div>
          <div className="relative mb-5">
            <label className="text-sm font-semibold">Address</label>
            <div className="grow">
              <input
                className="mt-2 w-full rounded-md border-2 p-2"
                type="text"
                name="address"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
              />
              {status === 'error' && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {error}
                </p>
              )}
            </div>

            {!position.latitude && !position.longitude && (
              <span className="absolute bottom-[4px] right-[3px] z-50">
                <button
                  disabled={isLoadingAddress}
                  className="rounded-md border-2 px-2 py-1 font-semibold text-green-600"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get position
                </button>
              </span>
            )}
          </div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(shoppingCart)}
          />
          <div className="mb-5 rounded-md border-2 pt-3 text-sm">
            {shoppingCart.map((item) => (
              <div className="flex justify-between px-5 py-2" key={item.id}>
                <span>{item.title}</span>
                <span>
                  {item.quantity * item.price}{' '}
                  <span className="text-xs">$</span>
                </span>
              </div>
            ))}
            <div className="mt-2 flex justify-between bg-lime-50 px-5 py-3 font-semibold">
              <span>Total</span>
              <span>
                {orderTotalPrice}
                <span className="ml-1 text-xs">$</span>
              </span>
            </div>
          </div>
          <div className="mb-3 rounded-md border-2 p-2 text-sm ">
            <div className="flex items-center  font-semibold">
              <input
                className="rounded-md pt-1"
                type="radio"
                name="paymentMethod"
                value="on Delivery"
                checked
                onChange={setPaymentMethod}
              />
              <label className="ml-2 ">Payment on delivery</label>
            </div>
            <p className="mt-2 text-xs">Cash payment after delivery</p>
          </div>
          <div className="mb-5 text-xs">
            Your personal information is used to process your order, support
            your experience throughout this website, and for the purposes
            outlined in the{' '}
            <Link to={HOME_PAGE} className="text-red-500">
              Privacy Policy
            </Link>
            .
          </div>
          <button
            disabled={isSubmitting}
            className="mt-5 w-full rounded-md bg-lime-600 p-3 text-base font-semibold text-slate-100"
          >
            {isSubmitting ? 'Submitting' : 'Submit Order'}
          </button>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = [];
  if (!data.customerFirstName || !data.customerPhone) {
    errors.push('all fields are required');
  }

  if (errors?.length > 0) return errors;
  const order = await createOrder(data);
  store.dispatch(clearCart());
  return redirect(ORDER_RECIEVED_PAGE(order.id));
}

export default CheckoutPage;
