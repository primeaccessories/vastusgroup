import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import { PRODUCTS } from '../../lib/products'

export default function ProductsPage() {
  const payments = PRODUCTS.filter((p) => p.category === 'payments')
  const finance = PRODUCTS.filter((p) => p.category === 'finance')

  return (
    <>
      <ProductSection eyebrow="Vastus Pay" title="Payments" tagline="Take card payments anywhere you trade." items={payments} />
      <ProductSection eyebrow="Vastus Capital" title="Finance" tagline="Funding options that fit how your business actually works." items={finance} />

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
  eyebrow: string
  title: string
  tagline: string
  items: typeof PRODUCTS
  dark?: boolean
}

function ProductSection({ eyebrow, title, tagline, items, dark = false }: ProductSectionProps) {
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
              {eyebrow}
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
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="group contents">
              <GlassCard surface={dark ? 'dark' : 'light'} interactive className="flex flex-col overflow-hidden p-0">
                {/* IMAGE PANEL */}
                <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-b from-white to-[#f4f6f7]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint/10 blur-2xl"
                  />
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      dark ? 'bg-ink/80 text-mint' : 'bg-white/90 text-mint-deep ring-1 ring-mint/20'
                    }`}
                  >
                    {p.category === 'finance' ? 'Finance' : 'Payments'}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3
                    className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${
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
                    className={`mt-6 inline-flex items-center gap-1.5 pt-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      dark ? 'text-mint' : 'text-mint-deep'
                    }`}
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
