// url: http://localhost:3000/api/posts
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const getPostId = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!getPostId) {
      return NextResponse.json({
        status: 404,
        message: "Post not found",
      });
    }

    return NextResponse.json(getPostId);
  } catch (error) {
    return NextResponse.error(error);
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const { title, content } = body;
    const updatePost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });

    if (!updatePost) {
      return NextResponse.json({
        status: 404,
        message: "Post not found",
      });
    }

    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.error(error);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const deletePost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletePost) {
      return NextResponse.json({
        status: 404,
        message: "Post not found",
      });
    }

    return NextResponse.json(deletePost);
  } catch (error) {
    return NextResponse.error(error);
  }
};
