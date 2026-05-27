import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../components/Button'
import { PRODUCTS } from '../../lib/products'

export default function ProductsPage() {
  const payments = PRODUCTS.filter((p) => p.category === 'payments')
  const finance = PRODUCTS.filter((p) => p.category === 'finance')

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Products</p>
        <h1 className="mt-3 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Take payments. Get funded. <span className="text-mint-deep">Stay in control.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          A2B is the single partner for everything money-related — from your countertop terminal to a six-figure cash advance. One contact, one statement, one team.
        </p>
      </section>

      <ProductSection title="Payments" tagline="Take card payments anywhere you trade." items={payments} />
      <ProductSection title="Business finance" tagline="Funding options that fit how your business actually works." items={finance} dark />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="overflow-hidden rounded-3xl bg-mint/15 p-10 sm:p-14">
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
        </div>
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
            <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-paper' : 'text-ink'}`}>
              {title}
            </h2>
            <p className={`mt-2 max-w-xl ${dark ? 'text-paper/60' : 'text-ink-muted'}`}>
              {tagline}
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className={`group rounded-2xl border p-7 transition ${
                dark
                  ? 'border-white/10 bg-white/[0.03] hover:border-mint/40 hover:bg-white/[0.06]'
                  : 'border-ink/5 bg-paper hover:border-ink/10 hover:shadow-lg'
              }`}
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${dark ? 'bg-mint/15 text-mint' : 'bg-mint/15 text-mint-deep'}`}>
                <p.Icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-5 font-display text-xl font-semibold ${dark ? 'text-paper' : 'text-ink'}`}>{p.title}</h3>
              <p className={`mt-2 text-sm ${dark ? 'text-paper/60' : 'text-ink-muted'}`}>{p.tagline}</p>
              <ul className="mt-5 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm ${dark ? 'text-paper/80' : 'text-ink-muted'}`}>
                    · {f}
                  </li>
                ))}
              </ul>
              <div className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${dark ? 'text-mint' : 'text-ink'}`}>
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
