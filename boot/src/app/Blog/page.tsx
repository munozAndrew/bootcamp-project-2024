import React from 'react';
import BlogPreview from '@/components/blogPreview';
import { blogs } from "../../static/blogData";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <div>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} {...blog} />
        ))}
      </div>
    </main>
  );
}
