import Title from "../components/Title";

export const metadata = {
  title: "Posts",
  description: "Created by Me",
};

async function getPostsData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

const Posts = async () => {
  const posts = await getPostsData();

  return (
    <div>
      <Title judul="Posts" />
      <ul className="flex flex-row flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <a
            key={post.id}
            className="md:basis-1/3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight border-b-4 text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {post.body}
            </p>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
