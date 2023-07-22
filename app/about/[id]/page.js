import Link from "next/link";

const DynamicPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-4xl">Ini adalah about page dengan id {params.id}</h1>
      <Link href="/" className="mt-8 text-2xl">
        Home Page
      </Link>
    </div>
  );
};

export default DynamicPage;
