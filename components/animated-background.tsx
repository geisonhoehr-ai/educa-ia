"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-pink-200/30 dark:bg-pink-800/20 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-xl animate-pulse delay-3000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
    </div>
  )
}
