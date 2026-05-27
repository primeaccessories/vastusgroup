import { FileText, Download } from 'lucide-react'
import { MOCK_USER, MOCK_DOCUMENTS } from '../../lib/portal-mock'

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Profile &amp; documents</h1>
        <p className="mt-2 text-ink-muted">Your account details and signed agreements.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-ink/5 bg-paper p-6">
          <h2 className="font-display text-lg font-semibold text-ink">Business details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <Row label="Business" value={MOCK_USER.businessName} />
            <Row label="Merchant ID" value={MOCK_USER.merchantId} mono />
            <Row label="Joined" value={MOCK_USER.joinedAt} />
            <Row label="Account manager" value={MOCK_USER.accountManager} />
          </dl>
          <button className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink hover:bg-ink/5">
            Edit business details
          </button>
        </section>

        <section className="rounded-2xl border border-ink/5 bg-paper p-6">
          <h2 className="font-display text-lg font-semibold text-ink">Contact</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <Row label="Name" value={MOCK_USER.contactName} />
            <Row label="Email" value={MOCK_USER.email} />
            <Row label="Phone" value={MOCK_USER.phone} />
          </dl>
          <button className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink hover:bg-ink/5">
            Edit contact details
          </button>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-ink/5 bg-paper">
        <header className="border-b border-ink/5 p-6">
          <h2 className="font-display text-lg font-semibold text-ink">Documents &amp; statements</h2>
          <p className="text-sm text-ink-fade">All signed agreements and monthly statements.</p>
        </header>
        <div className="divide-y divide-ink/5">
          {MOCK_DOCUMENTS.map((d) => (
            <div key={d.id} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-paper-soft text-ink-muted">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-ink">{d.title}</p>
                  <p className="text-xs text-ink-fade">
                    {d.kind} · uploaded {d.uploadedAt} · {d.size}
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink hover:bg-ink/5">
                <Download className="h-3.5 w-3.5" /> Download
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
        <h2 className="font-display text-lg font-semibold text-red-900">Danger zone</h2>
        <p className="mt-1 text-sm text-red-800/80">
          Closing your account stops all future payments and ends your contract. We'll be in touch to confirm.
        </p>
        <button className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-100">
          Request account closure
        </button>
      </section>
    </div>
  )
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-ink/5 pb-3 last:border-0 last:pb-0">
      <dt className="text-ink-fade">{label}</dt>
      <dd className={`text-right text-ink ${mono ? 'font-mono text-xs' : ''}`}>{value}</dd>
    </div>
  )
}
