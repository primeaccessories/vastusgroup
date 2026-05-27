import { Link } from 'react-router-dom'

interface Props {
  variant?: 'light' | 'dark'
  className?: string
}

export default function BrandLogo({ variant = 'light', className = '' }: Props) {
  const isDark = variant === 'dark'
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="A2B Payments home">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg shadow-sm transition group-hover:shadow-md ${
          isDark ? 'bg-mint text-ink' : 'bg-ink text-mint'
        }`}
      >
        <span className="font-display text-base font-black tracking-tight">A2B</span>
      </div>
      <span
        className={`font-display text-[15px] font-semibold tracking-tight ${
          isDark ? 'text-paper' : 'text-ink'
        }`}
      >
        A2B Payments
      </span>
    </Link>
  )
}
