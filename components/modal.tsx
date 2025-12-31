"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    details: string[]
    benefits: string[]
    icon: LucideIcon
}

export function Modal({
    isOpen,
    onClose,
    title,
    description,
    details,
    benefits,
    icon: Icon,
}: ModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
                    >
                        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                            {/* Header */}
                            <div className="p-6 border-b border-border">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl icon-container flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 max-h-[60vh] overflow-y-auto">
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {description}
                                </p>

                                {/* How it works */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                                        How it works
                                    </h3>
                                    <ul className="space-y-2">
                                        {details.map((detail, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                                                    {index + 1}
                                                </span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                                        Key Benefits
                                    </h3>
                                    <ul className="space-y-2">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="text-primary mt-0.5">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-border bg-muted/30">
                                <button
                                    onClick={onClose}
                                    className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                                >
                                    Got it
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
