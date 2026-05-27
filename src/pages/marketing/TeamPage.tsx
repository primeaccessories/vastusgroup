import { TEAM } from '../../lib/team'

export default function TeamPage() {
  const founders = TEAM.filter((m) => m.founder)
  const rest = TEAM.filter((m) => !m.founder)

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Our team</p>
        <h1 className="mt-3 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          A team that <span className="text-mint-deep">genuinely cares</span> about your business.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          We're a Blackpool-based team with a simple belief: if you want to be successful, you've got to genuinely care about the people you work with. Here are the people you'll deal with.
        </p>
      </section>

      <section className="bg-ink-soft text-paper">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-wider text-mint">Founders</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built A2B from the ground up.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {founders.map((m) => (
              <article key={m.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-mint text-ink">
                    <span className="font-display text-2xl font-bold">
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-paper">{m.name}</h3>
                    <p className="text-sm text-mint">{m.role}</p>
                  </div>
                </div>
                {m.bio && <p className="mt-6 text-pretty text-paper/70">{m.bio}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The wider A2B team
        </h2>
        <p className="mt-3 text-ink-muted">{rest.length}+ specialists across client partnerships, support and marketing.</p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-ink/5 bg-paper p-5 transition hover:border-ink/15">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-paper-soft text-ink">
                <span className="font-display text-base font-bold">
                  {m.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-ink">{m.name}</p>
                <p className="truncate text-sm text-ink-fade">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
