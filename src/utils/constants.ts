import { Card } from '@/models.ts';

export const API_URL: string = '/.netlify/functions/data-mock/';

export const COURSES_PAGE: string = '/courses';
export const BLOG_PAGE: string = '/blog';
export const TERMS_OF_USE_PAGE: string = '/terms-of-use';
export const HOME_PAGE: string = '/';
export const ORDER_PAGE: (string) => string = (orderId) => `/order/${orderId}`;
export const COURSE_PAGE: (string) => string = (courseId) =>
  `${COURSES_PAGE}/${courseId}`;
export const CART_ADDRESS: string = '/cart';
export const CHECKOUT_PAGE: string = '/checkout';
export const NEW_ORDER: string = '/order/new';
export const LOGIN_PAGE: string = '/login';
export const ORDER_RECIEVED_PAGE: (string) => string = (orderId) =>
  `/order-received/${orderId}`;

export const LOREM_CONTENT: string =
  'Lorem Epsom is a fake text with the production of incomprehensible simplicity from the printing industry, and with the use of graphic designers, printers and texts, but also newspapers and magazines in columns and lines as necessary, and for the current conditions of the technology required, and diverse applications with the aim of improving the tools It is practical, many books in sixty-three percent of the past, present and future require a lot of knowledge from the society and experts, to create more knowledge for computer designers, especially creative designers, and the leading culture in Persian language. In this case, we can hope that all the difficulty in providing solutions, and the difficult conditions of typing will end, and the time required, including the typesetting of the main achievements, and answering the continuous questions of the existing world of design will be basically used.';

export const initialCart: Array<Card> = [
  {
    title: 'Oriental Metal Fish',
    image: 'https://loremflickr.com/640/480/business?lock=8338827347230720',
    id: '4dde7c9a-57ae-44c8-bd42-1ab427d7afc7',
    price: 744,
    quantity: 1,
  },
  {
    title: 'Sleek Cotton Pants',
    image: 'https://loremflickr.com/640/480/business?lock=2965264970809344',
    id: '3ecc0eee-a6b0-4c1d-bf10-0f18d5fc8166',
    price: 38,
    quantity: 3,
  },
  {
    title: 'Unbranded Wooden Shoes',
    image: 'https://loremflickr.com/640/480/business?lock=8973662268948480',
    id: '046e268b-5ff0-4ab7-8e2d-51b32ea926ca',
    price: 331,
    quantity: 1,
  },
];
