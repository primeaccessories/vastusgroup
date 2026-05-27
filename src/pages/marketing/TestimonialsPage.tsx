import { Quote, Star } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { LinkButton } from '../../components/Button'
import { TESTIMONIALS } from '../../lib/testimonials'

export default function TestimonialsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Testimonials</p>
        <h1 className="mt-3 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          What our customers say.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          We're proudest of the businesses we serve — the cafés, restaurants, retailers and trade suppliers across the UK who trust us to handle their money.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-ink/5 bg-paper p-7">
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-mint-deep" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-mint text-mint" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 text-pretty text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-ink-fade">{t.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-ink p-10 text-paper sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Be our next happy customer.
              </h2>
              <p className="mt-3 max-w-xl text-paper/70">
                We'll match or beat your current rate, and back it up with the kind of service the banks gave up on years ago.
              </p>
            </div>
            <LinkButton to="/contact" variant="primary" size="lg">
              Get your quote
              <ArrowUpRight className="h-5 w-5" />
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}
