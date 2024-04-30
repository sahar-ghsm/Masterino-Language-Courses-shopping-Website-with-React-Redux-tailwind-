export const API_URL = 'http://localhost:5000/';

export const COURSES_PAGE = '/courses';
export const BLOG_PAGE = '/blog';
export const TERMS_OF_USE_PAGE = '/terms-of-use';
export const HOME_PAGE = '/';
export const ORDER_PAGE = (orderId) => `/order/${orderId}`;
export const COURSE_PAGE = (courseTitle) =>
  `${COURSES_PAGE}/${courseTitle.replace(' ', '-')}`;
export const CART_ADDRESS = '/cart';
export const NEW_ORDER = '/order/new';

export const LOREM_CONTENT =
  'Lorem Epsom is a fake text with the production of incomprehensible simplicity from the printing industry, and with the use of graphic designers, printers and texts, but also newspapers and magazines in columns and lines as necessary, and for the current conditions of the technology required, and diverse applications with the aim of improving the tools It is practical, many books in sixty-three percent of the past, present and future require a lot of knowledge from the society and experts, to create more knowledge for computer designers, especially creative designers, and the leading culture in Persian language. In this case, we can hope that all the difficulty in providing solutions, and the difficult conditions of typing will end, and the time required, including the typesetting of the main achievements, and answering the continuous questions of the existing world of design will be basically used.';
