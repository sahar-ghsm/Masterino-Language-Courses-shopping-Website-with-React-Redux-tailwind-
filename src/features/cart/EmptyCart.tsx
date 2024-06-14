import { Link } from 'react-router-dom';
import { COURSES_PAGE } from '@/utils/constants.ts';

function EmptyCart() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-3 text-center">
      <p className="mt-7 font-semibold text-sky-800">
        Your cart is still empty. Start adding Courses by going to
        <Link
          to={COURSES_PAGE}
          className="mt-4 block font-semibold text-sky-500 underline"
        >
          Course List Page
        </Link>
      </p>
    </div>
  );
}

export default EmptyCart;
