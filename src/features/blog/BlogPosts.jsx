import { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';

function LatestCourses({ count, posts }) {
  const selectedPosts = posts.slice(
    Math.max(posts.length - (count || posts.length), 0),
  );

  return (
    <ul className="mx-5 flex flex-col justify-center gap-4 md:flex-row">
      {selectedPosts?.map((item) => (
        <BlogPostItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default LatestCourses;
