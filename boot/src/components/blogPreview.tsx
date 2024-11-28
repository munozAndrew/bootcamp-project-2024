import React from 'react';
import style from './blogPreview.module.css';
import Image from "next/image";
import { Blog } from "../static/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <h3>{props.title}</h3>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={500}
        height={500}
        className={style.blogImage}
      />
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
}
