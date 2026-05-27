import type { LucideIcon } from 'lucide-react'

type Tone = 'mint' | 'paper' | 'ink'
type Size = 'sm' | 'md' | 'lg'

const SIZE_MAP: Record<Size, { box: string; icon: string; rounded: string }> = {
  sm: { box: 'h-10 w-10', icon: 'h-4 w-4', rounded: 'rounded-xl' },
  md: { box: 'h-12 w-12', icon: 'h-5 w-5', rounded: 'rounded-2xl' },
  lg: { box: 'h-16 w-16', icon: 'h-7 w-7', rounded: 'rounded-2xl' },
}

const TONE_MAP: Record<Tone, { wrap: string; icon: string; gloss: string }> = {
  mint: {
    wrap: 'bg-gradient-to-b from-mint/30 via-mint/15 to-mint/5 ring-mint/30',
    icon: 'text-mint',
    gloss: 'from-mint/50 via-mint/15 to-transparent',
  },
  paper: {
    wrap: 'bg-gradient-to-b from-white/20 via-white/8 to-white/0 ring-white/15',
    icon: 'text-paper',
    gloss: 'from-white/40 via-white/10 to-transparent',
  },
  ink: {
    wrap: 'bg-gradient-to-b from-ink/15 via-ink/5 to-ink/0 ring-ink/10',
    icon: 'text-ink',
    gloss: 'from-white/60 via-white/0 to-transparent',
  },
}

interface GlassIconProps {
  Icon: LucideIcon
  tone?: Tone
  size?: Size
  className?: string
}

export default function GlassIcon({ Icon, tone = 'mint', size = 'md', className = '' }: GlassIconProps) {
  const s = SIZE_MAP[size]
  const t = TONE_MAP[tone]
  return (
    <span
      className={`relative isolate inline-flex ${s.box} ${s.rounded} items-center justify-center ${t.wrap} shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] ring-1 backdrop-blur-xl ${className}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-2 top-1 h-1/3 ${s.rounded} bg-gradient-to-b ${t.gloss} opacity-80`}
      />
      <Icon className={`relative ${s.icon} ${t.icon}`} strokeWidth={1.75} />
    </span>
  )
}
