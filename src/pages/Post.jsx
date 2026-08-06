import { useParams, Link, Navigate } from "react-router-dom"
import { posts } from "../data/posts"

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <main className="w-full min-w-0 max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 mb-8 transition-colors"
      >
        ← 返回博客
      </Link>

      <div className="flex gap-2 mb-4 flex-wrap">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl sm:text-4xl break-words font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>
      <time className="text-sm text-gray-400">{post.date}</time>

      <article className="mt-10 prose prose-gray dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-violet-600">
        {post.content.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return <h2 key={i} className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">{block.slice(3)}</h2>
          }
          if (block.startsWith("```")) {
            const code = block.replace(/```[\w]*\n?/, "").replace(/```$/, "")
            return (
              <pre key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto text-sm my-4">
                <code className="text-gray-800 dark:text-gray-200">{code}</code>
              </pre>
            )
          }
          return <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{block}</p>
        })}
      </article>
    </main>
  )
}
