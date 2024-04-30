import { API_URL } from '../utils/constants';

export async function getPosts() {
  try {
    const res = await fetch(`${API_URL}posts`);

    if (!res.ok) throw Error('Failed to get blog posts, please try again...');
    const data = await res.json();
    return data;
  } catch {
    throw Error('Failed to get blog posts, please try again...');
  }
}
