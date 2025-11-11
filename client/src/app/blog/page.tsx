'use client'

import { useEffect, useState } from 'react'

type Post = {
  id: number
  content: string
  createdAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [input, setInput] = useState('')

  // Fetch posts from server when page loads
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: input }),
    })

    const newPost: Post = await res.json()
    setPosts([newPost, ...posts])
    setInput('')
  }

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
        <textarea
          placeholder="Write your post..."
          className="p-2 rounded-md text-black"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>

      {/* Display posts */}
      <div className="flex flex-col gap-4">
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-white rounded-md">
            {post.content}
          </div>
        ))}
      </div>
    </div>
  )
}
