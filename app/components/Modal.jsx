const Modal = ({ children, isOpen, setIsOpen, status }) => {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={
        isOpen
          ? "h-screen flex items-center justify-center fixed top-0 left-0 right-0 z-50 drop-shadow-xl p-4 overflow-x-hidden overflow-y-auto md:inset-0"
          : "hidden"
      }
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {status} your todo
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
