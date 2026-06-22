import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Quote, Star, X, Youtube } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../lib/testimonials'

interface Props {
  limit?: number
}

export default function TestimonialGrid({ limit }: Props) {
  const items = typeof limit === 'number' ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS
  const [active, setActive] = useState<Testimonial | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((t) => (
          <TestimonialCard
            key={t.slug}
            t={t}
            onOpen={() => setActive(t)}
            featured={Boolean(t.video)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && <TestimonialModal t={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  )
}

function TestimonialCard({
  t,
  onOpen,
  featured = false,
}: {
  t: Testimonial
  onOpen: () => void
  featured?: boolean
}) {
  const wrapperClasses = featured
    ? 'group relative flex h-full flex-col overflow-hidden rounded-3xl bg-paper text-left shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] ring-2 ring-mint/60 transition hover:-translate-y-0.5 hover:ring-mint sm:col-span-2 lg:col-span-2'
    : 'group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-paper p-0 text-left transition hover:-translate-y-0.5 hover:border-mint/40 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]'

  return (
    <button type="button" onClick={onOpen} className={wrapperClasses}>
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px left-1/2 hidden h-1 w-32 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-mint via-mint-deep to-mint sm:block"
        />
      )}

      {t.video ? (
        <div className="relative aspect-video w-full overflow-hidden bg-ink">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={t.video.mp4}
            poster={t.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-paper shadow-lg">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
            Featured interview
          </span>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold tracking-tight text-paper sm:text-xl">
                {t.name}
              </p>
              <p className="truncate text-xs text-paper/80 sm:text-sm">
                {t.role} <span className="text-paper/60">— {t.business}</span>
              </p>
            </div>
            <span
              className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl p-1.5 ring-2 ring-paper/40 sm:h-14 sm:w-14 ${
                t.logoBg === 'dark' ? 'bg-ink' : 'bg-paper'
              }`}
            >
              <img
                src={t.logo}
                alt={`${t.business} logo`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
          </div>
        </div>
      ) : (
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden ${
            t.logoBg === 'dark' ? 'bg-ink' : 'bg-paper-soft'
          }`}
        >
          <img
            src={t.logo}
            alt={`${t.business} logo`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover ${t.imagePos ?? 'object-center'}`}
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-7 lg:p-8' : 'p-5 sm:p-6'}`}>
        {!t.video && (
          <div className="min-w-0">
            <p className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
              {t.business}
            </p>
            <p className="truncate text-xs text-ink-fade sm:text-sm">
              {t.name} <span className="text-ink-fade/70">— {t.role}</span>
            </p>
          </div>
        )}

        <div className={`flex items-center gap-0.5 text-mint-deep ${t.video ? '' : 'mt-3 sm:mt-4'}`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              className={`fill-current ${featured ? 'h-4 w-4' : 'h-3 w-3 sm:h-3.5 sm:w-3.5'}`}
              strokeWidth={0}
            />
          ))}
        </div>

        <p
          className={`mt-3 flex-1 text-pretty ${
            featured
              ? 'text-base text-ink sm:text-lg'
              : 'line-clamp-4 text-xs text-ink-muted sm:text-sm'
          }`}
        >
          “{t.shortQuote}”
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-mint-deep transition group-hover:text-ink sm:mt-5 sm:text-xs">
          {t.video ? 'Watch full interview' : 'Read full story'}
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </button>
  )
}

function TestimonialModal({ t, onClose }: { t: Testimonial; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/60 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-paper shadow-[0_40px_100px_-30px_rgba(15,23,42,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink hover:text-paper"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-6 border-b border-ink/5 bg-paper-soft px-7 py-7 sm:px-9 sm:py-8">
          <span
            className={`inline-flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl p-3 ring-1 sm:h-36 sm:w-36 ${
              t.logoBg === 'dark' ? 'bg-ink ring-ink/20' : 'bg-paper ring-ink/10'
            }`}
          >
            <img src={t.logo} alt={`${t.business} logo`} className="h-full w-full object-contain" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {t.business}
            </p>
            <p className="text-sm text-ink-muted">
              {t.name} <span className="text-ink-fade">— {t.role}</span>
            </p>
            <div className="mt-2 flex items-center gap-0.5 text-mint-deep">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-7 py-7 sm:px-9 sm:py-9">
          {t.video ? (
            <div className="space-y-5">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-[0_20px_50px_-20px_rgba(15,23,30,0.4)] ring-1 ring-ink/10">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={t.video.mp4}
                  poster={t.video.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </div>
              <p className="text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                {t.quote}
              </p>
              {t.video.channelUrl && (
                <a
                  href={t.video.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group/yt flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper-soft p-4 transition hover:border-[#FF0000]/40 hover:bg-paper sm:p-5"
                >
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-sm sm:h-14 sm:w-14">
                    <Youtube className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                      Watch the full podcast
                    </p>
                    <p className="truncate text-sm text-ink-muted">
                      @JACKFSAYLESS · all episodes on YouTube
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-ink-fade transition group-hover/yt:translate-x-0.5 group-hover/yt:text-[#FF0000]" />
                </a>
              )}
            </div>
          ) : (
            <>
              <Quote className="h-7 w-7 text-mint-deep" />
              <p className="mt-4 whitespace-pre-line text-pretty text-base leading-relaxed text-ink sm:text-lg">
                {t.quote}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
