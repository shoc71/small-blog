"use client";

import React, { useState } from "react";

type DescriptionBlock = {
  type: "text" | "bold" | "italic" | "highlight" | "link" | "center";
  content: string;
  href?: string;
};

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [currentType, setCurrentType] = useState<DescriptionBlock["type"]>("text");
  const [href, setHref] = useState("");
  const [description, setDescription] = useState<DescriptionBlock[]>([]);
  const [status, setStatus] = useState("");

  const addBlock = () => {
    if (!currentContent.trim()) return;

    const newBlock: DescriptionBlock = { type: currentType, content: currentContent };
    if (currentType === "link" && href) newBlock.href = href;

    setDescription([...description, newBlock]);
    setCurrentContent("");
    setHref("");
  };

  const handleSubmit = async () => {
    if (!title || !author || description.length === 0) {
      setStatus("⚠️ Please fill in all fields and add at least one description block.");
      return;
    }

    const res = await fetch(`${window.location.origin}/api/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, description }),
    });

    if (res.ok) {
      setStatus("✅ Post added successfully!");
      setTitle("");
      setAuthor("");
      setDescription([]);
    } else {
      setStatus("❌ Failed to save post.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded text-white"
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 rounded text-white border-white"
        />

        <div className="flex gap-2 items-center">
          <select
            value={currentType}
            onChange={(e) => setCurrentType(e.target.value as DescriptionBlock["type"])}
            className="p-2 rounded text-white bg-black"
          >
            <option value="text">Text</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
            <option value="highlight">Highlight</option>
            <option value="link">Link</option>
            <option value="center">Center</option>
          </select>

          <input
            type="text"
            placeholder="Enter content..."
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            className="flex-1 p-2 rounded text-white"
          />

          {currentType === "link" && (
            <input
              type="text"
              placeholder="Link URL"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              className="p-2 rounded text-white w-1/2"
            />
          )}

          <button
            onClick={addBlock}
            className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200"
          >
            Add
          </button>
        </div>

        <div className="mt-4 border border-gray-700 rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Preview:</h2>
          <div className="space-y-2">
            {description.map((block, i) => {
              switch (block.type) {
                case "bold":
                  return <strong key={i}>{block.content}</strong>;
                case "italic":
                  return <em key={i}>{block.content}</em>;
                case "highlight":
                  return (
                    <mark key={i} className="bg-yellow-300 dark:bg-yellow-500/50 px-1">
                      {block.content}
                    </mark>
                  );
                case "link":
                  return (
                    <a
                      key={i}
                      href={block.href}
                      className="text-blue-400 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {block.content}
                    </a>
                  );
                case "center":
                  return (
                    <p key={i} className="text-center font-medium">
                      {block.content}
                    </p>
                  );
                default:
                  return <p key={i}>{block.content}</p>;
              }
            })}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Submit Blog
        </button>

        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
    </div>
  );
}
