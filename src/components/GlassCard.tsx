import type { ReactNode } from 'react'

type Surface = 'light' | 'dark'

interface GlassCardProps {
  children: ReactNode
  surface?: Surface
  className?: string
  interactive?: boolean
}

export default function GlassCard({
  children,
  surface = 'light',
  className = '',
  interactive = false,
}: GlassCardProps) {
  const base =
    surface === 'dark'
      ? 'bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-white/[0.01] ring-white/10 text-paper'
      : 'bg-gradient-to-b from-white via-paper to-paper ring-ink/[0.06] text-ink'

  const interactiveCls = interactive
    ? surface === 'dark'
      ? 'transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:ring-white/20'
      : 'transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:ring-ink/10'
    : ''

  const glossTop =
    surface === 'dark'
      ? 'from-white/[0.10] via-white/[0.02] to-transparent'
      : 'from-white via-white/40 to-transparent'

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-3xl p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] ring-1 ${base} ${interactiveCls} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${
          surface === 'dark' ? 'from-transparent via-white/30 to-transparent' : 'from-transparent via-ink/15 to-transparent'
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-6 top-0 h-1/3 rounded-b-full bg-gradient-to-b ${glossTop} opacity-70 blur-2xl`}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
