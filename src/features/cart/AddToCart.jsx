import { Link } from 'react-router-dom';
import { CART_ADDRESS } from '../../utils/constants';

function AddToCart({ course }) {
  return (
    <div
      className={`top-4 flex h-[100px] w-full flex-row items-center justify-between border-t-2 px-5 shadow-md  md:h-[150px] md:flex-col md:justify-center md:rounded-md md:border-0 md:py-5`}
    >
      <div className="flex  items-center justify-between md:w-full">
        <label className="hidden text-base md:inline">Course Price:</label>
        <strong className="text-base text-red-500">
          <span>{course.price}</span>
          <span> $</span>
        </strong>
      </div>
      <Link
        to={CART_ADDRESS}
        className="rounded-md bg-lime-600 p-3 text-base text-slate-50 md:mt-5 md:w-full md:text-center"
      >
        Add to Cart
      </Link>
    </div>
  );
}

export default AddToCart;
