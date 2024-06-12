import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Loader from './Loader.tsx';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="text-yellow flex min-h-[100vh] flex-col justify-between text-xl">
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
