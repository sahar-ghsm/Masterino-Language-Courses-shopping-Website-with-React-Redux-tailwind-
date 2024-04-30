import { VscAccount } from 'react-icons/vsc';
import { PiShoppingCartLight } from 'react-icons/pi';

function Profile() {
  return (
    <div className="flex gap-5">
      <button className="flex hidden items-center gap-2">
        <span className="inline-block rounded-lg bg-slate-100 px-3 py-2 text-base">
          Login / SignUp
        </span>
        <VscAccount size={32} className="text-slate-600" />
      </button>
      <button className="text-xl">
        <PiShoppingCartLight size={32} className="stroke-2 text-slate-600" />
      </button>
    </div>
  );
}

export default Profile;
