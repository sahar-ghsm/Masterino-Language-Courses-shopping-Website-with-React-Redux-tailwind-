import { supabase } from './supabase';

export async function getReviews() {
  try {
    let { data: Review, error } = await supabase.from('Review').select('*');

    if (error) throw Error('couldnt fetch customer reviews, please refresh.');

    return Review;
  } catch {
    throw Error('couldnt fetch customer reviews, please refresh.');
  }
}

export async function createReview(newReview) {
  try {
    const { data, error } = await supabase
      .from('Review')
      .insert([newReview])
      .select();

    if (error) throw Error('couldnt fetch new review, please refresh.');
    return data;
  } catch {
    throw Error('couldnt fetch customer reviews, please refresh.');
  }
}

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  if (!res.ok) throw Error('Failed to fetch address');

  const data = await res.json();
  return data;
}
