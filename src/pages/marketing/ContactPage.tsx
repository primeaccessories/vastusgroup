import { useState } from 'react'
import { ArrowUpRight, Phone, Mail, MapPin, Check } from 'lucide-react'
import { Button } from '../../components/Button'

const INDUSTRIES = ['Hospitality / restaurant', 'Retail (in-person)', 'E-commerce / online', 'Trade / services', 'Beauty / wellness', 'Other']
const VOLUMES = ['Under £5k / month', '£5k – £25k / month', '£25k – £100k / month', '£100k+ / month']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    business: '',
    name: '',
    email: '',
    phone: '',
    industry: '',
    volume: '',
    notes: '',
  })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Contact</p>
        <h1 className="mt-3 font-display text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Let's talk about your business.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-muted">
          Tell us a little about what you do and we'll come back within one working day with a tailored quote — no commitment, no obligation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-ink/5 bg-paper p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint text-ink">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
                  Thanks — we'll be in touch.
                </h2>
                <p className="mt-3 max-w-md text-pretty text-ink-muted">
                  One of the team will respond within one working day. If it's urgent, give us a ring on{' '}
                  <a href="tel:03334432645" className="font-semibold text-ink underline">0333 443 2645</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <Field label="Business name" required>
                  <input
                    type="text"
                    required
                    value={form.business}
                    onChange={update('business')}
                    className="input"
                    placeholder="e.g. Riverside Bistro Ltd"
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" required>
                    <input type="text" required value={form.name} onChange={update('name')} className="input" />
                  </Field>
                  <Field label="Phone" required>
                    <input type="tel" required value={form.phone} onChange={update('phone')} className="input" placeholder="07712 345678" />
                  </Field>
                </div>

                <Field label="Email" required>
                  <input type="email" required value={form.email} onChange={update('email')} className="input" />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Industry">
                    <select value={form.industry} onChange={update('industry')} className="input">
                      <option value="">Select…</option>
                      {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </Field>
                  <Field label="Monthly card volume">
                    <select value={form.volume} onChange={update('volume')} className="input">
                      <option value="">Select…</option>
                      {VOLUMES.map((v) => <option key={v}>{v}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Anything else?">
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={update('notes')}
                    className="input min-h-[120px]"
                    placeholder="e.g. moving from another provider, need finance, multiple sites…"
                  />
                </Field>

                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send my enquiry
                  <ArrowUpRight className="h-5 w-5" />
                </Button>

                <p className="text-xs text-ink-fade">
                  By submitting this form you agree to A2B Payments contacting you about your enquiry. We never sell your data.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <ContactCard
              Icon={Phone}
              title="Speak to us"
              lines={[
                <a key="t" href="tel:03334432645" className="hover:text-mint">0333 443 2645</a>,
                <span key="h" className="text-ink-fade">Mon – Fri · 9am – 5:30pm</span>,
              ]}
            />
            <ContactCard
              Icon={Mail}
              title="Email"
              lines={[
                <a key="e" href="mailto:info@a2bpayments.co.uk" className="hover:text-mint">info@a2bpayments.co.uk</a>,
              ]}
            />
            <ContactCard
              Icon={MapPin}
              title="Visit"
              lines={[
                <span key="a">Unit 11 Croft Court</span>,
                <span key="b">Plumpton Close, Blackpool</span>,
                <span key="c">Lancashire FY4 5PR</span>,
              ]}
            />
          </aside>
        </div>
      </section>

      <style>{`
        .input {
          display: block;
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(11,11,12,0.1);
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 15px;
          color: var(--color-ink);
          transition: border-color 120ms, box-shadow 120ms;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-mint);
          box-shadow: 0 0 0 3px rgba(89,209,195,0.2);
        }
      `}</style>
    </>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-mint-deep">*</span>}
      </span>
      {children}
    </label>
  )
}

function ContactCard({ Icon, title, lines }: { Icon: typeof Phone; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="rounded-2xl border border-ink/5 bg-paper p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint/15 text-mint-deep">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-ink">{title}</h3>
      <div className="mt-2 space-y-0.5 text-sm text-ink-muted">
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  )
}
