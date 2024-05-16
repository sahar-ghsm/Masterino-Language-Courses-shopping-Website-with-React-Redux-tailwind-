const { faker } = require('@faker-js/faker');
let fs = require('fs');

const generateCourse = () => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.lorem.lines({ min: 2, max: 40 }),
    image: faker.image.urlLoremFlickr({ category: 'business' }),
    rating: {
      average: faker.number.int(5),
      reviewCount: faker.number.int(100),
    },
    category: faker.commerce.department(),
    durationHour: faker.number.int(12),
    durationMinute: faker.number.int(60),
    price: faker.commerce.price({ min: 100, max: 1500, dec: 0 }),
    chapters: [
      {
        title: faker.commerce.department(),
        durationHour: faker.number.int(12),
        durationMinute: faker.number.int(60),
        description: faker.lorem.lines({ min: 2, max: 14 }),
      },
    ],
    tutor: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),
      avatar: faker.image.avatarLegacy(),
    },
    reviews: [
      {
        comment: faker.lorem.lines({ min: 2, max: 4 }),
        createDate: faker.date.birthdate(),
        id: faker.string.uuid(),
        rate: faker.number.int(5),
        user: {
          id: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          avatar: faker.image.avatarLegacy(),
        },
      },
    ],
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
    itemCategory: faker.commerce.department(),
    itemSubject: 'course',
    itemId: dataObj[0].id,
    createDate: faker.date.birthdate(),
  };
};

const generateOrder = () => {
  return {
    id: faker.string.uuid(),
    userEmaile: 's.ghasemee@gmail.com',
    userFirstName: 'Sahar',
    userLastName: 'Ghasemi',
    userPhoneNumber: '7788714303',
    totalPrice: faker.number.int(100000),
    createDate: faker.date.birthdate(),
    paymentMethod: 'on Delivery',
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
