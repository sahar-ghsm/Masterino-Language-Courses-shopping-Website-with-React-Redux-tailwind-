import { Link } from 'react-router-dom';
import SearchOrder from '@/features/order/SearchOrder.tsx';
import Username from '@/features/user/Username.tsx';
import Profile from '@/features/user/Profile.tsx';
import { HOME_PAGE } from '@/utils/constants';
import { useState } from 'react';

function Header() {
  const menu = [
    { title: 'Home', to: '/' },
    { title: 'Courses', to: '/courses' },
    { title: 'Blog', to: '/blog' },
    { title: 'Contact us', to: '/Contactus' },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="shadow">
      <nav className="mx-auto max-w-screen-lg border-gray-200 bg-white px-4 py-4 shadow-md md:shadow-none lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Link to={HOME_PAGE} className="flex flex-col">
            <span className="sm:text-md text-base font-semibold uppercase tracking-[2px] sm:tracking-[5px]">
              Masterino Co.
            </span>
            <p className="sm:text-md text-sm sm:tracking-[2px]">
              Learn Professionally
            </p>
          </Link>
          <div
            className="sahar hidden items-center justify-between bg-white px-2 pb-4 md:block lg:order-1 lg:flex lg:w-auto"
            id="mobilemenu"
          >
            <ul className="mt-4 flex text-base font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {menu.map((item) => (
                <li
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-600 lg:bg-transparent lg:p-0 dark:text-white"
                  key={item.title}
                >
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="#mobilemenu"
              type="button"
              className="ml-1 mr-1 inline-flex items-center rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobilemenu"
              aria-expanded="false"
              onClick={() => setShowMobileMenu((show) => !show)}
            >
              <span className="sr-only">Open mobile menu</span>
              <svg
                className={`${showMobileMenu && 'hidden'} h-6 w-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${!showMobileMenu && 'hidden'} h-6 w-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <Profile />
          </div>

          <div
            className={`sima ${!showMobileMenu && 'hidden'} delay-2000 absolute inset-x-0 top-16 w-full items-center justify-between bg-white px-2 pb-4 transition ease-in-out md:hidden`}
            id="mobilemenu"
          >
            <ul className="md:text-md mt-4 flex flex-col text-base font-semibold md:font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {menu.map((item) => (
                <li
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-600 lg:bg-transparent lg:p-0 dark:text-white"
                  key={item.title}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
