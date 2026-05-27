import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Phone } from 'lucide-react'
import { productBySlug, PRODUCTS } from '../../lib/products'
import { LinkButton } from '../../components/Button'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = productBySlug(slug)
  if (!product) return <Navigate to="/products" replace />

  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #59d1c3, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-mint">
            <ArrowLeft className="h-4 w-4" />
            All products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                <product.Icon className="h-7 w-7" />
              </div>
              <h1 className="mt-6 font-display text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
                {product.title}
              </h1>
              <p className="mt-4 text-pretty text-xl text-paper/70">{product.tagline}</p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col lg:items-end">
              <LinkButton to="/contact" variant="primary" size="lg">
                Enquire about {product.shortTitle.toLowerCase()}
                <ArrowUpRight className="h-5 w-5" />
              </LinkButton>
              <a
                href="tel:03334432645"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-semibold text-paper transition hover:border-mint hover:text-mint"
              >
                <Phone className="h-5 w-5" />
                0333 443 2645
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Overview</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What you get
            </h2>
            <p className="mt-6 text-pretty text-lg text-ink-muted">{product.description}</p>

            <ul className="mt-10 space-y-4">
              {product.bullets.map((b) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-ink/5 bg-paper p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-fade">At a glance</p>
              <dl className="mt-4 space-y-3 text-sm">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 border-b border-ink/5 pb-3 last:border-0 last:pb-0">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                    <span className="text-ink">{f}</span>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl bg-ink p-7 text-paper">
              <p className="font-display text-xl font-semibold">Need to talk to someone?</p>
              <p className="mt-2 text-sm text-paper/70">Speak to a real person in Blackpool — no menu trees, no offshore call centre.</p>
              <a href="tel:03334432645" className="mt-5 inline-flex items-center gap-2 text-mint hover:text-mint-bright">
                <Phone className="h-4 w-4" /> 0333 443 2645
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-soft">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Related products
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group rounded-2xl border border-ink/5 bg-paper p-7 transition hover:border-ink/10 hover:shadow-lg"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-mint-deep">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
