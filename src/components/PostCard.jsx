import { Link } from "react-router-dom"

export default function PostCard({ post }) {
  return (
    <article className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors bg-white dark:bg-gray-900">
      <div className="flex gap-2 mb-3 flex-wrap">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        {post.summary}
      </p>
      <div className="flex items-center justify-between">
        <time className="text-xs text-gray-400">{post.date}</time>
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium"
        >
          阅读全文 →
        </Link>
      </div>
    </article>
  )
}
