"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(`/api/Blogs/${slug}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, comment }),
    });

    if (response.ok) {
      router.refresh();
      setUser("");
      setComment("");
    } else {
      console.error("Failed to submit comment:", response.statusText);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Name:</label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          required
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
}
