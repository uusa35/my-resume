"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Simple static gradient background - no animations for better scroll performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30" />

      {/* Static gradient orbs - no blur, no animation */}
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/10 to-transparent rounded-full" />
      <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/10 to-transparent rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/10 to-transparent rounded-full" />

      {/* Simple grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
