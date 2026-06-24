import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Phone } from 'lucide-react'
import { serviceBySlug, SERVICES, hasDetail, type ServiceCategory, type ServiceSection } from '../../lib/services'
import { LinkButton } from '../../components/Button'
import GlassCard from '../../components/GlassCard'

const CATEGORY_META: Record<ServiceCategory, { label: string; hero: string; related: string }> = {
  pay: { label: 'Card payments', hero: '/hero-payment.webp', related: 'More ways to take payments' },
  capital: { label: 'Business finance', hero: '/hero-business.webp', related: 'More ways to get funded' },
  utilities: { label: 'Business utilities', hero: '/hero-business.webp', related: 'More Vastus Utilities' },
  technology: { label: 'Digital & technology', hero: '/hero-payment.webp', related: 'More Vastus Technology' },
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceBySlug(slug)
  if (!service || !hasDetail(service)) return <Navigate to="/services" replace />

  const meta = CATEGORY_META[service.category]
  const features = service.features ?? []
  const sections = service.sections ?? []
  const related = SERVICES.filter(
    (s) => s.slug !== service.slug && s.category === service.category && hasDetail(s),
  ).slice(0, 3)

  return (
    <>
      {/* HERO — dark, full-bleed photo with copy + feature stat cards */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center" style={{ backgroundImage: `url(${meta.hero})` }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 bg-ink/45" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/40" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-mint/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-paper/70 transition hover:text-mint-bright">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>

          <div className="mt-8 max-w-2xl">
            <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-bright sm:text-xs">
              <span className="h-px w-8 bg-mint-bright" />
              {meta.label}
            </p>
            <h1 className="mt-5 font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-paper/80 sm:text-xl">{service.tagline}</p>
            {service.description && (
              <p className="mt-3 max-w-xl text-pretty text-paper/60">{service.description}</p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/contact" variant="primary" size="lg">
                Enquire about {service.shortTitle.toLowerCase()}
                <ArrowUpRight className="h-5 w-5" />
              </LinkButton>
              <a
                href="tel:03334432645"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-paper backdrop-blur transition hover:border-mint-bright hover:text-mint-bright"
              >
                <Phone className="h-5 w-5" /> 0333 443 2645
              </a>
            </div>
          </div>

          {/* feature stat cards */}
          {features.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:max-w-5xl lg:grid-cols-4">
              {features.map((f) => (
                <div key={f} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-mint/20 text-mint-bright">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="mt-3 text-sm font-medium text-paper">{f}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RICH SECTIONS — full service content */}
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} alt={i % 2 === 1} />
      ))}

      {/* CTA BAND */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-paper/65">
                Send us your last statement and we'll come back with a like-for-like quote within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/contact" variant="primary" size="lg">
                Get a quote
                <ArrowUpRight className="h-5 w-5" />
              </LinkButton>
              <a
                href="tel:03334432645"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-paper backdrop-blur transition hover:border-mint hover:text-mint"
              >
                <Phone className="h-5 w-5" /> 0333 443 2645
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-paper-soft">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {meta.related}
            </h2>
            <div className="mt-7 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group contents">
                  <GlassCard surface="light" interactive className="flex flex-col overflow-hidden p-0">
                    <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-b from-white to-[#f4f6f7]">
                      {s.image ? (
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-[1.06]"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <s.Icon className="h-16 w-16 text-mint" strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                      <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mint-deep">
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
      )}
    </>
  )
}

function SectionHeader({ eyebrow, heading }: { eyebrow?: string; heading: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{heading}</h2>
    </div>
  )
}

function SectionBlock({ section, alt }: { section: ServiceSection; alt: boolean }) {
  const bg = alt ? 'bg-paper-soft' : 'bg-paper'

  if (section.kind === 'prose') {
    return (
      <section className={bg}>
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
          <SectionHeader eyebrow={section.eyebrow} heading={section.heading} />
          <p className="mt-5 max-w-3xl text-pretty text-lg text-ink-muted">{section.body}</p>
        </div>
      </section>
    )
  }

  if (section.kind === 'cards') {
    return (
      <section className={bg}>
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
          <SectionHeader eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-7 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-paper p-6 ring-1 ring-ink/8 shadow-[0_18px_40px_-30px_rgba(15,23,30,0.4)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint/15 text-mint-deep">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-pretty text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section.kind === 'list') {
    return (
      <section className={bg}>
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
          <SectionHeader eyebrow={section.eyebrow} heading={section.heading} />
          <ul className="mt-7 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-center gap-4 border-t border-ink/10 py-3.5">
                <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint-deep">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  if (section.kind === 'stats') {
    return (
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
          {section.eyebrow && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint/80">{section.eyebrow}</p>
          )}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{section.heading}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {section.items.map((item) => (
              <div key={item.value} className="border-t border-white/15 pt-6">
                <p className="font-display text-5xl font-semibold tracking-tight text-mint">{item.value}</p>
                <p className="mt-3 text-pretty text-paper/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // faq
  return (
    <section className={bg}>
      <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 sm:py-14">
        <SectionHeader eyebrow={section.eyebrow} heading={section.heading} />
        <div className="mt-7 max-w-3xl divide-y divide-ink/10 border-t border-ink/10">
          {section.items.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{item.q}</h3>
              <p className="mt-2 text-pretty text-ink-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
