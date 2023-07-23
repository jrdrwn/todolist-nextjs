import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <>
      <div
        href="#"
        class="block max-w-full p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {todo.title}
        </h5>
        {/* <span class="text-sm text-gray-700 dark:text-gray-400">
          {todo.updatedAt}
        </span> */}
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {todo.content}
        </p>
      </div>
    </>
  );
};

export default Todo;
