import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full min-w-0 max-w-4xl flex-1 items-center px-4 py-16 sm:px-6 sm:py-24">
      <section className="max-w-xl">
        <p className="mb-3 text-sm font-semibold text-violet-700 dark:text-violet-300">404</p>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          找不到这个页面
        </h1>
        <p className="mb-8 text-base leading-7 text-gray-600 dark:text-gray-400">
          这个地址可能已更改、被删除，或输入有误。
        </p>
        <Link
          to="/"
          className="inline-flex rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
        >
          返回首页
        </Link>
      </section>
    </main>
  )
}