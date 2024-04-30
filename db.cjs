const { faker } = require('@faker-js/faker');
let fs = require('fs');

const generateCourse = () => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.lorem.lines({ min: 2, max: 4 }),
    image: faker.image.urlLoremFlickr({ category: 'business' }),
    rating: faker.number.int(5),
    category: faker.commerce.department(),
    durationHour: faker.number.int(12),
    durationMinute: faker.number.int(60),
    price: faker.commerce.price({ min: 100, max: 1500, dec: 0 }),
  };
};

const generatePost = () => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    content: faker.lorem.lines({ min: 10, max: 40 }),
    image: faker.image.urlLoremFlickr({ category: 'business' }),
    rating: faker.number.int(5),
    category: faker.commerce.department(),
    reviews: [],
  };
};

const generateReview = () => {
  return {
    id: faker.string.uuid(),
    user: {
      id: faker.string.uuid(),
      userName: faker.person.fullName(),
      title: faker.person.jobTitle(),
      avatar: faker.image.avatarLegacy(),
    },
    comment: faker.lorem.lines({ min: 2, max: 4 }),
    rate: faker.number.int(5),
    category: faker.commerce.department(),
    courseId: dataObj[0].id,
    createDate: faker.date.betweens({
      from: '2023-01-01T00:00:00.000Z',
      to: '2024-01-01T00:00:00.000Z',
    }),
  };
};

const generateOrder = () => {
  return {
    id: faker.string.uuid(),
    userEmailr: 's.ghasemee@gmail.com',
    userFirstName: 'Sahar',
    userLastName: 'Ghasemi',
    userPhoneNumber: '7788714303',
    cart: [
      {
        courseId: dataObj[0].id,
        title: dataObj[0].title,
        quantity: 1,
        unitPrice: 12,
        totalPrice: 12,
      },
      {
        courseId: dataObj[1].id,
        title: dataObj[1].title,
        quantity: 2,
        unitPrice: 10,
        totalPrice: 20,
      },
      {
        courseId: dataObj[2].id,
        title: dataObj[2].title,
        quantity: 1,
        unitPrice: 34,
        totalPrice: 34,
      },
    ],
  };
};

const generateCourses = (count) => {
  return Array.from({ length: count }, generateCourse);
};
const generateReviews = (count) => {
  return Array.from({ length: count }, generateReview);
};
const generatePosts = (count) => {
  return Array.from({ length: count }, generatePost);
};

let dataObj = generateCourses(10);
let orders = [generateOrder()];
const reviews = generateReviews(5);
const posts = generatePosts(10);

fs.writeFileSync(
  'data.json',
  JSON.stringify({ courses: dataObj, orders, reviews, posts }, null, '\t'),
);
