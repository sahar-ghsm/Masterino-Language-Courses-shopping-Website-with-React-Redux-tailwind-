import { useEffect, useState } from 'react';
import { getReviews } from '@/services/apiUsers';
import ReviewItem from '@/features/user/ReviewItem.tsx';

function HomeCustomerReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(
    function () {
      async function fetchReviews() {
        const data = await getReviews();
        setReviews(data.slice(Math.max(data.length - 3, 0)));
      }

      fetchReviews();
    },
    [setReviews],
  );

  return (
    <div className="flex flex-col justify-center gap-5 md:flex-row">
      {reviews.map((item) => (
        <ReviewItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default HomeCustomerReviews;
