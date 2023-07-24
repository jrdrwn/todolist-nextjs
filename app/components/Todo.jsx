"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const Todo = ({ todo }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [todosToEdit, setTodosToEdit] = useState({
    title: todo.title,
    content: todo.content,
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const router = useRouter();

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios
      .patch(`/api/posts/${todo.id}`, todosToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTodosToEdit({ title: "", content: "" });
        setOpenModalEdit(false);
        router.refresh();
      });
  };

  const handleDelete = async () => {
    await axios
      .delete(`/api/posts/${todo.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalDelete(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    setTodosToEdit({ ...todosToEdit, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="pb-10 block max-w-full p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {todo.title}
        </h5>
        {/* <span className="text-sm text-gray-700 dark:text-gray-400">
          {todo.updatedAt}
        </span> */}
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
          {todo.content}
        </p>
        <div className="flex flex-row justify-end gap-3 -mt-14">
          <button
            onClick={() => setOpenModalEdit(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </button>
          <Modal
            isOpen={openModalEdit}
            setIsOpen={setOpenModalEdit}
            status={"Edit"}
          >
            <form className="space-y-6" onSubmit={handleEditSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Title "
                  name="title"
                  type="text"
                  value={todosToEdit.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Content
                </label>
                <textarea
                  rows="4"
                  placeholder="Details of your todo..."
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  type="text"
                  value={todosToEdit.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Update
              </button>
            </form>
          </Modal>
          <button
            onClick={() => setOpenModalDelete(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
          <Modal
            isOpen={openModalDelete}
            setIsOpen={setOpenModalDelete}
            status={"Delete"}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Are you sure?
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
              <div className="flex flex-row justify-center gap-3 mt-6">
                <button
                  onClick={() => setOpenModalDelete(false)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Todo;
