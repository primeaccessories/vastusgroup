import GlassCard from '../../components/GlassCard'
import { TEAM } from '../../lib/team'

export default function TeamPage() {
  const founders = TEAM.filter((m) => m.founder)
  const rest = TEAM.filter((m) => !m.founder)

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Our team</p>
        <h1 className="mt-4 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          A team that <span className="text-mint-deep">genuinely cares</span> about your business.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          We're a Blackpool-based team with a simple belief: if you want to be successful, you've got to genuinely care
          about the people you work with. Here are the people you'll deal with.
        </p>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-mint/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint/80">Founders</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built A2B from the ground up.
          </h2>

          <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
            {founders.map((m) => (
              <GlassCard key={m.name} surface="dark" className="p-8">
                <div className="flex items-start gap-5">
                  <Avatar name={m.name} image={m.image} size="lg" />
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-paper">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-mint">{m.role}</p>
                  </div>
                </div>
                {m.bio && <p className="mt-6 text-pretty text-paper/70">{m.bio}</p>}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Wider team</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The wider A2B team
        </h2>
        <p className="mt-3 text-ink-muted">{rest.length}+ specialists across client partnerships, support and marketing.</p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <GlassCard key={m.name} surface="light" interactive className="flex items-center gap-4 p-5">
              <Avatar name={m.name} image={m.image} size="sm" />
              <div className="min-w-0">
                <p className="font-semibold text-ink">{m.name}</p>
                <p className="truncate text-sm text-ink-fade">{m.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  )
}

function Avatar({ name, image, size }: { name: string; image?: string; size: 'sm' | 'lg' }) {
  const initials = name.split(' ').map((n) => n[0]).join('')
  const cls =
    size === 'lg'
      ? 'h-16 w-16 text-2xl rounded-2xl'
      : 'h-12 w-12 text-base rounded-xl'
  return (
    <span
      className={`relative isolate inline-flex flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-b from-mint/45 via-mint/25 to-mint/10 text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] ring-1 ring-mint/30 ${cls}`}
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
            className="pointer-events-none absolute inset-x-2 top-1 h-1/3 rounded-b-full bg-gradient-to-b from-white/60 via-white/15 to-transparent opacity-80 blur-md"
          />
          <span className="relative font-display font-bold">{initials}</span>
        </>
      )}
    </span>
  )
}
