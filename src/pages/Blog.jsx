import PostCard from "../components/PostCard"
import { posts } from "../data/posts"

export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h5 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">博客</h5>
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
