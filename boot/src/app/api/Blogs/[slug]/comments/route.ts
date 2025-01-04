import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

type Params = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { slug } = params;
    
    // 1. Parse JSON from request body
    const { user, comment } = await req.json();

    // 2. Validate required fields
    if (!user || !comment) {
      return NextResponse.json({ error: 'Missing user or comment.' }, { status: 400 });
    }

    // 3. Push new comment to the specified blog
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        $push: {
          comments: {
            user,
            comment,
            time: new Date(),
          },
        },
      },
      { new: true }  // returns the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
    }

    // 4. Return the updated blog (or just the new comment if you prefer)
    return NextResponse.json(updatedBlog, { status: 201 });
  } catch (err) {
    console.error('Error posting comment:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
