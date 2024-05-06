import { VscAccount } from 'react-icons/vsc';
import { PiShoppingCartLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CART_ADDRESS } from '../../utils/constants';
import { getTotalQuantityOfCart } from '../cart/cartSlice';

function Profile() {
  const username = useSelector((store) => store.user.username);
  const totalQuantityItemInCart = useSelector(getTotalQuantityOfCart);
  return (
    <div className="flex items-center md:gap-5">
      <button className="flex items-center gap-2">
        <span
          className={`${!username && 'bg-slate-100'} inline-block rounded-lg  px-3 py-2 text-base`}
        >
          {username ? (
            <VscAccount size={32} className="text-slate-600" />
          ) : (
            <span>Login / SignUp</span>
          )}
        </span>
      </button>
      <Link to={CART_ADDRESS} className="relative text-xl">
        <PiShoppingCartLight size={32} className="stroke-2 text-slate-600" />
        {totalQuantityItemInCart !== 0 && (
          <span className="absolute bottom-7 left-3 text-sm text-red-500 ">
            {totalQuantityItemInCart || ''}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Profile;
