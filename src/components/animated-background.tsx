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

      {/* Islamic Geometric Pattern - Star and Polygon */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='islamic-pattern' x='0' y='0' width='200' height='200' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%234f46e5' stroke-width='0.8' fill='none' opacity='0.4'%3E%3C!-- Central 8-pointed star --%3E%3Cpath d='M100,40 L110,70 L140,70 L115,90 L125,120 L100,105 L75,120 L85,90 L60,70 L90,70 Z'/%3E%3C!-- Surrounding geometric shapes --%3E%3Cpolygon points='100,0 120,20 100,40 80,20'/%3E%3Cpolygon points='200,100 180,120 160,100 180,80'/%3E%3Cpolygon points='100,200 80,180 100,160 120,180'/%3E%3Cpolygon points='0,100 20,80 40,100 20,120'/%3E%3C!-- Corner decorations --%3E%3Ccircle cx='0' cy='0' r='15'/%3E%3Ccircle cx='200' cy='0' r='15'/%3E%3Ccircle cx='200' cy='200' r='15'/%3E%3Ccircle cx='0' cy='200' r='15'/%3E%3C!-- Connecting lines --%3E%3Cline x1='40' y1='40' x2='60' y2='60'/%3E%3Cline x1='160' y1='40' x2='140' y2='60'/%3E%3Cline x1='160' y1='160' x2='140' y2='140'/%3E%3Cline x1='40' y1='160' x2='60' y2='140'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23islamic-pattern)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Secondary Islamic Pattern - Interlocking Hexagons */}
      <div
        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='104' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hexagon-pattern' x='0' y='0' width='120' height='104' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%236366f1' stroke-width='0.6' fill='none' opacity='0.3'%3E%3Cpath d='M30,0 L60,0 L75,26 L60,52 L30,52 L15,26 Z'/%3E%3Cpath d='M90,26 L120,26 L135,52 L120,78 L90,78 L75,52 Z'/%3E%3Cpath d='M30,52 L60,52 L75,78 L60,104 L30,104 L15,78 Z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hexagon-pattern)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(248_250_252/0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(2_6_23/0.8)_100%)]" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  )
}
