import { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { getCourses } from '../../services/apiCourses';

function LatestCourses({ count = posts.length, posts }) {
  const selectedPosts = posts.slice(Math.max(posts.length - count, 0));

  return (
    <div className="flex max-w-screen-lg justify-center gap-4">
      {selectedPosts?.map((item) => (
        <BlogPostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default LatestCourses;
