import AddTodo from "../components/AddTodo";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import prisma from "@/app/libs/prismadb";

require("dotenv").config();

export const metadata = {
  title: "To Do List",
  description: "Created by Me",
};

const apiUrl =
  process.env.NEXT_LOCAL_API_URL || process.env.NEXT_PUBLIC_API_URL;

async function getTodosData() {
  // const res = await fetch(apiUrl + "/api/posts", {
  //   cache: "no-store",
  // });
  //
  // const res = await prisma.post.findMany();
  // if (!res.ok) {
  //   throw new Error(res.status);
  // }
  // const todos = await res.json();
  // // Sort the todos based on the createdAt date in descending order
  // todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // return todos;
  try {
    const todos = await prisma.post.findMany();
    // Assuming `findMany` directly returns the todos array
    // If not, adjust accordingly based on the response structure.
    // For example, if it's { data: todos }, you'd use `const todos = res.data;`.

    // Sort the todos based on the createdAt date in descending order
    const sortedTodos = todos.sort((a, b) => b.createdAt - a.createdAt);

    // Use sortedTodos as needed.
    return sortedTodos;
  } catch (error) {
    // Handle the error here, for example, log the error or return an empty array.
    console.error("Error fetching todos:", error);
    return [];
  }
}

const page = async () => {
  const todos = await getTodosData();

  return (
    <>
      <div className="my-4">
        <Title judul="To Do List" />
        <AddTodo />
      </div>
      <TodoList todos={todos} />
    </>
  );
};

export default page;
