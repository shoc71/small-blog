import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Store posts in a JSON file
const filePath = path.join(process.cwd(), 'posts.json')

// Ensure the file exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]))
}

type Post = {
  id: number
  content: string
  createdAt: string
}

export async function GET() {
  const data = fs.readFileSync(filePath, 'utf-8')
  const posts: Post[] = JSON.parse(data)
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  if (!body.post || typeof body.post !== 'string') {
    return NextResponse.json({ error: 'Invalid post' }, { status: 400 })
  }

  const data = fs.readFileSync(filePath, 'utf-8')
  const posts: Post[] = JSON.parse(data)

  const newPost: Post = {
    id: Date.now(),
    content: body.post,
    createdAt: new Date().toISOString(),
  }

  posts.unshift(newPost)
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2))

  return NextResponse.json(newPost)
}
