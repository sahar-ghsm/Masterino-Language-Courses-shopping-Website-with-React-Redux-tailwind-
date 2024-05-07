import { useLoaderData } from 'react-router-dom';
import { getCourses } from '../services/apiCourses';
import CourseItem from '../features/courses/CourseItem';

function Courses() {
  const courses = useLoaderData();

  if (!courses?.length)
    return (
      <div className="text-center text-base font-semibold text-slate-700 md:text-xl">
        No Courses are found, Please call Customer service.
      </div>
    );

  return (
    <div>
      <ul className="mx-5 mt-5 flex flex-col justify-center gap-4 md:mx-auto md:grid md:max-w-screen-lg md:grid-cols-3 md:flex-row md:px-5">
        {courses.map((item) => {
          return <CourseItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export async function loader() {
  const courses = await getCourses();
  return courses;
}

export default Courses;
