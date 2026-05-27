interface Props {
  className?: string
}

export default function TurboITPill({ className = '' }: Props) {
  const utm = new URLSearchParams({
    utm_source: 'a2bpayments',
    utm_medium: 'footer',
    utm_campaign: 'powered_by',
  })
  return (
    <a
      href={`https://turboit.uk/?${utm.toString()}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-paper/70 transition hover:border-mint/40 hover:bg-mint/10 hover:text-paper ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
      Site by <span className="font-semibold text-paper">Turbo IT</span>
    </a>
  )
}
