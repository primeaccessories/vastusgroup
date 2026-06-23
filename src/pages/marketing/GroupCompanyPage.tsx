import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react'
import { LinkButton } from '../../components/Button'
import GlassIcon from '../../components/GlassIcon'
import { groupBySlug, TECH_SERVICES, type GroupSlug } from '../../lib/group'
import { PRODUCTS } from '../../lib/products'

export default function GroupCompanyPage({ slug }: { slug: GroupSlug }) {
  const company = groupBySlug(slug)
  if (!company) return null

  const products =
    company.offers === 'payments'
      ? PRODUCTS.filter((p) => p.category === 'payments')
      : company.offers === 'finance'
        ? PRODUCTS.filter((p) => p.category === 'finance')
        : []

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full bg-mint/25 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20">
          <Link to="/group" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mint-bright transition hover:text-paper">
            <ArrowLeft className="h-3.5 w-3.5" /> The Vastus Group
          </Link>
          <div className="mt-6 flex h-20 w-fit items-center rounded-2xl bg-white px-6 ring-1 ring-white/10">
            <img src={company.logo} alt={company.name} className="max-h-12 w-auto object-contain" />
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
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
      </section>

      {/* PRODUCT OFFERINGS (payments / finance) */}
      {products.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">{company.tag}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">What we offer</h2>
            <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/[0.06] shadow-[0_24px_60px_-36px_rgba(10,18,38,0.5)] transition duration-300 hover:-translate-y-1 hover:ring-mint/40"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-b from-white to-[#f4f6f7]">
                    <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-[1.06]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-muted">{p.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mint-deep">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECH SERVICES */}
      {company.offers === 'technology' && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">What we build</h2>
            <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
              {TECH_SERVICES.map((s) => (
                <div key={s.title} className="rounded-3xl bg-white p-6 ring-1 ring-ink/[0.06] shadow-[0_24px_60px_-36px_rgba(10,18,38,0.4)] sm:p-7">
                  <GlassIcon Icon={s.Icon} tone="mint" size="md" />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CAPITAL — funding calculator teaser (coming soon) */}
      {company.slug === 'capital' && (
        <section className="bg-paper-soft">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-3xl border border-dashed border-mint/40 bg-white p-8 text-center sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Coming soon</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Funding calculator</h3>
              <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-muted">See in seconds how much your business could access — and what repayments might look like. Launching shortly.</p>
              <div className="mt-6">
                <LinkButton to="/contact" variant="secondary" size="md">Get a funding quote<ArrowUpRight className="h-4 w-4" /></LinkButton>
              </div>
            </div>
          </div>
        </section>
      )}

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
