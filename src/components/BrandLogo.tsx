import { Link } from 'react-router-dom'

interface Props {
  variant?: 'light' | 'dark'
  className?: string
}

export default function BrandLogo({ variant = 'light', className = '' }: Props) {
  const isDark = variant === 'dark'
  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="A2B Payments home"
    >
      <img
        src="/a2b-logo.webp"
        alt="A2B Payments"
        width={320}
        height={56}
        className="h-9 w-auto sm:h-10"
        style={isDark ? undefined : { filter: 'brightness(0)' }}
      />
    </Link>
  )
}
