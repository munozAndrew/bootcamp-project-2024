import mongoose, { Schema } from "mongoose";

type Blog = {
    title: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    imageAlt: { type: String, required: true },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);
export default Blog;
