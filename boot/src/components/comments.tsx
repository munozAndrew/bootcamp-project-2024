// Comment.tsx
"use client"; 

import React from 'react';

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

function parseCommentTime(time: Date): string {

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',   // e.g. September
    day: 'numeric',  // e.g. 16
    year: 'numeric', // e.g. 2024
    hour: 'numeric',
    minute: '2-digit'
  };
  return new Date(time).toLocaleString('en-US', options);
}

type CommentProps = {
  comment: IComment;
};

export default function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}
