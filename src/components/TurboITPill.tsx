import { Zap } from 'lucide-react'

interface Props {
  className?: string
}

export default function TurboITPill({ className = '' }: Props) {
  const utm = new URLSearchParams({
    utm_source: 'vastus',
    utm_medium: 'footer',
    utm_campaign: 'powered_by',
  })
  return (
    <a
      href={`https://turboit.uk/?${utm.toString()}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-11 items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1.5 text-xs font-medium text-paper/80 transition-all duration-300 hover:border-mint-bright/60 hover:bg-mint/15 hover:text-paper hover:shadow-[0_0_18px_-2px_rgba(11,83,245,0.55)] ${className}`}
    >
      <Zap
        className="h-3.5 w-3.5 text-mint-bright drop-shadow-[0_0_5px_rgba(77,131,255,0.55)] transition-all duration-300 group-hover:drop-shadow-[0_0_9px_rgba(77,131,255,0.95)]"
        aria-hidden="true"
      />
      Site by <span className="font-semibold text-paper">Turbo IT</span>
    </a>
  )
}
