import PostCard from "../components/PostCard"
import { posts } from "../data/posts"

export default function Blog() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
        博客
      </h1>
      <div className="text-gray-600 dark:text-gray-400 mb-12">
        共 {posts.length} 篇文章，记录我的思考。
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
