type Size = 'sm' | 'md' | 'lg'
type Tone = 'light' | 'dark'

const SIZE_MAP: Record<Size, { box: string; img: string }> = {
  sm: { box: 'h-9 w-9 rounded-lg', img: 'max-h-7 max-w-7' },
  md: { box: 'h-20 w-20 rounded-2xl', img: 'max-h-14 max-w-14' },
  lg: { box: 'h-28 w-28 rounded-3xl sm:h-32 sm:w-32', img: 'max-h-20 max-w-20 sm:max-h-24 sm:max-w-24' },
}

const TONE_MAP: Record<Tone, string> = {
  light: 'bg-white ring-1 ring-ink/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]',
  dark: 'bg-white/95 ring-1 ring-white/20 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]',
}

interface ProductImageProps {
  src: string
  alt: string
  size?: Size
  tone?: Tone
  className?: string
}

export default function ProductImage({ src, alt, size = 'md', tone = 'light', className = '' }: ProductImageProps) {
  const s = SIZE_MAP[size]
  return (
    <span className={`inline-flex ${s.box} items-center justify-center overflow-hidden ${TONE_MAP[tone]} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={`${s.img} object-contain`} />
    </span>
  )
}
