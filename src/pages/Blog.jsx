import { useLoaderData } from 'react-router-dom';
import BlogPostItem from '../features/blog/BlogPostItem';
import { getBlogPosts } from '../services/apiBlogPosts';

function Blog() {
  const posts = useLoaderData();

  return (
    <div>
      <ul className="mx-5 mt-5 flex flex-col justify-center gap-4 md:mx-auto md:grid md:max-w-screen-lg md:grid-cols-3 md:flex-row md:px-5">
        {posts.map((item) => {
          return <BlogPostItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export async function loader() {
  const res = await getBlogPosts();
  return res;
}

export default Blog;
