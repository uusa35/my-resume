"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/50" />

      {/* Large animated gradient orbs with heavy blur */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/25 via-cyan-400/18 to-indigo-400/12 dark:from-blue-600/20 dark:via-cyan-600/15 dark:to-indigo-600/10 rounded-full"
        style={{ filter: "blur(100px)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 80, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/25 via-pink-400/18 to-fuchsia-400/12 dark:from-purple-600/20 dark:via-pink-600/15 dark:to-fuchsia-600/10 rounded-full"
        style={{ filter: "blur(120px)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -80, 0],
          y: [0, 100, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/22 via-teal-400/16 to-green-400/12 dark:from-emerald-600/18 dark:via-teal-600/13 dark:to-green-600/8 rounded-full"
        style={{ filter: "blur(110px)" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -90, 0],
          y: [0, -70, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 right-1/4 w-[750px] h-[750px] bg-gradient-to-tl from-orange-400/22 via-amber-400/16 to-yellow-400/12 dark:from-orange-600/18 dark:via-amber-600/13 dark:to-yellow-600/8 rounded-full"
        style={{ filter: "blur(115px)" }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, 110, 0],
          y: [0, -90, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-rose-400/18 via-violet-400/14 to-blue-400/10 dark:from-rose-600/14 dark:via-violet-600/11 dark:to-blue-600/7 rounded-full"
        style={{ filter: "blur(130px)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid pattern overlay - more prominent */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dot pattern overlay - more visible */}
      <div
        className="absolute inset-0 opacity-[0.20] dark:opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23000000'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80 L80 0' stroke='%23000000' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Radial gradient overlay for vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30 dark:to-black/40" />
    </div>
  )
}
