"use client"

import { ReactNode } from "react"

interface GlowingTextProps {
  children: ReactNode
  className?: string
}

export function GlowingText({ children, className = "" }: GlowingTextProps) {
  return (
    <h2 className={`relative ${className}`}>
      <span className="relative inline-block text-gray-900 dark:text-gray-100">
        {children}
      </span>
    </h2>
  )
}
