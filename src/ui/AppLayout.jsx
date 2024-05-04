import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className=" text-yellow flex min-h-[100vh] flex-col justify-between text-xl">
      {isLoading && <Loader />}
      <Header />

      <main className="">
        <Outlet />
      </main>
      <section className="">
        <Footer />
      </section>
    </div>
  );
}

export default AppLayout;
