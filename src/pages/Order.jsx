import { useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiOrders";

function Order() {
  const order = useLoaderData();
  // console.log("order", order);
  return (
    <div>
      <h1>{order.id}</h1>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
