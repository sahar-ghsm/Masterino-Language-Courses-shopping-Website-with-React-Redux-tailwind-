import { Link } from 'react-router-dom';
import Rating from '../../ui/Rating';
import { COURSE_PAGE } from '../../utils/constants';

function CourseItem({ item }) {
  return (
    <Link
      to={COURSE_PAGE(item.id)}
      className="flex-1 rounded-lg border border-gray-200 bg-white shadow md:h-[550px] dark:border-gray-700 dark:bg-gray-800 "
    >
      <img className="h-2/5 w-full rounded-t-lg" src={item.image} />
      <div className="flex h-3/5 flex-col justify-between px-4 py-1 md:pb-5 md:pt-5">
        <div>
          <h3 className="py-2 text-base font-bold md:py-4 md:text-xl md:font-semibold">
            {item.title}
          </h3>
          <p className="line-clamp-4 pb-1 text-sm md:pt-3 md:text-base">
            {item.description}
          </p>
        </div>
        <div className="pt-2">
          <div className="flex items-center justify-between">
            <span className="inline-block rounded-md bg-lime-100 px-2 py-1 text-xs text-lime-600 md:text-sm">
              {item.category}
            </span>
            <Rating value={item.rating} />
          </div>
          <div className="my-2 flex items-center justify-between md:pl-4 md:pr-3">
            <span>
              <span className="text-base font-semibold text-red-500 md:text-xl">
                {item.price}
              </span>
              <span className="ml-1 text-sm text-slate-500">$</span>
            </span>
            <div className="rounded-md bg-blue-100 px-2 py-1 text-xs text-sky-800 md:text-sm">
              {item.durationHour} hours
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
