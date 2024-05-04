import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { HOME_PAGE, LOGIN_PAGE, ORDER_RECIEVED_PAGE } from '../utils/constants';
import { initialCart } from '../utils/constants';
import { createOrder } from '../services/apiOrders';

function CheckoutPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  function setPaymentMethod() {}
  return (
    <div className="m-5 mx-auto max-w-screen-lg">
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
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(initialCart)}
          />
          <div className="mb-5 rounded-md border-2 pt-3 text-sm">
            {initialCart.map((item) => (
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
                80000000<span className="ml-1 text-xs">$</span>
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
  return redirect(ORDER_RECIEVED_PAGE(order.id));
}

export default CheckoutPage;
