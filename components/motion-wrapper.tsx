"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
    children: ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right"
    className?: string
}

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = ""
}: FadeInProps) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
                duration: 0.5,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface ScaleInProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function ScaleIn({
    children,
    delay = 0,
    className = ""
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
                duration: 0.4,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({
    children,
    className = ""
}: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface HoverScaleProps {
    children: ReactNode
    className?: string
    scale?: number
}

export function HoverScale({
    children,
    className = "",
    scale = 1.02
}: HoverScaleProps) {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
