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

      {/* Islamic Geometric Pattern - Moroccan Zellige Tile Style */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.20]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='islamic-pattern' x='0' y='0' width='160' height='160' patternUnits='userSpaceOnUse'%3E%3Cg%3E%3C!-- Central 8-pointed star with fill --%3E%3Cpath d='M80,20 L90,50 L120,50 L95,70 L105,100 L80,85 L55,100 L65,70 L40,50 L70,50 Z' fill='%234f46e5' fill-opacity='0.15' stroke='%234f46e5' stroke-width='1.2'/%3E%3C!-- Surrounding squares --%3E%3Crect x='65' y='5' width='30' height='30' fill='none' stroke='%235b21b6' stroke-width='1' transform='rotate(45 80 20)'/%3E%3Crect x='5' y='65' width='30' height='30' fill='none' stroke='%235b21b6' stroke-width='1' transform='rotate(45 20 80)'/%3E%3Crect x='125' y='65' width='30' height='30' fill='none' stroke='%235b21b6' stroke-width='1' transform='rotate(45 140 80)'/%3E%3Crect x='65' y='125' width='30' height='30' fill='none' stroke='%235b21b6' stroke-width='1' transform='rotate(45 80 140)'/%3E%3C!-- Corner flowers --%3E%3Ccircle cx='0' cy='0' r='8' fill='%236366f1' fill-opacity='0.2' stroke='%234f46e5' stroke-width='1'/%3E%3Ccircle cx='160' cy='0' r='8' fill='%236366f1' fill-opacity='0.2' stroke='%234f46e5' stroke-width='1'/%3E%3Ccircle cx='0' cy='160' r='8' fill='%236366f1' fill-opacity='0.2' stroke='%234f46e5' stroke-width='1'/%3E%3Ccircle cx='160' cy='160' r='8' fill='%236366f1' fill-opacity='0.2' stroke='%234f46e5' stroke-width='1'/%3E%3C!-- Connecting geometric lines --%3E%3Cpath d='M0,80 L20,80 M140,80 L160,80 M80,0 L80,20 M80,140 L80,160' stroke='%234f46e5' stroke-width='1.5' stroke-opacity='0.4'/%3E%3C!-- Decorative corner triangles --%3E%3Cpath d='M0,0 L20,0 L0,20 Z' fill='%235b21b6' fill-opacity='0.1'/%3E%3Cpath d='M160,0 L140,0 L160,20 Z' fill='%235b21b6' fill-opacity='0.1'/%3E%3Cpath d='M0,160 L20,160 L0,140 Z' fill='%235b21b6' fill-opacity='0.1'/%3E%3Cpath d='M160,160 L140,160 L160,140 Z' fill='%235b21b6' fill-opacity='0.1'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23islamic-pattern)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Secondary Islamic Pattern - Traditional Arabesque */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='arabesque' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cg%3E%3C!-- Interlocking circles --%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.5'/%3E%3Ccircle cx='0' cy='0' r='25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.5'/%3E%3Ccircle cx='100' cy='0' r='25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.5'/%3E%3Ccircle cx='0' cy='100' r='25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.5'/%3E%3Ccircle cx='100' cy='100' r='25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.5'/%3E%3C!-- Central decorative element --%3E%3Cpath d='M50,35 L55,45 L65,45 L57,52 L60,62 L50,56 L40,62 L43,52 L35,45 L45,45 Z' fill='%234f46e5' fill-opacity='0.2'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23arabesque)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(248_250_252/0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(2_6_23/0.8)_100%)]" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  )
}
