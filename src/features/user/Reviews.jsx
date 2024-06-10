import { dateStringFormat } from '@/utils/helpers';
import Rating from '@/ui/Rating';

function Reviews({ reviews, title }) {
  console.log(reviews[0].createDate);
  if (!reviews?.length) return null;
  return (
    <div className="p-5 shadow-md">
      <h3 className="mb-5 text-base font-semibold">{`${reviews.length} review(s) for ${title}`}</h3>
      <div className="my-3 flex flex-col gap-4 divide-y-2">
        {reviews.map((review) => (
          <div className="flex gap-4 pt-3" key={review.id}>
            <img
              src={review.user.avatar}
              alt="user-avatar"
              className="h-[64px] w-[64-px] rounded-full border-2"
            />
            <div className="flex flex-col justify-center">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs">
                  <span className=" font-semibold">
                    {`${review.user.firstName}`}
                  </span>
                  <span className="block">
                    {dateStringFormat(review.createDate)}
                  </span>
                </span>
                <Rating value={review.rate} />
              </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
