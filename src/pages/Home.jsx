import HomeSubject from '../ui/HomeSubject';
import LatestCourses from '../features/courses/LatestCourses';
import HomeAdvertisement from '../ui/HomeAdvertisement';
import HomeCustomerReviews from '../ui/HomeCustomerReviews';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { BLOG_PAGE } from '../utils/constants';
import LatestPosts from '../features/blog/LatestPosts';
import Footer from '../ui/Footer';

function Home() {
  return (
    <div className="">
      <HomeSubject />

      <section
        id="recent_courses"
        className="w-100 my-10 bg-slate-100 py-5 pb-10 md:pt-10"
      >
        <div className="mx-auto max-w-screen-lg ">
          <div className="flex flex-col items-center px-3 text-center md:justify-center">
            <h2 className="text-base font-bold md:pb-7 md:text-3xl md:font-semibold">
              New English Language Courses
            </h2>
            <span className="my-3 text-xs text-slate-400 md:text-base">
              Professional English language training in simple way
            </span>
          </div>
          <div className="my-5">
            <LatestCourses count={3} />
          </div>
        </div>
      </section>
      <section className="py-5">
        <HomeAdvertisement />
      </section>
      <section
        id="customer_reviews"
        className="w-100 my-10 bg-amber-50 py-5 pb-10 md:pt-10"
      >
        <div className="mx-auto flex max-w-screen-lg flex-col items-center ">
          <h2 className="text-md font-semibold md:pb-7 md:text-3xl">
            Masterino Customers Reviews
          </h2>
          <span className="mt-3 px-5 text-center text-sm leading-7 text-slate-500 md:mt-0  md:px-0 md:text-left md:text-base md:leading-5">
            Satisfied customers do not happen by chance, but are the result of a
            hard-working team!
          </span>
          <div className="my-5">
            <HomeCustomerReviews />
          </div>
        </div>
      </section>
      <section className="w-100 mx-auto my-10 max-w-screen-lg">
        <div className="mx-5 flex items-center justify-between md:mx-0">
          <h2 className="text-base font-bold md:text-3xl md:font-semibold ">
            The latest blog content
          </h2>
          <Link
            to={BLOG_PAGE}
            className="flex items-center gap-1 text-sm text-blue-400 md:gap-2 md:text-base"
          >
            See More
            <FaChevronRight />
          </Link>
        </div>
        <div className="my-5">
          <LatestPosts count={3} />
        </div>
      </section>
    </div>
  );
}

export default Home;
