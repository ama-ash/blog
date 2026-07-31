export const posts = [
  {
    id: 1,
    slug: "hello-world",
    title: "你好，世界！",
    date: "2026-07-07",
    summary: "这是我的第一篇博客文章，记录我学习 React 的旅程。",
    content: `欢迎来到我的个人博客！

这是我用 React + Vite + Tailwind CSS 搭建的第一个网站。从零开始学习前端开发，是一段充满挑战但也很有趣的旅程。

## 我学到了什么

- HTML 是网页的骨架
- CSS 让网页变得美观
- JavaScript 让网页有了生命
- React 让开发更加高效

## 下一步

接下来我会继续学习更多 React 的知识，比如 Hooks、状态管理等。敬请期待！`,
    tags: ["React", "学习", "前端"]
  },
  {
    id: 2,
    slug: "react-hooks",
    title: "React Hooks 入门",
    date: "2026-07-08",
    summary: "介绍 React 中最常用的 Hooks：useState 和 useEffect。",
    content: `React Hooks 是 React 16.8 引入的新特性，让函数组件也能拥有状态和生命周期。

## useState

\`useState\` 用于在组件中添加状态：

\`\`\`jsx
const [count, setCount] = useState(0)
\`\`\`

## useEffect

\`useEffect\` 用于处理副作用，比如请求数据：

\`\`\`jsx
useEffect(() => {
  fetchData()
}, [])
\`\`\`

掌握这两个 Hook，你就能处理大多数场景了。`,
    tags: ["React", "Hooks", "教程"]
  },
  {
    id: 3,
    slug: "tailwind-tips",
    title: "Tailwind CSS 实用技巧",
    date: "2026-07-09",
    summary: "分享几个让 Tailwind CSS 更高效的使用技巧。",
    content: `Tailwind CSS 是一个功能类优先的 CSS 框架，用起来非常高效。

## 响应式设计

Tailwind 内置响应式前缀，非常方便：

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">响应式文字</div>
\`\`\`

## 深色模式

只需加 \`dark:\` 前缀：

\`\`\`html
<div class="bg-white dark:bg-gray-900">自动适配深色模式</div>
\`\`\`

## 自定义颜色

在配置文件中可以扩展你的品牌色。`,
    tags: ["CSS", "Tailwind", "教程"]
  },
  {
    id: 4,
    slug:"learn-powershell",
    title:"我的PowerShell学习之路",
    date:"2026-07-28",
    summary:"记录我第一次学习PowerShell的过程。",
    content:`## PowerShell是一个功能强大的命令行工具和脚本语言，主要用于系统管理和自动化任务。`,
    tags:["PowerShell","学习","脚本"],
  }
]
