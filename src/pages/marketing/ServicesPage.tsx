import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import ServiceGrid from '../../components/ServiceGrid'
import { servicesByCategory, type ServiceCategory } from '../../lib/services'

interface Division {
  category: ServiceCategory
  word: string
  href: string
  pitch: string
}

const DIVISIONS: Division[] = [
  { category: 'pay', word: 'Pay', href: '/pay', pitch: 'Seamless payment solutions for every business.' },
  { category: 'capital', word: 'Capital', href: '/capital', pitch: 'Flexible funding that fuels growth at every stage.' },
  { category: 'utilities', word: 'Utilities', href: '/utilities', pitch: 'Smarter utility solutions to power your business.' },
  { category: 'technology', word: 'Technology', href: '/technology', pitch: 'Digital solutions designed to transform and scale your business.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* INTRO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-mint/25 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-16">
          <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/55 sm:text-xs">
            <span className="h-px w-8 bg-mint-bright" />
            Our Services
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
            One Group. Multiple Solutions.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-paper/70 sm:text-lg">
            Powering your business with payments, finance, utilities and technology — all under one roof, from one dedicated UK team.
          </p>
        </div>
      </section>

      {/* DIVISIONS */}
      {DIVISIONS.map((division, i) => (
        <section key={division.category} className={i % 2 === 1 ? 'bg-paper-soft' : 'bg-paper'}>
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
              {/* LABEL */}
              <div className="lg:pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mint-deep">Vastus</p>
                <h2 className="mt-1 font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
                  {division.word}
                </h2>
                <p className="mt-3 max-w-xs text-pretty text-sm text-ink-muted">{division.pitch}</p>
                <Link
                  to={division.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint-deep transition hover:text-ink"
                >
                  Explore Vastus {division.word}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* GRID */}
              <ServiceGrid services={servicesByCategory(division.category)} />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <GlassCard surface="light" className="bg-gradient-to-br from-mint/15 via-paper to-paper p-10 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-ink-muted">
                Tell us what your business needs and we'll point you to the right part of the group — no pressure, no jargon.
              </p>
            </div>
            <LinkButton to="/contact" variant="secondary" size="lg">
              Talk to us
              <ArrowUpRight className="h-5 w-5" />
            </LinkButton>
          </div>
        </GlassCard>
      </section>
    </>
  )
}
