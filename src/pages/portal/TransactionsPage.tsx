import { useState, useMemo } from 'react'
import { Download, Search } from 'lucide-react'
import { MOCK_TRANSACTIONS } from '../../lib/portal-mock'
import { StatusPill } from './DashboardPage'

export default function TransactionsPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'settled' | 'pending' | 'refunded'>('all')

  const filtered = useMemo(() => {
    return MOCK_TRANSACTIONS.filter((t) => {
      const matchesQ = !query ||
        t.id.toLowerCase().includes(query.toLowerCase()) ||
        t.card.toLowerCase().includes(query.toLowerCase()) ||
        t.terminal.toLowerCase().includes(query.toLowerCase())
      const matchesF = filter === 'all' || t.status === filter
      return matchesQ && matchesF
    })
  }, [query, filter])

  const totalGross = filtered.reduce((s, t) => s + (t.status === 'refunded' ? -t.amount : t.amount), 0)
  const totalFees = filtered.reduce((s, t) => s + t.fee, 0)
  const totalNet = totalGross - totalFees

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Transactions</h1>
        <p className="mt-2 text-ink-muted">Card, contactless and online sales across all terminals.</p>
      </header>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Stat label="Gross volume" value={`£${totalGross.toFixed(2)}`} />
        <Stat label="Fees" value={`£${totalFees.toFixed(2)}`} />
        <Stat label="Net" value={`£${totalNet.toFixed(2)}`} highlight />
      </div>

      <div className="rounded-2xl border border-ink/5 bg-paper">
        <div className="flex flex-col gap-3 border-b border-ink/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-fade" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ID, card, terminal…"
              className="h-10 w-full rounded-xl border border-ink/10 bg-paper pl-9 pr-3 text-sm text-ink placeholder:text-ink-fade focus:border-mint focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {(['all', 'settled', 'pending', 'refunded'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  filter === f ? 'bg-ink text-paper' : 'bg-ink/5 text-ink-muted hover:bg-ink/10'
                }`}
              >
                {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
            <button className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-3 text-xs font-semibold text-ink hover:bg-ink/5">
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-paper-soft text-xs uppercase tracking-wider text-ink-fade">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Date</th>
                <th className="px-4 py-3 text-left font-medium">ID</th>
                <th className="px-4 py-3 text-left font-medium">Terminal</th>
                <th className="px-4 py-3 text-left font-medium">Card</th>
                <th className="px-4 py-3 text-right font-medium">Amount</th>
                <th className="px-4 py-3 text-right font-medium">Fee</th>
                <th className="px-4 py-3 text-right font-medium">Net</th>
                <th className="px-4 py-3 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-paper-soft">
                  <td className="px-4 py-3 text-ink-muted">{t.date}</td>
                  <td className="px-4 py-3 font-mono text-xs text-ink-fade">{t.id}</td>
                  <td className="px-4 py-3 text-ink">{t.terminal}</td>
                  <td className="px-4 py-3 text-ink">{t.card}</td>
                  <td className="px-4 py-3 text-right font-mono font-semibold text-ink">£{t.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono text-ink-fade">£{t.fee.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono text-ink">£{t.net.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right"><StatusPill status={t.status} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-sm text-ink-fade">
                    No transactions match those filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? 'border-mint/30 bg-mint/5' : 'border-ink/5 bg-paper'}`}>
      <p className="text-xs font-medium uppercase tracking-wider text-ink-fade">{label}</p>
      <p className="mt-1.5 font-display text-2xl font-semibold text-ink">{value}</p>
    </div>
  )
}
