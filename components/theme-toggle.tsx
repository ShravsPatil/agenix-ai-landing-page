"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check initial theme
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        if (newIsDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-xl theme-toggle flex items-center justify-center">
                <div className="w-5 h-5" />
            </button>
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl theme-toggle flex items-center justify-center text-foreground"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    )
}
