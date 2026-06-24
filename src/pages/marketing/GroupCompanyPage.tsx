import { Link } from 'react-router-dom'
import HeroBackdrop from '../../components/HeroBackdrop'
import { ArrowLeft, ArrowUpRight, Check, Phone } from 'lucide-react'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import FundingCalculator from '../../components/FundingCalculator'
import ServiceGrid from '../../components/ServiceGrid'
import SwitchSaveBanner from '../../components/SwitchSaveBanner'
import { groupBySlug, type GroupSlug } from '../../lib/group'
import { servicesByCategory } from '../../lib/services'

export default function GroupCompanyPage({ slug }: { slug: GroupSlug }) {
  const company = groupBySlug(slug)
  if (!company) return null

  const services = servicesByCategory(company.slug)

  return (
    <>
      {/* HERO — hidden on /capital, which opens straight into "What we offer" */}
      {company.slug !== 'capital' && (
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <HeroBackdrop image={company.slug === 'pay' ? '/hero-payments.webp' : company.slug === 'technology' ? '/hero-payment.webp' : '/hero-business.webp'} />
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20">
          <div className={`grid items-center gap-10 lg:gap-14 ${company.highlights ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
            <div>
              <Link to="/group" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mint-bright transition hover:text-paper">
                <ArrowLeft className="h-3.5 w-3.5" /> The Vastus Group
              </Link>
              <p className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper/55">
                <span className="h-px w-8 flex-none bg-mint-bright" />
                {company.name} · {company.tag}
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
                {company.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-paper/70 sm:text-lg">{company.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/contact" variant="primary" size="lg">
                  {company.offers === 'technology' ? 'Start a project' : 'Get a quote'}
                  <ArrowUpRight className="h-5 w-5" />
                </LinkButton>
                <a
                  href="tel:03334432645"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-semibold text-paper transition hover:border-mint-bright hover:text-mint-bright"
                >
                  <Phone className="h-5 w-5" /> 0333 443 2645
                </a>
              </div>
            </div>

            {company.highlights && (
              <GlassCard surface="dark" className="lg:ml-auto lg:w-full lg:max-w-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-bright">
                  Why {company.name}
                </p>
                <ul className="mt-5 space-y-4">
                  {company.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-mint/20 text-mint-bright">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] leading-snug text-paper/85">{h}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
      )}

      {/* SWITCH & SAVE PROMO — Vastus Pay only */}
      {company.slug === 'pay' && <SwitchSaveBanner />}

      {/* SERVICE OFFERINGS */}
      {services.length > 0 && (
        <section className="bg-paper">
          <div className={`mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 ${company.slug === 'capital' ? 'pt-28 sm:pt-36' : 'pt-16 sm:pt-20'}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">{company.tag}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">What we offer</h2>
            <div className="mt-10">
              <ServiceGrid services={services} />
            </div>
          </div>
        </section>
      )}

      {/* CAPITAL — funding calculator */}
      {company.slug === 'capital' && <FundingCalculator />}

      {/* CLOSING CTA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-paper ring-1 ring-white/10 sm:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready to talk?</h2>
                <p className="mt-3 max-w-xl text-pretty text-paper/70">Speak to the {company.name} team — no pressure, no jargon.</p>
              </div>
              <LinkButton to="/contact" variant="primary" size="lg">Contact us<ArrowUpRight className="h-5 w-5" /></LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
