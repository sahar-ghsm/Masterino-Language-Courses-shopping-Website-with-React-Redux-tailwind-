function ReviewItem({ item }) {
  if (!item.user) return;

  return (
    <div className="mx-5 mt-3 bg-transparent md:mx-0 md:w-1/4">
      <div className="h-[200px] bg-white p-5 text-sm">
        <p className="line-clamp-5 leading-loose">{item.comment}</p>
      </div>
      <div className="flex-col justify-center pr-10">
        <div className="pl-10">
          <div className="h-[0px] w-[0px] border-[20px] border-b-0 border-t-[20px] border-transparent border-t-white"></div>
        </div>
        <div className="mt-5 flex gap-2">
          <img
            className="ml-8 h-[64px] w-[64px] rounded-full"
            src={item?.user?.image}
            alt="user avatar"
          />
          <div className="pt-3">
            <span className="text-xs font-bold">{item.user.firstName}</span>
            <p className="text-xs text-slate-500">{item.user.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
