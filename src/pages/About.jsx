export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">关于我</h1>

      <div className="flex items-center gap-6 mb-12 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800">
        <div className="w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-4xl shrink-0">
          😊
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">lzh</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">前端学习者 · 博客作者</p>
        </div>
      </div>

      <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          你好！我是lzh，一名正在学习前端开发的学生。这个博客是我记录学习过程、分享技术笔记的地方。
        </p>
        <p>
          我目前主要在学习 <strong className="text-gray-900 dark:text-white">React</strong>、
          <strong className="text-gray-900 dark:text-white">JavaScript</strong> 和
          <strong className="text-gray-900 dark:text-white">Tailwind CSS</strong>。
          希望通过写作来加深理解，也希望能帮助到同样在学习的朋友。
        </p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "Vite"].map(skill => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
