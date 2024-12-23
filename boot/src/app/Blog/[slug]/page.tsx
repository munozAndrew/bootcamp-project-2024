import React from "react";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comments";

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

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug }= params;
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
      {/* Convert "blog.date" to a nice string, e.g. using toLocaleDateString */}
      <p>{new Date(blog.date).toLocaleDateString()}</p>
      <img src={blog.image} alt={blog.imageAlt} />
      <div>{blog.content}</div>

      {/* Comments Section */}
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
    </main>
  );
}
