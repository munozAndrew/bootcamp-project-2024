// app/blog/[slug]/page.tsx
import React from "react";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comments";
import CommentForm from "./CommentForm";   // Import the Client Component for the form

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

async function getBlog(slug: string) {
  await connectDB();
  try {
    const doc = await Blog.findOne({ slug }).orFail();
    return JSON.parse(JSON.stringify(doc));
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
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

      <section>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>

      {/* Client Component form to add new comments */}
      <CommentForm slug={slug} />
    </main>
  );
}
