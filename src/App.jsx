import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<Post />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
