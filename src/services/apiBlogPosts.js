import { API_URL } from '@/utils/constants';
import { supabase } from './supabase';

export async function getBlogPosts() {
  try {
    let { data: posts, error } = await supabase.from('Posts').select('*');

    if (error) throw Error('Failed to get blog posts, please try again...');
    return posts;
  } catch {
    throw Error('Failed to get blog posts, please try again...');
  }
}
