import { Link } from "react-router-dom"
import PostCard from "../components/PostCard"
import { posts } from "../data/posts"

export default function Home() {
  const latestPosts = posts.slice(0, 2)

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20 text-center">
        <div className="w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-4xl mx-auto mb-6">
          👋
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          你好，我是<span className="text-violet-600 dark:text-violet-400">lzh</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          正在学习前端开发的学生，用这个博客记录我的学习旅程和技术笔记。
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/blog"
            className="px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
          >
            查看博客
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-violet-400 transition-colors"
          >
            关于我
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">最新文章</h2>
          <Link to="/blog" className="text-sm text-violet-600 dark:text-violet-400 hover:underline">
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {latestPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
