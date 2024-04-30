import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Courses, { loader as courseLoader } from './pages/Courses';
import Course from './pages/Course';
import Cart from './pages/Cart';
import CreateOrder, { action as careteOrderAction } from './pages/CreateOrder';
import Order, { loader as orderLoader } from './pages/Order';
import Blog, { loader as blogPostsLoader } from './pages/Blog';
import StaticPages from './pages/StaticPages';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import {
  TERMS_OF_USE_PAGE,
  LOREM_CONTENT,
  COURSES_PAGE,
  BLOG_PAGE,
  HOME_PAGE,
  COURSE_PAGE,
  ORDER_PAGE,
  CART_ADDRESS,
  NEW_ORDER,
} from './utils/constants';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: HOME_PAGE,
        element: <Home />,
      },
      {
        path: `${COURSES_PAGE}/:courseTitle`,
        element: <Course />,
        loader: courseLoader,
        errorElement: <Error />,
      },
      {
        path: COURSES_PAGE,
        element: <Courses />,
        loader: courseLoader,
        errorElement: <Error />,
      },
      {
        path: `/order/:orderId`,
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: CART_ADDRESS,
        element: <Cart />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
