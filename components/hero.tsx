"use client"

import { Sparkles, Zap, Bot } from "lucide-react"
import { FadeIn } from "./motion-wrapper"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Sky Blue Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Floating Elements - Sky Blue */}
      <motion.div
        className="absolute top-32 left-10 md:left-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-14 h-14 rounded-2xl floating-icon flex items-center justify-center">
          <Bot className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-48 right-10 md:right-32"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-12 h-12 rounded-xl floating-icon flex items-center justify-center">
          <Zap className="w-6 h-6 text-primary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-10 h-10 rounded-lg floating-icon flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Next-Generation AI Automation</span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-foreground">AI agents that </span>
              <span className="text-primary">automate real business tasks</span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Transform your business operations with intelligent AI agents that handle repetitive work,
              streamline processes, and free your team to focus on what matters most.
            </p>
          </FadeIn>

          {/* Visual Stats Banner */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">AI Agents</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">10x</div>
                  <div className="text-xs text-muted-foreground">Faster Processing</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Automation</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
