"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950" />

      {/* Radial gradient overlays for depth and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-50/30 to-transparent dark:via-cyan-950/20" />

      {/* Mesh gradient effect for modern look */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-800 dark:to-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl" />
      </div>

      {/* Subtle shine/shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 dark:from-white/2 dark:via-transparent dark:to-white/2" />

      {/* Elegant grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%236366f1' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dot pattern for texture */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%234f46e5' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(248_250_252/0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(2_6_23/0.8)_100%)]" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  )
}
