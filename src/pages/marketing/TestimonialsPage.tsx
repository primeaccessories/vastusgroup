import { ArrowUpRight, Star } from 'lucide-react'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import TestimonialGrid from '../../components/TestimonialGrid'
import { TESTIMONIALS } from '../../lib/testimonials'

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-mint/20 blur-3xl sm:h-[26rem] sm:w-[26rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 left-[-10%] h-60 w-60 rounded-full bg-mint/10 blur-3xl sm:h-80 sm:w-80"
        />

        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
          <h1 className="font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            What our customers say{' '}
            <span className="text-mint-deep">— and why they keep saying it.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
            From village pubs to gyms to seaside hotels, the businesses on this page trusted us with the
            single most important thing they own: their money. Here's what they said back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-mint-deep">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">
                5-star average
                <span className="ml-1.5 font-normal text-ink-fade">
                  across every customer on this page
                </span>
              </span>
            </div>

            <div className="hidden h-6 w-px bg-ink/10 sm:block" />

            <div className="flex items-center gap-3">
              <span className="flex -space-x-2">
                {TESTIMONIALS.slice(0, 5).map((t) => (
                  <span
                    key={t.slug}
                    title={t.business}
                    className={`inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full p-1 ring-2 ring-paper ${
                      t.logoBg === 'dark' ? 'bg-ink' : 'bg-paper-soft'
                    }`}
                  >
                    <img
                      src={t.logo}
                      alt={`${t.business} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </span>
                ))}
              </span>
              <span className="text-sm text-ink-muted">
                Hospitality · retail · trade · competitions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <TestimonialGrid />

        <GlassCard surface="dark" className="mt-16 p-10 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Be our next happy customer.
              </h2>
              <p className="mt-3 max-w-xl text-paper/70">
                We'll match or beat your current rate, and back it up with the kind of service the banks gave up on years
                ago.
              </p>
            </div>
            <LinkButton to="/contact" variant="primary" size="lg">
              Get your quote
              <ArrowUpRight className="h-5 w-5" />
            </LinkButton>
          </div>
        </GlassCard>
      </section>
    </>
  )
}
