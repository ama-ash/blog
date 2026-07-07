import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-violet-600 dark:text-violet-400">
          我的博客
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-violet-600 dark:text-violet-400" : "hover:text-violet-600 dark:hover:text-violet-400 transition-colors"}>
            首页
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-violet-600 dark:text-violet-400" : "hover:text-violet-600 dark:hover:text-violet-400 transition-colors"}>
            博客
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-violet-600 dark:text-violet-400" : "hover:text-violet-600 dark:hover:text-violet-400 transition-colors"}>
            关于
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
