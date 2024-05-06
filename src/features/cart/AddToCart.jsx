import { useDispatch, useSelector } from 'react-redux';
import { CART_ADDRESS } from '../../utils/constants';
import {
  addItem,
  descreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function AddToCart({ course }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getItemQuantityById(course.id));
  const isInCart = itemQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      title: course.title,
      image: course.image,
      id: course.id,
      price: course.price,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  }
  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(course.id));
  }

  function handleDecreaseItemQuantity() {
    dispatch(descreaseItemQuantity(course.id));
  }
  return (
    <div
      className={`top-4 flex h-[100px] w-full flex-row items-center justify-between border-t-2 px-5 shadow-md  md:h-[150px] md:flex-col md:justify-center md:rounded-md md:border-0 md:py-5`}
    >
      <div className="flex  items-center justify-between md:w-full">
        <label className="hidden md:inline md:text-base">Course Price:</label>
        <strong className="text-base text-red-500">
          <span>{course.price}</span>
          <span> $</span>
        </strong>
      </div>
      {!isInCart && (
        <button
          to={CART_ADDRESS}
          className="rounded-md bg-lime-600 p-3 text-base text-slate-50 md:mt-5 md:w-full md:text-center"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
      {isInCart && (
        <div className="mt-5 flex w-full items-center justify-between rounded-3xl border-2 px-5 py-2">
          <button
            onClick={handleDecreaseItemQuantity}
            className="rounded-full bg-green-300 px-2  text-xl font-bold text-slate-800"
          >
            -
          </button>
          <span className="text-sm font-semibold">{itemQuantity || '---'}</span>
          <button
            onClick={handleIncreaseItemQuantity}
            className="rounded-full bg-green-300 px-2  text-xl font-bold text-slate-800"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
