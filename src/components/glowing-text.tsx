"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GlowingTextProps {
  children: ReactNode
  className?: string
}

export function GlowingText({ children, className = "" }: GlowingTextProps) {
  return (
    <motion.h2
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="relative inline-block text-gray-900 dark:text-gray-100">
        {children}

        {/* Subtle glow effect */}
        <motion.span
          className="absolute inset-0 blur-sm text-blue-600/40 dark:text-blue-400/40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        >
          {children}
        </motion.span>
      </span>
    </motion.h2>
  )
}
