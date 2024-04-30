import { LiaComments } from 'react-icons/lia';
import { PiStudentLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { COURSES_PAGE } from '../utils/constants';

function HomeSubject() {
  return (
    <div className=" mx-auto mt-5  flex max-w-screen-lg flex-col gap-5 md:flex-row">
      <div className="flex w-full justify-around md:w-1/2  ">
        <img className="h-[22rem] w-[22rem] " src="../../img/c1.png" />
      </div>
      <div className="flex w-full flex-col items-center justify-center px-4 md:w-1/2">
        <div className="md:text-md flex flex-col items-center justify-center text-sm md:items-start">
          <p>The Greatest Reference</p>
          <h1 className="my-2 text-center text-lg font-bold tracking-wide md:text-left md:text-2xl">
            Professional English language training
          </h1>
          <p className="mt-3 text-center text-base md:text-left">
            Masterino is the only language training center that teaches people
            specifically How to learn English easily
          </p>
        </div>
        <div className="mt-5 flex gap-4 text-sm">
          <a
            href="/#customer_reviews"
            className="w-100 flex h-[50px] items-center gap-1 rounded-md bg-slate-100 px-3 md:h-full  md:p-5"
          >
            <span className=" font-semibold">Customer Reviews</span>
            <span className="pt-1old">
              <LiaComments className="text-2xl" />
            </span>
          </a>
          <Link
            to={COURSES_PAGE}
            className="w-100 flex h-[50px] items-center gap-1 rounded-md bg-slate-100 p-5 px-3 md:h-full md:p-5"
          >
            <span className="font-semibold">Courses</span>
            <PiStudentLight className="text-2xl" />
          </Link>
        </div>

        <div id="customer_reviews"></div>
      </div>
    </div>
  );
}

export default HomeSubject;
