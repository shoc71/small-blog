import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-10">Welcome to My Blog</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          href="/add"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Add New Blog
        </Link>
        <Link
          href="/blog"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View Blog
        </Link>
        <Link
          href="/table"
          className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Table View
        </Link>
      </div>
    </div>
  );
}
