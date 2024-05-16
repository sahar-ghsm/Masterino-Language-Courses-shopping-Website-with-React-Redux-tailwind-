import { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { getBlogPosts } from '../../services/apiBlogPosts';

function LatestCourses({ count }) {
  const [posts, setPosts] = useState(null);
  useEffect(
    function () {
      async function fetchPosts() {
        const res = await getBlogPosts();
        const postCount = count || res.length;
        setPosts(res.slice(Math.max(res.length - postCount, 0)));
      }

      fetchPosts();
    },
    [setPosts],
  );

  return (
    <div className="flex flex-col justify-center gap-5 px-5 md:flex-row md:px-3">
      {posts?.map((item) => (
        <BlogPostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default LatestCourses;
