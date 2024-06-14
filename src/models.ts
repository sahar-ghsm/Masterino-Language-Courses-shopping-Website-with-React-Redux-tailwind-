export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  rating_average: number;
  rating_review: number;
  durationHour: number;
  durationMinute: number;
  price: number;
  category: string;
  reviews: Array<Review>;
};

export enum Category {
  Business = 'Business',
  Learning = 'Learning',
  Education = 'Education',
}

export type BlogPost = {
  title: string;
  content: string;
  image: string;
  rating_average: number;
  rating_review: number;
  category: string;
  reviews: Array<Review>;
};

export type Review = {
  user: User;
  comment: string;
  subject_id: number;
  rate: number;
  id: number;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

export type Card = {
  title: string;
  image: string;
  id: string;
  price: number;
  quantity: number;
};
