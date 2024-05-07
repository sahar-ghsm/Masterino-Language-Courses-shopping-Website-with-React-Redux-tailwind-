import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getShoppingCart } from './cartSlice';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';
import { COURSES_PAGE } from '../../utils/constants';

function CartTable() {
  const shoppingCart = useSelector(getShoppingCart);
  const dispatch = useDispatch();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') {
        fetcher.load(COURSES_PAGE);
      }
    },
    [fetcher],
  );

  function deleteCartItem(itemId) {
    dispatch(deleteItem(itemId));
  }

  return (
    <div className="md:mx-5 ">
      <table>
        <thead className="text-xs md:text-base">
          <tr className="w-full border-b-2">
            <th className="w-[25%] text-transparent">image</th>
            <th className="w-[25%] pb-2">Course Name</th>
            <th className="w-[15%]">Unit Price</th>
            <th className="w-[10%]">Count</th>
            <th className="w-[20%]">Total</th>
            <th className="w-[5%] text-transparent">actions</th>
          </tr>
        </thead>
        <tbody className=" gap-4">
          {shoppingCart.map((item, index) => (
            <tr
              key={index}
              className="mb-2 border-b-2 pt-2 text-center text-xs md:text-base"
            >
              <td className="my-2 mr-2 inline-block">
                <img
                  className="shadow-md md:w-[200px] md:rounded-md"
                  src={fetcher?.data?.find((el) => el.id == item.id)?.image}
                  alt={item.title}
                />
              </td>
              <td className="">
                <span>{item.title}</span>
              </td>
              <td>
                <span>{item.price}</span>
                <span>$</span>
              </td>
              <td>
                <span>{item.quantity}</span>
              </td>
              <td>
                <span>
                  {item.price * item.quantity}
                  <span>$</span>
                </span>
              </td>
              <td className=" pt-2 text-center text-red-500">
                <button onClick={(e) => deleteCartItem(item.id)}>
                  <RiDeleteBin6Line className=" mx-auto" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
