import { Link, useFetcher, useLoaderData } from 'react-router-dom';
import { getOrderById, updateOrder } from '../services/apiOrders';
import { dateStringFormat } from '../utils/helpers';
import { HOME_PAGE } from '../utils/constants';

function OrderRecieved() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  return (
    <div className="mx-auto max-w-screen-lg p-5">
      <p className="md:text-md my-5 text-base  font-bold text-lime-500">
        Thank you, your order has been received
      </p>
      <p className="md:text-md my-5 hidden text-base  font-bold text-lime-500">
        If you have a discount code and you didn't apply it before yourpurchase
        , you can apply it now
      </p>
      <fetcher.Form method="POST">
        <div className=" flex hidden items-center justify-between gap-3">
          <input
            placeholder="discount code"
            name="discount"
            className="w-4/5 rounded-md p-1 px-2 text-base text-slate-400"
            type="number"
          />
          <input type="hidden" value={order.totalPrice} name="totalPrice" />
          <button className="w-1/5 rounded-md border-2 p-1 text-xs text-slate-500 md:w-2/5 md:text-sm">
            Apply
          </button>
        </div>
      </fetcher.Form>
      <div className="flex flex-col gap-4 rounded-md bg-slate-100 p-5 text-xs  md:text-sm">
        <div className="flex items-center justify-between">
          <span>Order Number:</span>
          <span className="text-end text-xs font-semibold">{order.id}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Date:</span>
          <span className="font-semibold">
            {dateStringFormat(order.createDate)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Final Price:</span>
          <span className="font-semibold">
            {order.totalPrice}
            <span className="ml-1 text-slate-800">$</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Payment Method:</span>
          <span className="font-semibold">{order.paymentMethod}</span>
        </div>
      </div>
      <div className="text-center">
        <Link
          className="mt-8 inline-block rounded-md border-2 bg-blue-400  p-3 font-semibold text-slate-100"
          to={HOME_PAGE}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrderById(params.orderId);
  return order;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const order = Object.fromEntries(formData);
  order.totalPrice = Number(order.totalPrice) - Number(order.discount);
  await updateOrder(params.orderId, order);
  return null;
}
export default OrderRecieved;
