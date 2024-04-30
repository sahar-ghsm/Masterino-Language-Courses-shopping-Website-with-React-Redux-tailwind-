import { API_URL } from '../utils/constants';

export async function getCourses() {
  const res = await fetch(`${API_URL}courses`);

  if (!res.ok) throw new Error('Failed to get courses, please try again...');
  const data = await res.json();
  return data;
}

export async function getRecentCourses({ count }) {}
