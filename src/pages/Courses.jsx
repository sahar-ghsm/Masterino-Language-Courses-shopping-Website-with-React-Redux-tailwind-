import { useLoaderData } from "react-router-dom";
import { getCourses } from "../services/apiCourses";
import CourseItem from "../features/courses/CourseItem";

function Courses() {
  const courses = useLoaderData();
  return (
    <ul>
      {courses.map((item) => {
        return <CourseItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export async function loader() {
  const courses = await getCourses();
  return courses;
}

export default Courses;
