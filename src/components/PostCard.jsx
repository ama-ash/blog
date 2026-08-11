import { Link } from "react-router-dom"

export default function PostCard({ post }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-violet-300 sm:p-6 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="rounded-full bg-violet-100 px-2 py-1 text-xs text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-violet-600 sm:text-xl dark:text-white dark:group-hover:text-violet-400">
        <Link
          to={`/blog/${post.slug}`}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mb-5 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
        {post.summary}
      </p>
      <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
        <time className="text-xs text-gray-500 dark:text-gray-400">
          {post.date}
        </time>
        <Link
          to={`/blog/${post.slug}`}
          className="w-fit text-sm font-medium text-violet-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:text-violet-300"
        >
          阅读全文 <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
