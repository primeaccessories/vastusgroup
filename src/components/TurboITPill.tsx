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
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-paper/50">
        By
      </span>
      <span
        className="text-sm font-extrabold tracking-tight normal-case"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #a78bfa 0%, #00b0f0 25%, #22d3ee 50%, #00b0f0 75%, #a78bfa 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'turbo-gradient-swoop 4s linear infinite',
        }}
      >
        Turbo IT
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#00b0f0]/40 bg-[#00b0f0]/10 text-[#00b0f0] transition-all duration-300 group-hover:border-[#00b0f0]/70 group-hover:bg-[#00b0f0]/20 group-hover:shadow-[0_0_12px_rgba(0,176,240,0.6)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </a>
  )
}
