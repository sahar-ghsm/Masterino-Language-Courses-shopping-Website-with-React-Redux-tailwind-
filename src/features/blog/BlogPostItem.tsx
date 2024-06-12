import { Link } from 'react-router-dom';
import { FaRegComment } from 'react-icons/fa';

type PostProp = {
  item: {
    title: string;
    image: string;
    content: string;
    category: string;
  };
};

function BlogPostItem({ item }: PostProp) {
  return (
    <Link
      to={`blog-posts/${item.title?.replace(' ', '-')}`}
      className="flex-1 rounded-lg border border-gray-200 bg-white shadow md:h-[550px] dark:border-gray-700 dark:bg-gray-800"
    >
      <img className="h-2/5 w-full rounded-t-lg" src={item.image} />
      <div className="flex h-3/5 flex-col justify-between px-4 py-5">
        <div>
          <h3 className="text-center text-base font-semibold md:py-4 md:text-xl">
            {item.title}
          </h3>
          <p className="line-clamp-4 pb-1 pt-3 text-sm md:text-base">
            {item.content}
          </p>
        </div>
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="inline-block rounded-md bg-blue-100 px-2 py-1">
              {item.category}
            </span>
            <div className="flex items-center gap-2 text-slate-500">
              <span>no comments </span>
              <span>
                <FaRegComment />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostItem;
