import GlassCard from '../../components/GlassCard'
import { TEAM } from '../../lib/team'

export default function TeamPage() {
  const founders = TEAM.filter((m) => m.founder)
  const leads = TEAM.filter((m) => m.lead)
  const rest = TEAM.filter((m) => !m.founder && !m.lead)

  return (
    <>
      <section className="relative overflow-hidden bg-paper-soft text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-[460px] w-[460px] rounded-full bg-mint/25 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/4 h-[360px] w-[360px] translate-x-1/3 rounded-full bg-mint-deep/10 blur-[130px]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pt-16 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intro */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">MEET VASTUS</p>
            <h1 className="mt-4 font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              A team that <span className="text-mint-deep">genuinely cares</span> about your business.
            </h1>
            <p className="mt-5 max-w-md text-pretty text-lg text-ink-muted">
              We're a Blackpool-based team with a simple belief: care about the people you work with. Here are the faces you'll actually deal with.
            </p>
            <div className="mt-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-mint-deep" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">The founder</p>
            </div>
          </div>

          {/* Founder portraits as the hero visual */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {founders.map((m) => (
              <GlassCard key={m.name} surface="light" className="overflow-hidden p-0">
                <Portrait name={m.name} image={m.image} ratio="4/5" />
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{m.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-mint-deep sm:text-sm">{m.role}</p>
                  {m.bio && <p className="mt-3 text-pretty text-sm text-ink-muted">{m.bio}</p>}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {leads.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Leadership</p>
          <h2 className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The Team Behind
            <img src="/vastus-logo-light.webp" alt="Vastus" className="h-7 w-auto sm:h-9" />
          </h2>

          <div className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3">
            {leads.map((m) => (
              <GlassCard key={m.name} surface="light" interactive className="overflow-hidden p-0">
                <Portrait name={m.name} image={m.image} ratio="1/1" />
                <div className="p-4 sm:p-5">
                  <p className="font-display text-base font-semibold tracking-tight text-ink leading-tight sm:text-lg">{m.name}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-mint-deep leading-snug">{m.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
      <section className="border-t border-ink/5 bg-paper-soft/40">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">The team</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The people you'll deal with
          </h2>
          <p className="mt-2 text-ink-muted">Account managers, specialists and support — your day-to-day Vastus contacts.</p>

          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {rest.map((m) => (
              <div key={m.name} className="group">
                <div className="overflow-hidden rounded-2xl ring-1 ring-ink/5 transition group-hover:ring-mint/40 group-hover:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.25)]">
                  <Portrait name={m.name} image={m.image} ratio="1/1" />
                </div>
                <p className="mt-2.5 text-sm font-semibold text-ink leading-tight">{m.name}</p>
                <p className="text-xs text-ink-fade leading-snug">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  )
}

function Portrait({ name, image, ratio }: { name: string; image?: string; ratio: '1/1' | '4/5' }) {
  const initials = name.split(' ').map((n) => n[0]).join('')
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-b from-mint/45 via-mint/25 to-mint/10"
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-3 h-1/3 rounded-b-full bg-gradient-to-b from-white/60 via-white/15 to-transparent opacity-80 blur-md"
          />
          <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-ink/70">
            {initials}
          </span>
        </>
      )}
    </div>
  )
}
