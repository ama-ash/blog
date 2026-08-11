
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 rounded-full bg-violet-600 text-white p-3 shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
            aria-label="回到顶部"
        >
            ↑
        </button>
    )
}
