const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="mx-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a
              href="https://www.instagram.com/rahmat710_/"
              className="hover:underline"
            >
              Rahmat
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
