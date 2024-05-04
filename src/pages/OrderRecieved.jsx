import { Link, useLoaderData } from 'react-router-dom';
import { getOrderById } from '../services/apiOrders';
import { dateStringFormat } from '../utils/helpers';
import { HOME_PAGE } from '../utils/constants';

function OrderRecieved() {
  const order = useLoaderData();

  return (
    <div className="mx-auto max-w-screen-lg p-5">
      <p className="md:text-md my-5 text-base  font-bold text-lime-500">
        Thank you, your order has been received
      </p>
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
export default OrderRecieved;
