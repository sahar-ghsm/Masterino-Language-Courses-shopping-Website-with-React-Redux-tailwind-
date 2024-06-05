import { useLoaderData } from 'react-router-dom';
import { getCourses } from '../services/apiCourses';
import CourseItem from '../features/courses/CourseItem';
import List from '../ui/List';

function Courses() {
  const courses = useLoaderData();

  if (!courses?.length)
    return (
      <div className="text-center text-base font-semibold text-slate-700 md:text-xl">
        No Courses are found, Please call Customer service.
      </div>
    );

  return (
    <List
      items={courses}
      render={(item) => <CourseItem key={item.id} item={item} />}
    />
  );
}

export async function loader() {
  const courses = await getCourses();
  return courses;
}

export default Courses;
