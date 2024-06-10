import { IoBagCheck } from 'react-icons/io5';

function HomeAdvertisement() {
  return (
    <div className="mx-auto mt-5 flex max-w-screen-lg flex-col-reverse justify-center gap-8 md:flex-row">
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="md:text-md  text-base capitalize text-slate-500">
            The most complete training course
          </span>
          <h3 className="font-bold capitalize md:text-2xl">
            Speak English like a professional
          </h3>
          <p className="mb-5 mt-2 px-10 text-xs leading-7 text-slate-500 md:my-5 md:px-0 md:text-base ">
            Learn English easily and grow in different aspects of your life.
          </p>
        </div>
        <div className=" mx-5 rounded-md bg-blue-100 px-8 pb-5 pt-8 text-base md:mx-0">
          <div className="flex items-center justify-between gap-5 md:items-start">
            <span className="inline-block rounded-md bg-white p-2 md:p-3">
              <IoBagCheck className="text-3xl text-blue-500" />
            </span>
            <p className="md:text-md text-xs text-sky-700">
              Plus language course, the most complete language training course
            </p>
          </div>
          <a
            href="#recent_courses"
            className="mt-8 inline-block text-sm font-semibold text-blue-600 md:text-base"
          >
            Enroll in Most Recent Courses
          </a>
        </div>
      </div>
      <img
        src="/img/c2.webp"
        alt="masterino"
        className=" mx-5 rounded-md shadow-md shadow-yellow-500/50 md:mx-0 md:shadow-2xl"
      />
    </div>
  );
}

export default HomeAdvertisement;
