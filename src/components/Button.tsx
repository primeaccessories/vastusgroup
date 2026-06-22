import { Link } from 'react-router-dom'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]'

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-mint text-paper shadow-[0_8px_24px_-12px_rgba(11,83,245,0.7)] hover:bg-mint-bright hover:shadow-[0_12px_28px_-12px_rgba(11,83,245,0.9)]',
  secondary:
    'bg-ink text-paper hover:bg-ink-soft',
  ghost:
    'bg-transparent text-ink hover:bg-ink/5',
  inverse:
    'bg-paper text-ink hover:bg-mint hover:text-paper',
}

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: SharedProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...rest}
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = false,
}: SharedProps & { to: string; external?: boolean }) {
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
