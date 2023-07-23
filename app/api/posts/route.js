// url: http://localhost:3000/api/posts
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, content } = body;
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.error(error);
  }
};

export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error(error);
  }
};
