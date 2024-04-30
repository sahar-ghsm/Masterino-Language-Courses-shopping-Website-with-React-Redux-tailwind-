import { useLoaderData } from 'react-router-dom';
import BlogPosts from '../features/blog/BlogPosts';

function Blog() {
  const posts = useLoaderData();
  return (
    <div>
      <BlogPosts posts={posts} />
    </div>
  );
}

export async function loader() {
  const res = await getBlogPosts();
  return res;
}

export default Blog;
