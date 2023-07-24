import AddTodo from "../components/AddTodo";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

require("dotenv").config();

export const metadata = {
  title: "To Do List",
  description: "Created by Me",
};

async function getTodosData() {
  const res = await fetch("/api/posts", {
    cache: "no-store",
  });
  //
  // const res = await prisma.post.findMany();
  if (!res.ok) {
    throw new Error(res.status);
  }
  const todos = await res.json();
  // Sort the todos based on the createdAt date in descending order
  todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return todos
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
