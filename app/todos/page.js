import AddTodo from "../components/AddTodo";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

require("dotenv").config();

export const metadata = {
  title: "To Do List",
  description: "Created by Me",
};

const apiUrl =
  process.env.NEXT_LOCAL_API_URL || process.env.NEXT_PUBLIC_API_URL;

async function getTodosData() {
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.status);
  }
  const todos = await res.json();
  // Sort the todos based on the createdAt date in descending order
  todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return todos;
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
