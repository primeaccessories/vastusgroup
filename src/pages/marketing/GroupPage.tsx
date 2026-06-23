import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../components/Button'
import { GROUP } from '../../lib/group'

const WHY = [
  { title: 'One relationship', body: 'A single point of contact across payments, finance and technology — no being passed from pillar to post.' },
  { title: 'Joined-up solutions', body: 'Take payments, fund growth and build the tools to scale — all from one group that already knows your business.' },
  { title: 'A UK team', body: 'Real people and real support, based in the UK — from your first quote to your hundredth payout.' },
]

export default function GroupPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full bg-mint/25 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20">
          <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-mint-bright sm:text-xs">
            <span className="h-px w-8 bg-mint-bright" /> The Vastus Group
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.0] tracking-tight text-paper">
            One group.<br /><span className="text-mint-bright">Three companies.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-paper/70 sm:text-lg">
            Vastus brings payments, finance and technology together under one roof — so ambitious UK businesses have one partner for the tools that move them forward.
          </p>
        </div>
      </section>

      {/* THREE COMPANIES */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {GROUP.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/[0.06] shadow-[0_24px_60px_-36px_rgba(10,18,38,0.5)] transition duration-300 hover:-translate-y-1 hover:ring-mint/40 sm:p-8"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-paper-soft px-6 ring-1 ring-ink/5">
                  <img src={c.logo} alt={c.name} loading="lazy" className="max-h-14 w-auto object-contain" />
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-mint-deep">{c.tag}</p>
                <p className="mt-3 flex-1 text-pretty text-ink-muted">{c.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mint-deep">
                  Explore {c.name}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ONE GROUP */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Why one group?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint text-paper">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-pretty text-sm text-ink-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-paper ring-1 ring-white/10 sm:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Not sure where to start?</h2>
                <p className="mt-3 max-w-xl text-pretty text-paper/70">Tell us about your business and we'll point you to the right part of the group.</p>
              </div>
              <LinkButton to="/contact" variant="primary" size="lg">Talk to us<ArrowUpRight className="h-5 w-5" /></LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
