import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '@/services/apiOrders';
import { isValidPhone } from '@/utils/helpers';

const cart = [
  {
    courseId: '3f691ea2-2939-4c88-957f-e4506430d980',
    title: 'Tasty Cotton Pizza',
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    courseId: 'b42e732e-5f78-40c4-adc5-32b6618e2c71',
    title: 'Luxurious Granite Tuna',
    quantity: 2,
    unitPrice: 10,
    totalPrice: 20,
  },
  {
    courseId: '310eb0b5-6d20-474d-b669-22a5df9ccb14',
    title: 'Handcrafted Concrete Fish',
    quantity: 1,
    unitPrice: 34,
    totalPrice: 34,
  },
];
function CreateOrder() {
  const navigation = useNavigation();
  const formErrors = useActionData();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div>
      CreateOrder
      <Form method="POST">
        <div>
          <label>First Name </label>
          <input type="text" name="userFirstName" required />
        </div>
        <div>
          <label>Last Name </label>
          <input type="text" name="userLastName" required />
        </div>
        <div>
          <label>Phone Number </label>
          <input type="number" name="userPhoneNumber" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div>
          <label>Email </label>
          <input type="text" name="userEmailr" required />
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'is submitting' : 'Create Order'}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {};
  if (!isValidPhone(data.userPhoneNumber))
    errors.phone =
      'Please give your correct phone number, we might need it to contat you.';
  if (Object.keys(errors).length > 0) return errors;
  const order = await createOrder(data);
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
