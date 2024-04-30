import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className=" text-yellow text-xl">
      {isLoading && <Loader />}
      <Header />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
