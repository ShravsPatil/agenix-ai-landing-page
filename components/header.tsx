"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
              <Image
                src="/favicon.png"
                alt="Agenix AI Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </div>
            <div className="text-xl font-bold tracking-tight text-foreground">Agenix AI</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Use Cases
            </Link>
            <Link
              href="#stats"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Stats
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft"></span>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
