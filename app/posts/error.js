"use client";

const error = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div role="status">
          <div className="px-3 py-1 text-2xl font-semibold leading-none text-center text-red-800 bg-red-200 rounded-full animate-pulse dark:bg-red-900 dark:text-red-200">
            Error. . .
          </div>
        </div>
      </div>
    </>
  );
};

export default error;
