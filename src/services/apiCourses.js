import { API_URL } from '@/utils/constants';
import { supabase } from './supabase';

export async function getCourses() {
  try {
    let { data: courses, error } = await supabase.from('Courses').select('*');
    if (error) throw new Error('Failed to get courses, please try again...');

    return courses;
  } catch {
    throw Error('Failed to get courses, please try again...');
  }
}

export async function getRecentCourses({ count }) {}

export async function getCourseById(courseId) {
  try {
    let { data: courses, error } = await supabase
      .from('Courses')
      .select('*')
      .eq('id', courseId);

    if (error) throw Error('Failed to fetch course, please try again');
    return courses;
  } catch (error) {
    throw Error(error.message);
  }
}
