import { API_URL } from '../utils/constants';

export async function getCourses() {
  try {
    const res = await fetch(`${API_URL}courses`);

    if (!res.ok) throw new Error('Failed to get courses, please try again...');
    const data = await res.json();
    return data;
  } catch {
    throw Error('Failed to get courses, please try again...');
  }
}

export async function getRecentCourses({ count }) {}

export async function getCourseById(courseId) {
  try {
    console.log('fetch');
    const res = await fetch(`${API_URL}courses/${courseId}`);

    if (!res.ok) throw Error('Failed to fetch course, please try again');
    const data = await res.json();
    return data;
  } catch (error) {
    throw Error(error.message);
  }
}
