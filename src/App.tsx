import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Courses, { loader as coursesLoader } from './pages/Courses.tsx';
import Course, { loader as courseLoader } from './pages/Course.tsx';
import Cart from './pages/Cart.tsx';
import CreateOrder, {
  action as careteOrderAction,
} from './pages/CreateOrder.tsx';
import Blog, { loader as blogPostsLoader } from './pages/Blog.tsx';
import StaticPages from './pages/StaticPages.tsx';
import CheckoutPage, { action as checkoutAction } from './pages/Checkout.tsx';
import OrderRecievedPage, {
  loader as orderRecievedLoader,
} from './pages/OrderRecieved.tsx';
import { action as updateOrderAction } from './pages/OrderRecieved.tsx';
import LoginPage from './pages/Login.tsx';
import AppLayout from './ui/AppLayout.tsx';
import Error from './ui/Error.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import {
  TERMS_OF_USE_PAGE,
  LOREM_CONTENT,
  COURSES_PAGE,
  BLOG_PAGE,
  HOME_PAGE,
  ORDER_RECIEVED_PAGE,
  // ORDER_PAGE,
  CART_ADDRESS,
  NEW_ORDER,
  CHECKOUT_PAGE,
  LOGIN_PAGE,
} from './utils/constants';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: HOME_PAGE,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/order-received/:orderId',
        element: <OrderRecievedPage />,
        errorElement: <Error />,
        loader: orderRecievedLoader,
        action: updateOrderAction,
      },
      {
        path: CHECKOUT_PAGE,
        element: <CheckoutPage />,
        errorElement: <Error />,
        action: checkoutAction,
      },
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: `${COURSES_PAGE}/:courseId`,
        element: <Course />,
        loader: courseLoader,
        errorElement: <Error />,
      },
      {
        path: COURSES_PAGE,
        element: <Courses />,
        loader: coursesLoader,
        errorElement: <Error />,
      },
      {
        path: CART_ADDRESS,
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: NEW_ORDER,
        element: <CreateOrder />,
        action: careteOrderAction,
        errorElement: <Error />,
      },
      {
        path: BLOG_PAGE,
        element: <Blog />,
        loader: blogPostsLoader,
        errorElement: <Error />,
      },
      {
        path: TERMS_OF_USE_PAGE,
        element: <StaticPages title="Terms of Use" content={LOREM_CONTENT} />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
