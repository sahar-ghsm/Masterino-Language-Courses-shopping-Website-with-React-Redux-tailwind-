import { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem.tsx';
import { getBlogPosts } from '@/services/apiBlogPosts';
import List from '@/ui/List.tsx';

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
    <List
      items={posts}
      render={(item) => <BlogPostItem key={item.id} item={item} />}
    />
  );
}

export default LatestCourses;
