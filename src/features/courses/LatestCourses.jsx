import { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
import { getCourses } from '../../services/apiCourses';

function LatestCourses({ count }) {
  const [courses, setCourses] = useState(null);
  useEffect(
    function () {
      async function fetchCourses() {
        // const res = await getRecentCourses({ count });
        const res = await getCourses();
        const courseCount = count || res.length;
        setCourses(res.slice(Math.max(res.length - courseCount, 0)));
      }

      fetchCourses();
    },
    [setCourses],
  );
  return (
    <div className="flex flex-col justify-center gap-4 px-5 md:flex-row">
      {courses?.map((item) => (
        <CourseItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default LatestCourses;
