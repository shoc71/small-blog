"use client";
import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  author: string;
  date: string;
};

export default function TablePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 rounded text-black w-full max-w-md"
      />
      <table className="w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((post) => (
            <tr key={post.id} className="border-t border-gray-700 hover:bg-gray-900">
              <td className="p-3">{post.title}</td>
              <td className="p-3">{post.author}</td>
              <td className="p-3">{new Date(post.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
