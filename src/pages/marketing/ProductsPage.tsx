import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import GlassIcon from '../../components/GlassIcon'
import { PRODUCTS } from '../../lib/products'

export default function ProductsPage() {
  const payments = PRODUCTS.filter((p) => p.category === 'payments')
  const finance = PRODUCTS.filter((p) => p.category === 'finance')

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Products</p>
        <h1 className="mt-4 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Take payments. Get funded. <span className="text-mint-deep">Stay in control.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          A2B is the single partner for everything money-related — from your countertop terminal to a six-figure cash advance. One contact, one statement, one team.
        </p>
      </section>

      <ProductSection title="Payments" tagline="Take card payments anywhere you trade." items={payments} />
      <ProductSection title="Business finance" tagline="Funding options that fit how your business actually works." items={finance} dark />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <GlassCard surface="light" className="bg-gradient-to-br from-mint/25 via-paper to-paper p-10 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-ink-muted">
                Send us your last statement and we'll come back with a like-for-like quote within 24 hours. No commitment.
              </p>
            </div>
            <LinkButton to="/contact" variant="secondary" size="lg">
              Get a quote
              <ArrowUpRight className="h-5 w-5" />
            </LinkButton>
          </div>
        </GlassCard>
      </section>
    </>
  )
}

interface ProductSectionProps {
  title: string
  tagline: string
  items: typeof PRODUCTS
  dark?: boolean
}

function ProductSection({ title, tagline, items, dark = false }: ProductSectionProps) {
  return (
    <section className={dark ? 'bg-ink-soft text-paper' : 'bg-paper'}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                dark ? 'text-mint/80' : 'text-mint-deep'
              }`}
            >
              {dark ? 'Business finance' : 'Card payments'}
            </p>
            <h2
              className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
                dark ? 'text-paper' : 'text-ink'
              }`}
            >
              {title}
            </h2>
            <p className={`mt-3 max-w-xl ${dark ? 'text-paper/60' : 'text-ink-muted'}`}>{tagline}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="contents">
              <GlassCard surface={dark ? 'dark' : 'light'} interactive className="p-7 sm:p-8">
                <GlassIcon Icon={p.Icon} tone={dark ? 'mint' : 'mint'} size="md" />
                <h3
                  className={`mt-6 font-display text-lg font-semibold tracking-tight sm:text-xl ${
                    dark ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {p.title}
                </h3>
                <p className={`mt-2 text-sm ${dark ? 'text-paper/60' : 'text-ink-muted'}`}>{p.tagline}</p>
                <ul className="mt-5 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        dark ? 'text-paper/75' : 'text-ink-muted'
                      }`}
                    >
                      <span
                        className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${
                          dark ? 'bg-mint' : 'bg-mint-deep'
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                    dark ? 'text-mint' : 'text-mint-deep'
                  }`}
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
