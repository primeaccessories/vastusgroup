import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { LinkButton } from './Button'

interface Slide {
  eyebrow: string
  title: string
  subtitle: string
  cta: { label: string; to: string }
  image: string
}

const SLIDES: Slide[] = [
  {
    eyebrow: 'Switch & Save',
    title: "We'll cover your exit costs",
    subtitle:
      "Switch your card payments to Vastus and we'll reimburse your termination fee — up to £100 for every year you sign.",
    cta: { label: 'See the offer', to: '/services/switch-and-save' },
    image: '/hero-payments.webp',
  },
  {
    eyebrow: 'Vastus Capital',
    title: 'Funding that flexes with you',
    subtitle:
      'Secure up to 240% of your monthly card turnover. No APR, no fixed term — repay as a percentage of each sale.',
    cta: { label: 'Explore funding', to: '/capital' },
    image: '/hero-business.webp',
  },
  {
    eyebrow: 'Vastus Pay',
    title: 'The latest card payment tech',
    subtitle:
      'Take card, contactless and mobile-wallet payments anywhere you trade — bespoke pricing, UK-supported.',
    cta: { label: 'See payment options', to: '/pay' },
    image: '/hero-payment.webp',
  },
]

const AUTOPLAY_MS = 6500
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -64 : 64 }),
}

/**
 * Rotating promo banner for the homepage — carousel of headline offers
 * (Switch & Save leading). Mirrors the raffle-site hero carousel behaviour:
 * 6.5s autoplay + loop, dots, prev/next arrows, drag-to-swipe, pause on hover.
 */
export default function HeroPromoCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const paused = useRef(false)

  const paginate = useCallback((step: number) => {
    setDir(step)
    setIndex((i) => (i + step + SLIDES.length) % SLIDES.length)
  }, [])

  const goTo = useCallback(
    (i: number) => {
      setDir(i > index ? 1 : -1)
      setIndex(i)
    },
    [index],
  )

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setDir(1)
        setIndex((i) => (i + 1) % SLIDES.length)
      }
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const slide = SLIDES[index]

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <div
          className="relative overflow-hidden rounded-[1.75rem] bg-ink text-paper shadow-[0_44px_90px_-44px_rgba(11,83,245,0.55)] ring-1 ring-white/10"
          onMouseEnter={() => {
            paused.current = true
          }}
          onMouseLeave={() => {
            paused.current = false
          }}
        >
          <div className="relative h-[30rem] sm:h-[26rem]">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) paginate(1)
                  else if (info.offset.x > 80) paginate(-1)
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
                <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] rounded-full bg-mint/25 blur-[130px]" />

                <div className="relative flex h-full max-w-xl flex-col justify-center p-8 sm:p-12">
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-mint-bright/30 bg-mint/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-bright">
                    {slide.eyebrow}
                  </p>
                  <h2 className="mt-5 font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-[2.9rem]">
                    {slide.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-pretty text-sm text-paper/75 sm:text-lg">{slide.subtitle}</p>
                  <div className="mt-7">
                    <LinkButton to={slide.cta.to} variant="primary" size="lg">
                      {slide.cta.label}
                      <ArrowUpRight className="h-5 w-5" />
                    </LinkButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* prev / next (desktop) */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/40 text-paper backdrop-blur transition hover:border-mint-bright hover:text-mint-bright sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/40 text-paper backdrop-blur transition hover:border-mint-bright hover:text-mint-bright sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* dots */}
            <div className="absolute bottom-6 left-8 z-20 flex items-center gap-2 sm:left-12">
              {SLIDES.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-mint-bright' : 'w-2 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
