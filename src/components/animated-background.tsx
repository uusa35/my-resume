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

      {/* Technical Pattern - Circuit Board Style */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.20]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit-pattern' x='0' y='0' width='200' height='200' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%234f46e5' stroke-width='1.5' fill='none'%3E%3C!-- Horizontal lines --%3E%3Cline x1='0' y1='50' x2='40' y2='50' stroke-opacity='0.5'/%3E%3Cline x1='60' y1='50' x2='100' y2='50' stroke-opacity='0.5'/%3E%3Cline x1='120' y1='50' x2='200' y2='50' stroke-opacity='0.5'/%3E%3Cline x1='0' y1='150' x2='80' y2='150' stroke-opacity='0.5'/%3E%3Cline x1='100' y1='150' x2='200' y2='150' stroke-opacity='0.5'/%3E%3C!-- Vertical lines --%3E%3Cline x1='50' y1='0' x2='50' y2='40' stroke-opacity='0.5'/%3E%3Cline x1='50' y1='60' x2='50' y2='100' stroke-opacity='0.5'/%3E%3Cline x1='150' y1='0' x2='150' y2='80' stroke-opacity='0.5'/%3E%3Cline x1='150' y1='100' x2='150' y2='200' stroke-opacity='0.5'/%3E%3C!-- Circuit nodes --%3E%3Ccircle cx='50' cy='50' r='4' fill='%234f46e5' fill-opacity='0.3' stroke='%234f46e5' stroke-width='1'/%3E%3Ccircle cx='100' cy='50' r='3' fill='%236366f1' fill-opacity='0.3'/%3E%3Ccircle cx='150' cy='50' r='3' fill='%236366f1' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='150' r='3' fill='%236366f1' fill-opacity='0.3'/%3E%3Ccircle cx='150' cy='150' r='4' fill='%234f46e5' fill-opacity='0.3' stroke='%234f46e5' stroke-width='1'/%3E%3C!-- Microchip rectangles --%3E%3Crect x='90' y='40' width='20' height='20' fill='none' stroke='%235b21b6' stroke-width='1.2' stroke-opacity='0.4'/%3E%3Crect x='40' y='140' width='20' height='20' fill='none' stroke='%235b21b6' stroke-width='1.2' stroke-opacity='0.4'/%3E%3C!-- Connection paths --%3E%3Cpath d='M100,50 L150,50 L150,100' stroke='%234f46e5' stroke-width='1' stroke-opacity='0.3'/%3E%3Cpath d='M50,50 L50,100 L100,100' stroke='%234f46e5' stroke-width='1' stroke-opacity='0.3'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circuit-pattern)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Secondary Technical Pattern - Code/Binary Style */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='tech-pattern' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Cg%3E%3C!-- Hexagonal tech grid --%3E%3Cpolygon points='60,10 80,25 80,55 60,70 40,55 40,25' fill='none' stroke='%236366f1' stroke-width='1' stroke-opacity='0.4'/%3E%3Cpolygon points='20,40 30,47 30,61 20,68 10,61 10,47' fill='none' stroke='%234f46e5' stroke-width='0.8' stroke-opacity='0.3'/%3E%3Cpolygon points='100,40 110,47 110,61 100,68 90,61 90,47' fill='none' stroke='%234f46e5' stroke-width='0.8' stroke-opacity='0.3'/%3E%3C!-- Tech nodes --%3E%3Ccircle cx='60' cy='40' r='2' fill='%234f46e5' fill-opacity='0.4'/%3E%3Ccircle cx='20' cy='54' r='1.5' fill='%236366f1' fill-opacity='0.4'/%3E%3Ccircle cx='100' cy='54' r='1.5' fill='%236366f1' fill-opacity='0.4'/%3E%3C!-- Angular brackets like code --%3E%3Cpath d='M35,80 L30,85 L35,90' stroke='%235b21b6' stroke-width='1' fill='none' stroke-opacity='0.3'/%3E%3Cpath d='M85,80 L90,85 L85,90' stroke='%235b21b6' stroke-width='1' fill='none' stroke-opacity='0.3'/%3E%3C!-- Small squares like pixels --%3E%3Crect x='58' y='95' width='4' height='4' fill='%234f46e5' fill-opacity='0.2'/%3E%3Crect x='48' y='15' width='3' height='3' fill='%236366f1' fill-opacity='0.2'/%3E%3Crect x='68' y='15' width='3' height='3' fill='%236366f1' fill-opacity='0.2'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23tech-pattern)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(248_250_252/0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgb(2_6_23/0.8)_100%)]" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  )
}
