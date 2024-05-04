import { useLoaderData } from 'react-router-dom';
import { getCourseById } from '../services/apiCourses';
import ChapterItem from '../features/courses/ChapterItem';
import TutorBio from '../features/courses/TutorBio';
import Reviews from '../features/user/Reviews';
import NewReview from '../features/user/NewReview';
import { createReview } from '../services/apiUsers';
import AddToCart from '../features/cart/AddToCart';

function Course() {
  const course = useLoaderData();

  async function submitNewReview(newReview) {
    const review = {
      ...newReview,
      itemSubject: 'course',
      itemId: course.id,
      itemCategory: course.category,
    };
    const res = await createReview(review);
    console.log('new', res);
  }
  return (
    <div>
      <div className="mx-auto flex max-w-screen-lg flex-1 gap-4 p-5">
        <div className="md:w-3/4">
          <h1 className="mb-5 font-semibold">{course.title}</h1>
          <img className="mb-5 w-full" src={course.image} alt={course.title} />

          <div className="text-justify text-sm leading-7 md:text-left">
            {course.description}
          </div>
          <h3 className="mb-3 mt-8 text-base font-semibold">Chapters</h3>
          <div>
            {course.chapters.map((chapter) => (
              <ChapterItem key={chapter.title} item={chapter} />
            ))}
          </div>
          <TutorBio tutor={course.tutor} />
          <Reviews reviews={course.reviews} title={course.title} />
          <div className="mt-5">
            <NewReview submitNewReview={submitNewReview} />
          </div>
        </div>
        <div className="mt-10 hidden h-[150px] w-1/4 rounded-md bg-slate-100 shadow-xl md:block">
          <AddToCart course={course} />
        </div>
        <div
          className="fixed bottom-0 left-0 
        right-0 z-10 flex h-[100px] w-full items-center
         justify-between bg-white shadow-md md:hidden"
        >
          <AddToCart course={course} />
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const course = await getCourseById(params.courseId);
  return course;
}

export default Course;
