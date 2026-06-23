import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Banknote, Check, LineChart, Lock, Phone, Repeat } from 'lucide-react'
import { Button } from './Button'

type Mode = 'cash-advance' | 'term-loan' | 'revenue-based'
type Step = 'lead' | 'calc' | 'qualify' | 'results'
type Entity = 'ltd' | 'sole'

/* Funding-amount multiples grounded in Vastus Capital's real lender criteria:
   card-takings advance 1.2-1.5x monthly CARD turnover, term loan up to 40% of
   ANNUAL turnover, revenue-based 1.2-1.5x monthly REVENUE. Amount only - no
   rate/fee figures. */
const CARD_MULT = { low: 1.2, high: 1.5 }
const TURNOVER_ANNUAL_PCT = 0.4
const REVENUE_MULT = { low: 1.2, high: 1.5 }

const JACK_TEL = '03334432645'
const JACK_TEL_DISPLAY = '0333 443 2645'

/* Anonymised eligibility criteria for the lender panel — NO names, NO commission
   rates (those stay strictly internal). Used only to COUNT how many partners a
   business could be matched with. Mirrors the real decision tree's gates. */
const PANEL: { entity: Entity; minCto: number | null; minTurnover: number | null; minTrading: number; roi: boolean }[] = [
  { entity: 'ltd', minCto: null, minTurnover: 3000, minTrading: 24, roi: false },
  { entity: 'ltd', minCto: 10000, minTurnover: null, minTrading: 6, roi: true },
  { entity: 'sole', minCto: 10000, minTurnover: null, minTrading: 6, roi: true },
  { entity: 'ltd', minCto: 5000, minTurnover: null, minTrading: 3, roi: false },
  { entity: 'sole', minCto: 5000, minTurnover: null, minTrading: 3, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 9000, minTrading: 24, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 20000, minTrading: 6, roi: false },
  { entity: 'sole', minCto: null, minTurnover: 20000, minTrading: 6, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 15000, minTrading: 12, roi: false },
  { entity: 'sole', minCto: null, minTurnover: 25000, minTrading: 12, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 5000, minTrading: 3, roi: false },
  { entity: 'sole', minCto: null, minTurnover: 5000, minTrading: 3, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 10000, minTrading: 12, roi: false },
  { entity: 'ltd', minCto: null, minTurnover: 5000, minTrading: 6, roi: false },
  { entity: 'sole', minCto: null, minTurnover: 25000, minTrading: 6, roi: false },
]
const PANEL_SIZE = PANEL.length

function countMatches(entity: Entity, monthly: number, months: number, roiRegion: boolean) {
  return PANEL.filter((l) => {
    if (l.entity !== entity) return false
    if (l.minTurnover != null && monthly < l.minTurnover) return false
    if (l.minCto != null && monthly < l.minCto) return false
    if (months < l.minTrading) return false
    if (roiRegion && !l.roi) return false
    return true
  }).length
}

const TRADING = [
  { v: 'u6', label: 'Under 6 months', months: 4 },
  { v: '6-12', label: '6–12 months', months: 9 },
  { v: '1-2', label: '1–2 years', months: 18 },
  { v: '2+', label: '2+ years', months: 30 },
]
const REGIONS = [
  { v: 'england', label: 'England' },
  { v: 'wales', label: 'Wales' },
  { v: 'scotland', label: 'Scotland' },
  { v: 'ni', label: 'Northern Ireland' },
  { v: 'roi', label: 'Republic of Ireland' },
]

const gbp = (n: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(
    Math.max(0, Math.round(n / 100) * 100),
  )

function AnimatedGBP({ value }: { value: number }) {
  const mv = useMotionValue(value)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.55, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setShown(v) })
    return () => controls.stop()
  }, [value, mv])
  return <>{gbp(shown)}</>
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-muted">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  )
}

const DIAL_CODES = [
  { code: '+44', label: 'UK +44' },
  { code: '+353', label: 'IE +353' },
  { code: '+1', label: 'US/CA +1' },
  { code: '+61', label: 'AU +61' },
  { code: '+33', label: 'FR +33' },
  { code: '+49', label: 'DE +49' },
  { code: '+34', label: 'ES +34' },
  { code: '+31', label: 'NL +31' },
  { code: '+971', label: 'AE +971' },
  { code: '+91', label: 'IN +91' },
]

