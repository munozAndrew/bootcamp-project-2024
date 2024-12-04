import React from "react";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  await connectDB();
  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main>
        <h1>Blog Not Found</h1>
        <p>The requested blog could not be found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{new Date(blog.date).toLocaleDateString()}</p>
      <img src={blog.image} alt={blog.imageAlt} />
      <div>{blog.content}</div>
    </main>
  );
}
