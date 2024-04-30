import { API_URL } from '../utils/constants';

export async function getReviews() {
  try {
    const res = await fetch(`${API_URL}reviews`);
    if (!res.ok) throw Error('couldnt fetch customer reviews, please refresh.');

    const data = await res.json();
    return data;
  } catch {
    throw Error('couldnt fetch customer reviews, please refresh.');
  }
}