const MODES: { id: Mode; label: string; Icon: typeof Banknote }[] = [
  { id: 'cash-advance', label: 'Cash advance', Icon: Banknote },
  { id: 'term-loan', label: 'Term loan', Icon: LineChart },
  { id: 'revenue-based', label: 'Revenue-based', Icon: Repeat },
]

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-sm font-medium text-ink-muted">{label}</label>
        <span className="font-display text-lg font-semibold tracking-tight text-ink">{format(value)}</span>
      </div>
      <input
        type="range"
        className="range mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: `linear-gradient(to right, var(--color-mint) ${pct}%, var(--color-paper-soft) ${pct}%)` }}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-ink-fade">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

const CARD =
  'mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-white p-6 shadow-[0_40px_90px_-50px_rgba(10,18,38,0.55)] ring-1 ring-ink/[0.06] sm:p-8'

export default function FundingCalculator() {
  const [step, setStep] = useState<Step>('lead')

  // — lead —
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dialCode, setDialCode] = useState('+44')
  const [phone, setPhone] = useState('')
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({})

  // — calculator —
  const [mode, setMode] = useState<Mode>('cash-advance')
  const [cardTurnover, setCardTurnover] = useState(15000)
  const [monthlyTurnover, setMonthlyTurnover] = useState(30000)
  const [monthlyRevenue, setMonthlyRevenue] = useState(30000)

  // — qualify —
  const [entity, setEntity] = useState<Entity | ''>('')
  const [trading, setTrading] = useState('')
  const [region, setRegion] = useState('')
  const [qErrors, setQErrors] = useState<Record<string, string>>({})

  const submitLead = (e: FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!firstName.trim()) errs.firstName = 'Please enter your first name'
    if (!lastName.trim()) errs.lastName = 'Please enter your last name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Please enter a valid email'
    if (phone.replace(/\D/g, '').length < 7) errs.phone = 'Please enter a valid phone number'
    setLeadErrors(errs)
    if (Object.keys(errs).length) return
    // eslint-disable-next-line no-console
    console.log('Vastus Capital lead:', { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), phone: `${dialCode} ${phone.trim()}` })
    setStep('calc')
  }

  const result = useMemo(() => {
    if (mode === 'cash-advance') {
      return {
        high: cardTurnover * CARD_MULT.high,
        basis: `Typical offers ${gbp(cardTurnover * CARD_MULT.low)} – ${gbp(cardTurnover * CARD_MULT.high)}`,
        points: ['Repaid as a small share of your daily card takings', 'No fixed monthly payments, no APR'],
        slider: { label: 'Average monthly card turnover', value: cardTurnover, set: setCardTurnover, min: 2000, max: 150000 },
      }
    }
    if (mode === 'term-loan') {
      return {
        high: monthlyTurnover * 12 * TURNOVER_ANNUAL_PCT,
        basis: 'Based on up to 40% of your annual turnover',
        points: ['Fixed, predictable monthly repayments', 'Choose a term that suits your cashflow'],
        slider: { label: 'Average monthly turnover', value: monthlyTurnover, set: setMonthlyTurnover, min: 3000, max: 200000 },
      }
    }
    return {
      high: monthlyRevenue * REVENUE_MULT.high,
      basis: `Typical offers ${gbp(monthlyRevenue * REVENUE_MULT.low)} – ${gbp(monthlyRevenue * REVENUE_MULT.high)}`,
      points: ['Repayments flex with your monthly revenue', '100% of your equity retained'],
      slider: { label: 'Average monthly revenue', value: monthlyRevenue, set: setMonthlyRevenue, min: 5000, max: 200000 },
    }
  }, [mode, cardTurnover, monthlyTurnover, monthlyRevenue])

  const submitQualify = (e: FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!entity) errs.entity = 'Please choose one'
    if (!trading) errs.trading = 'Please choose how long you’ve been trading'
    if (!region) errs.region = 'Please choose your region'
    setQErrors(errs)
    if (Object.keys(errs).length) return
    setStep('results')
  }

  const matches = useMemo(() => {
    if (!entity || !trading || !region) return 0
    const months = TRADING.find((t) => t.v === trading)?.months ?? 0
    return countMatches(entity, result.slider.value, months, region === 'roi')
  }, [entity, trading, region, result.slider.value])

  const subtitle =
    step === 'lead'
      ? 'Pop in your details and unlock an instant, indicative view of the funding your business could access.'
      : step === 'calc'
        ? 'Pick a funding type and drag the slider for an instant, indicative estimate.'
        : step === 'qualify'
          ? 'Three quick questions so we can match you to the right funding partners.'
          : 'Here’s how your business shapes up — speak to Jack to take it further.'

  return (
    <section className="bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Funding calculator</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See what your business could access
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-muted">{subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1 — LEAD */}
          {step === 'lead' && (
            <motion.div key="lead" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className={CARD}>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">Get your funding estimate</h3>
              <p className="mt-1.5 text-sm text-ink-muted">Tell us where to send it — takes 20 seconds, no obligation.</p>
              <form onSubmit={submitLead} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" error={leadErrors.firstName}>
                    <input className="input" value={firstName} autoComplete="given-name" onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" />
                  </Field>
                  <Field label="Last name" error={leadErrors.lastName}>
                    <input className="input" value={lastName} autoComplete="family-name" onChange={(e) => setLastName(e.target.value)} placeholder="Smith" />
                  </Field>
                </div>
                <Field label="Business email" error={leadErrors.email}>
                  <input type="email" className="input" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} placeholder="jane@yourbusiness.co.uk" />
                </Field>
                <Field label="Phone number" error={leadErrors.phone}>
                  <div className="flex gap-2">
                    <select className="input w-auto flex-none pr-2" value={dialCode} onChange={(e) => setDialCode(e.target.value)} aria-label="Phone country code">
                      {DIAL_CODES.map((d) => (
                        <option key={d.code} value={d.code}>{d.label}</option>
                      ))}
                    </select>
                    <input type="tel" inputMode="tel" autoComplete="tel" className="input flex-1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="7123 456789" />
                  </div>
                </Field>
                <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                  See my funding estimate <ArrowUpRight className="h-5 w-5" />
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-ink-fade">
                  <Lock className="h-3 w-3" /> Your details are only used to discuss funding. No credit check.
                </p>
              </form>
            </motion.div>
          )}

          {/* STEP 2 — CALCULATOR */}
          {step === 'calc' && (
            <motion.div key="calc" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              <p className="mx-auto mt-6 flex max-w-5xl items-center gap-2 text-sm font-medium text-ink-muted">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-mint/15 text-mint-deep"><Check className="h-3 w-3" strokeWidth={2.5} /></span>
                Thanks {firstName} — here&rsquo;s what your business could access.
              </p>
              <div className="mx-auto mt-4 max-w-5xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_90px_-50px_rgba(10,18,38,0.55)] ring-1 ring-ink/[0.06]">
                <div className="border-b border-ink/[0.06] p-2 sm:p-3">
                  <div className="grid grid-cols-3 gap-1 rounded-2xl bg-paper-soft p-1">
                    {MODES.map((m) => {
                      const active = m.id === mode
                      return (
                        <button key={m.id} type="button" onClick={() => setMode(m.id)} aria-pressed={active} className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-semibold transition sm:flex-row sm:gap-2 sm:px-3 sm:text-sm ${active ? 'text-paper' : 'text-ink-muted hover:text-ink'}`}>
                          {active && <motion.span layoutId="calc-pill" className="absolute inset-0 rounded-xl bg-mint shadow-[0_8px_20px_-10px_rgba(11,83,245,0.8)]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                          <m.Icon className="relative z-10 h-4 w-4" />
                          <span className="relative z-10">{m.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className="grid lg:grid-cols-[1fr_0.85fr]">
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div key={mode} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
                        <Slider label={result.slider.label} value={result.slider.value} min={result.slider.min} max={result.slider.max} step={1000} onChange={result.slider.set} format={gbp} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="relative overflow-hidden bg-ink p-6 text-paper sm:p-8 lg:p-10">
                    <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/25 blur-[90px]" />
                    <div className="relative">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-bright">You could access up to</p>
                      <p className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl"><AnimatedGBP value={result.high} /></p>
                      <p className="mt-2 text-[13px] text-paper/55">{result.basis}</p>
                      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                        {result.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-mint/20 text-mint-bright"><Check className="h-3 w-3" strokeWidth={2.5} /></span>
                            <span className="text-[13px] leading-snug text-paper/80">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
                        <Button type="button" variant="primary" size="lg" className="w-full" onClick={() => setStep('qualify')}>
                          Get my funding offer <ArrowUpRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-3xl text-center text-[12px] leading-relaxed text-ink-fade">
                Funding amounts shown are indicative estimates only and do not constitute an offer, quote or financial advice. The actual amount available depends on your application and is subject to status, affordability and approval.
              </p>
            </motion.div>
          )}

          {/* STEP 3 — QUALIFY */}
          {step === 'qualify' && (
            <motion.div key="qualify" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className={CARD}>
              <button type="button" onClick={() => setStep('calc')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted transition hover:text-ink">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to estimate
              </button>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">A few quick questions</h3>
              <p className="mt-1.5 text-sm text-ink-muted">So we can match you to the right funding partners.</p>
              <form onSubmit={submitQualify} className="mt-6 space-y-5" noValidate>
                <Field label="What type of business are you?" error={qErrors.entity}>
                  <div className="grid grid-cols-2 gap-2">
                    {([['ltd', 'Limited company'], ['sole', 'Sole trader']] as const).map(([v, lbl]) => (
                      <button key={v} type="button" onClick={() => setEntity(v)} aria-pressed={entity === v} className={`rounded-xl px-4 py-3 text-sm font-semibold ring-1 transition ${entity === v ? 'bg-mint text-paper ring-mint' : 'bg-white text-ink-muted ring-ink/10 hover:ring-ink/25'}`}>
                        {lbl}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="How long have you been trading?" error={qErrors.trading}>
                  <select className="input" value={trading} onChange={(e) => setTrading(e.target.value)}>
                    <option value="" disabled>Select…</option>
                    {TRADING.map((t) => (<option key={t.v} value={t.v}>{t.label}</option>))}
                  </select>
                </Field>
                <Field label="Where is your business based?" error={qErrors.region}>
                  <select className="input" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="" disabled>Select…</option>
                    {REGIONS.map((r) => (<option key={r.v} value={r.v}>{r.label}</option>))}
                  </select>
                </Field>
                <Button type="submit" variant="primary" size="lg" className="mt-1 w-full">
                  See my matches <ArrowUpRight className="h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          )}

          {/* STEP 4 — RESULTS */}
          {step === 'results' && (
            <motion.div key="results" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="mx-auto mt-10 max-w-xl overflow-hidden rounded-[1.75rem] bg-ink text-paper shadow-[0_40px_90px_-50px_rgba(10,18,38,0.7)] ring-1 ring-white/10">
              <div className="relative p-7 sm:p-9">
                <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/25 blur-[100px]" />
                <div className="relative text-center">
                  {matches > 0 ? (
                    <>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint-bright">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} /> Good news
                      </span>
                      <p className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Matched with {matches} of {PANEL_SIZE} funding partners
                      </p>
                      <p className="mx-auto mt-3 max-w-sm text-pretty text-sm text-paper/70">
                        Based on what you&rsquo;ve told us, {firstName ? `${firstName}, ` : ''}your business could access up to{' '}
                        <span className="font-semibold text-paper">{gbp(result.high)}</span>. Speak to Jack and he&rsquo;ll line up the best offer for you.
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/70">
                        Let&rsquo;s talk
                      </span>
                      <p className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">A quick chat is the fastest route</p>
                      <p className="mx-auto mt-3 max-w-sm text-pretty text-sm text-paper/70">
                        We couldn&rsquo;t auto-match a partner from the details given — but that often just needs a conversation. Jack can talk through your options.
                      </p>
                    </>
                  )}

                  <div className="mt-7">
                    <a href={`tel:${JACK_TEL}`} className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-mint px-8 text-base font-semibold text-paper shadow-[0_12px_28px_-12px_rgba(11,83,245,0.9)] transition hover:bg-mint-bright">
                      <Phone className="h-5 w-5" /> Call Jack — {JACK_TEL_DISPLAY}
                    </a>
                    <p className="mt-3 text-[12px] text-paper/50">Mon–Fri, no pressure and no obligation.</p>
                  </div>

                  <button type="button" onClick={() => setStep('qualify')} className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-paper/60 transition hover:text-paper">
                    <ArrowLeft className="h-3.5 w-3.5" /> Change my answers
                  </button>
                </div>
              </div>
              <p className="border-t border-white/10 px-7 py-4 text-center text-[11px] leading-relaxed text-paper/45 sm:px-9">
                Matches and amounts are indicative only and not an offer, quote or financial advice. Final funding is subject to application, status, affordability and approval.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
