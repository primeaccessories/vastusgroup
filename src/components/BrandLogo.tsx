import { Link } from 'react-router-dom'

interface Props {
  variant?: 'light' | 'dark'
  className?: string
  to?: string
  /** Use a native <a> + full page navigation so we leave any nested router context. */
  hardNav?: boolean
}

export default function BrandLogo({ variant = 'light', className = '', to = '/', hardNav = false }: Props) {
  const isDark = variant === 'dark'
  const img = (
    <img
      src={isDark ? '/vastus-logo-dark.webp' : '/vastus-logo-light.webp'}
      alt="Vastus"
      width={320}
      height={43}
      className="h-9 w-auto sm:h-10"
    />
  )
  const linkClass = `group inline-flex items-center ${className}`
  if (hardNav) {
    return (
      <a href={to} className={linkClass} aria-label="Vastus home">
        {img}
      </a>
    )
  }
  return (
    <Link to={to} className={linkClass} aria-label="Vastus home">
      {img}
    </Link>
  )
}
