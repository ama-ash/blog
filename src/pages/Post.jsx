import { useParams, Link, Navigate } from "react-router-dom"
import { posts } from "../data/posts"
import ReactMarkdown from "react-markdown";
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

      <article className="mt-10 max-w-none text-green-700 dark:text-green-300 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:my-1 [&_a]:text-violet-600 dark:[&_a]:text-violet-400 [&_code]:text-green-800 dark:[&_code]:text-green-100 [&_pre]:text-green-800 dark:[&_pre]:text-green-100">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  )
}
