import { ArrowUpRight, Smartphone, Plus } from 'lucide-react'
import { MOCK_TERMINALS } from '../../lib/portal-mock'

export default function TerminalsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Terminals</h1>
          <p className="mt-2 text-ink-muted">Live status of every device on your account.</p>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft">
          <Plus className="h-4 w-4" />
          Order a new terminal
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {MOCK_TERMINALS.map((t) => (
          <article key={t.id} className="rounded-2xl border border-ink/5 bg-paper p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-paper-soft text-ink-muted">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">{t.id}</h2>
                  <p className="text-sm text-ink-fade">{t.model}</p>
                </div>
              </div>
              <StatusBadge status={t.status} />
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/5 pt-5 text-sm">
              <div>
                <dt className="text-xs text-ink-fade">Location</dt>
                <dd className="text-ink">{t.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-fade">Serial</dt>
                <dd className="font-mono text-xs text-ink">{t.serial}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-fade">Last seen</dt>
                <dd className="text-ink">{t.lastSeen}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-fade">This month</dt>
                <dd className="font-mono text-ink">£{t.monthlyVolume.toLocaleString()}</dd>
              </div>
            </dl>

            <div className="mt-5 flex gap-2 border-t border-ink/5 pt-4 text-sm">
              <button className="inline-flex items-center gap-1 text-ink hover:text-mint-deep">
                Manage <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              <span className="text-ink-fade">·</span>
              <button className="text-ink-muted hover:text-ink">Report fault</button>
              <span className="text-ink-fade">·</span>
              <button className="text-ink-muted hover:text-ink">Replace</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: 'online' | 'offline' | 'maintenance' }) {
  const map = {
    online: { label: 'Online', cls: 'bg-mint/15 text-mint-deep', dot: 'bg-mint' },
    offline: { label: 'Offline', cls: 'bg-ink/10 text-ink-muted', dot: 'bg-ink-fade' },
    maintenance: { label: 'Maintenance', cls: 'bg-amber-500/15 text-amber-700', dot: 'bg-amber-500' },
  }
  const m = map[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${m.cls}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
      {m.label}
    </span>
  )
}
