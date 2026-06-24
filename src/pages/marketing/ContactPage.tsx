import { useEffect, useState } from 'react'
import HeroBackdrop from '../../components/HeroBackdrop'
import {
  ArrowUpRight,
  Phone,
  MapPin,
  Check,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '../../components/Button'
import GlassCard from '../../components/GlassCard'
import GlassIcon from '../../components/GlassIcon'

function isInOfficeHours(now: Date) {
  // Mon–Fri, 9:00 – 17:30 UK local time.
  const uk = new Date(now.toLocaleString('en-GB', { timeZone: 'Europe/London' }))
  const day = uk.getDay()
  const minutes = uk.getHours() * 60 + uk.getMinutes()
  return day >= 1 && day <= 5 && minutes >= 9 * 60 && minutes < 17 * 60 + 30
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openNow, setOpenNow] = useState(false)
  const [form, setForm] = useState({
    business: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  useEffect(() => {
    const tick = () => setOpenNow(isInOfficeHours(new Date()))
    tick()
    const id = window.setInterval(tick, 60 * 1000)
    return () => window.clearInterval(id)
  }, [])

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <HeroBackdrop image="/hero-payment.webp" />

        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-14 sm:px-8 sm:pt-28 sm:pb-20">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <h1 className="font-display text-balance text-5xl font-semibold tracking-tight text-paper sm:text-6xl lg:text-7xl">
                Get a quote.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg text-paper/70 sm:text-xl">
                Fill the form below and someone from the team will call you back — usually the same day, never longer than one working day.
              </p>
            </div>

            <ol className="space-y-3 rounded-3xl border border-ink/[0.06] bg-white/60 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <li className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-deep">What happens next</li>
              <Step n={1} text="Send the form below — takes under a minute." />
              <Step n={2} text="A human responds within one working day." />
              <Step n={3} text="Switch in days, not weeks. No long contracts." />
            </ol>
          </div>
        </div>
      </section>

      {/* FORM + SIDE */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <GlassCard surface="light" className="p-7 sm:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[480px] flex-col items-center justify-center text-center">
                <GlassIcon Icon={Check} tone="mint" size="lg" />
                <h2 className="mt-7 font-display text-3xl font-semibold tracking-tight text-ink">
                  Thanks — we'll be in touch.
                </h2>
                <p className="mt-3 max-w-md text-pretty text-ink-muted">
                  One of the team will respond within one working day. If it's urgent, give us a ring on{' '}
                  <a href="tel:03334432645" className="font-semibold text-ink underline">
                    0333 443 2645
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-7">
                <FormSection title="About your business">
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
                </FormSection>

                <FormSection title="About you">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className="input"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={update('phone')}
                        className="input"
                        placeholder="07712 345678"
                      />
                    </Field>
                  </div>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="input"
                    />
                  </Field>
                </FormSection>

                <FormSection title="Anything else?" optional>
                  <Field label="Notes for the team">
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={update('notes')}
                      className="input min-h-[120px]"
                      placeholder="e.g. moving from another provider, need finance, multiple sites…"
                    />
                  </Field>
                </FormSection>

                <div className="border-t border-ink/[0.06] pt-6">
                  <Button type="submit" variant="primary" size="lg" className="w-full whitespace-nowrap">
                    <span>Send my enquiry</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                  <p className="mt-4 text-center text-xs text-ink-fade">
                    By submitting this form you agree to Vastus contacting you about your enquiry. We never sell your data.
                  </p>
                </div>
              </form>
            )}
          </GlassCard>

          <aside className="space-y-4">
            <GlassCard surface="light" className="p-6">
              <div className="flex items-start gap-4">
                <GlassIcon Icon={Clock} tone="mint" size="md" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-deep">
                    Response promise
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    Within one working day.
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    A real human, not a chatbot — usually quicker than that.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard surface="light" className="p-6">
              <div className="flex items-start justify-between gap-4">
                <GlassIcon Icon={Phone} tone="mint" size="sm" />
                <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      openNow ? 'bg-success' : 'bg-ink/30'
                    }`}
                  >
                    {openNow && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-success opacity-60" />
                    )}
                  </span>
                  <span className={openNow ? 'text-success' : 'text-ink-fade'}>
                    {openNow ? 'Open now' : 'Closed — leave a message'}
                  </span>
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-fade">Call us</p>
                <a href="tel:03334432645" className="mt-1 block font-display text-xl font-semibold tracking-tight text-ink hover:text-mint-deep">
                  0333 443 2645
                </a>
                <p className="mt-0.5 text-xs text-ink-fade">Mon – Fri · 9am – 5:30pm</p>
              </div>

              <div className="mt-5 border-t border-ink/[0.06] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-fade">Email</p>
                <a href="mailto:info@vastusgroup.com" className="mt-1 block font-semibold text-ink hover:text-mint-deep">
                  info@vastusgroup.com
                </a>
                <p className="mt-0.5 text-xs text-ink-fade">Replies within one working day</p>
              </div>
            </GlassCard>

            <ContactCard
              Icon={MapPin}
              title="Visit"
              lines={[
                <span key="a">Unit 11 Croft Court</span>,
                <span key="b">Plumpton Close, Blackpool</span>,
                <span key="c">Lancashire FY4 5PR</span>,
                <a
                  key="d"
                  href="https://maps.google.com/?q=Unit+11+Croft+Court+Plumpton+Close+Blackpool+FY4+5PR"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-mint-deep hover:text-ink"
                >
                  Get directions <ArrowUpRight className="h-3 w-3" />
                </a>,
              ]}
            />
          </aside>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 sm:mt-20">
          <Pillar
            Icon={ShieldCheck}
            title="Honest pricing"
            body="No hidden fees, no opaque PCI line items, no surprise statement charges. What you're quoted is what you pay."
          />
          <Pillar
            Icon={HeartHandshake}
            title="Real UK support"
            body="A named account manager who actually picks up the phone — not a ticket queue with a service-level dance."
          />
          <Pillar
            Icon={Zap}
            title="Switch in days"
            body="Most businesses are taking payments through Vastus inside a week. No long contracts, no migration tax."
          />
        </div>
      </section>
    </>
  )
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-paper">
        {n}
      </span>
      <span className="text-sm text-ink-muted">{text}</span>
    </li>
  )
}

function FormSection({
  title,
  optional,
  children,
}: {
  title: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-baseline gap-2">
        <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
        {optional && (
          <span className="text-xs font-medium uppercase tracking-wider text-ink-fade">
            Optional
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
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

function ContactCard({
  Icon,
  title,
  lines,
  status,
}: {
  Icon: LucideIcon
  title: string
  lines: React.ReactNode[]
  status?: React.ReactNode
}) {
  return (
    <GlassCard surface="light" className="p-6">
      <div className="flex items-start justify-between gap-4">
        <GlassIcon Icon={Icon} tone="mint" size="sm" />
        {status}
      </div>
      <h3 className="mt-5 font-display text-base font-semibold text-ink">{title}</h3>
      <div className="mt-2 space-y-0.5 text-sm text-ink-muted">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </GlassCard>
  )
}

function Pillar({ Icon, title, body }: { Icon: LucideIcon; title: string; body: string }) {
  return (
    <GlassCard surface="light" className="p-7">
      <GlassIcon Icon={Icon} tone="mint" size="md" />
      <h3 className="mt-6 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-pretty text-sm text-ink-muted">{body}</p>
    </GlassCard>
  )
}
