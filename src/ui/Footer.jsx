import { Link } from 'react-router-dom';
import { TERMS_OF_USE_PAGE } from '../utils/constants';

function Footer() {
  return (
    <footer className="w-100 mx-auto mt-10 bg-slate-300 py-5 pb-2 md:pt-10">
      <div className="mx-auto  max-w-screen-lg text-xs md:text-base">
        <div className=" flex flex-col items-center">
          <div className="flex w-full justify-center gap-4 px-5">
            <div className="flex-1">
              <div className="flex flex-auto flex-col gap-2">
                <h4 className="mb-2 font-semibold">Customer Service</h4>
                <Link to={TERMS_OF_USE_PAGE}>Terms of Service</Link>
                <Link to={TERMS_OF_USE_PAGE}>Privacy Policy</Link>
                <Link to={TERMS_OF_USE_PAGE}>Payment methods</Link>
                <Link to={TERMS_OF_USE_PAGE}>How to buy products</Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-auto flex-col gap-2">
                <h4 className="mb-2 font-semibold">Masterino</h4>
                <Link to={TERMS_OF_USE_PAGE}>Terms of Service</Link>
                <Link to={TERMS_OF_USE_PAGE}>Privacy Policy</Link>
                <Link to={TERMS_OF_USE_PAGE}>Payment methods</Link>
                <Link to={TERMS_OF_USE_PAGE}>How to buy products</Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-auto flex-col gap-2">
                <h4 className="mb-2 font-semibold">Masterino</h4>
                <Link to={TERMS_OF_USE_PAGE}>Terms of Service</Link>
                <Link to={TERMS_OF_USE_PAGE}>Privacy Policy</Link>
                <Link to={TERMS_OF_USE_PAGE}>Payment methods</Link>
                <Link to={TERMS_OF_USE_PAGE}>How to buy products</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500 md:text-xs">
          Copyright © 2024 All rights reserved by Sahar.dev
        </div>
      </div>
    </footer>
  );
}

export default Footer;
