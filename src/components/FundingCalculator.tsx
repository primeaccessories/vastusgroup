import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Banknote, Check, LineChart, Lock, Repeat } from 'lucide-react'
import { Button, LinkButton } from './Button'

type Mode = 'cash-advance' | 'term-loan' | 'revenue-based'

/* Funding-amount multiples are grounded in Vastus Capital's real lender criteria:
   - Card-takings advance  ≈ 1.2–1.5× monthly CARD turnover
   - Business / term loan   ≈ up to 40% of ANNUAL turnover
   - Revenue-based finance  ≈ 1.2–1.5× monthly REVENUE
   Funding AMOUNT only — no repayment-cost / rate / fee figures, no lenders or
   commissions. Every output is indicative and disclaimed as not-a-quote. */
const CARD_MULT = { low: 1.2, high: 1.5 }
const TURNOVER_ANNUAL_PCT = 0.4
const REVENUE_MULT = { low: 1.2, high: 1.5 }

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

export default function FundingCalculator() {
  // —— Lead-capture gate ——
  const [unlocked, setUnlocked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dialCode, setDialCode] = useState('+44')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const submitLead = (e: FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!firstName.trim()) errs.firstName = 'Please enter your first name'
    if (!lastName.trim()) errs.lastName = 'Please enter your last name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Please enter a valid email'
    if (phone.replace(/\D/g, '').length < 7) errs.phone = 'Please enter a valid phone number'
    setErrors(errs)
    if (Object.keys(errs).length) return

    // Captured lead. NOTE: no backend wired yet — destination TBD (see report).
    const lead = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: `${dialCode} ${phone.trim()}`,
    }
    // eslint-disable-next-line no-console
    console.log('Vastus Capital lead:', lead)
    setUnlocked(true)
  }

  // —— Calculator ——
  const [mode, setMode] = useState<Mode>('cash-advance')
  const [cardTurnover, setCardTurnover] = useState(15000)
  const [monthlyTurnover, setMonthlyTurnover] = useState(30000)
  const [monthlyRevenue, setMonthlyRevenue] = useState(30000)

  const result = useMemo(() => {
    if (mode === 'cash-advance') {
      return {
        high: cardTurnover * CARD_MULT.high,
        basis: `Typical offers ${gbp(cardTurnover * CARD_MULT.low)} – ${gbp(cardTurnover * CARD_MULT.high)}`,
        points: ['Repaid as a small share of your daily card takings', 'No fixed monthly payments, no APR'],
        slider: {
          label: 'Average monthly card turnover',
          value: cardTurnover,
          set: setCardTurnover,
          min: 2000,
          max: 150000,
        },
      }
    }
    if (mode === 'term-loan') {
      return {
        high: monthlyTurnover * 12 * TURNOVER_ANNUAL_PCT,
        basis: 'Based on up to 40% of your annual turnover',
        points: ['Fixed, predictable monthly repayments', 'Choose a term that suits your cashflow'],
        slider: {
          label: 'Average monthly turnover',
          value: monthlyTurnover,
          set: setMonthlyTurnover,
          min: 3000,
          max: 200000,
        },
      }
    }
    return {
      high: monthlyRevenue * REVENUE_MULT.high,
      basis: `Typical offers ${gbp(monthlyRevenue * REVENUE_MULT.low)} – ${gbp(monthlyRevenue * REVENUE_MULT.high)}`,
      points: ['Repayments flex with your monthly revenue', '100% of your equity retained'],
      slider: {
        label: 'Average monthly revenue',
        value: monthlyRevenue,
        set: setMonthlyRevenue,
        min: 5000,
        max: 200000,
      },
    }
  }, [mode, cardTurnover, monthlyTurnover, monthlyRevenue])

  return (
    <section className="bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Funding calculator</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See what your business could access
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-muted">
            {unlocked
              ? 'Pick a funding type and drag the slider for an instant, indicative estimate.'
              : 'Pop in your details and unlock an instant, indicative view of the funding your business could access.'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="gate"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-white p-6 shadow-[0_40px_90px_-50px_rgba(10,18,38,0.55)] ring-1 ring-ink/[0.06] sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Get your funding estimate
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">Tell us where to send it — takes 20 seconds, no obligation.</p>

              <form onSubmit={submitLead} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" error={errors.firstName}>
                    <input
                      className="input"
                      value={firstName}
                      autoComplete="given-name"
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane"
                    />
                  </Field>
                  <Field label="Last name" error={errors.lastName}>
                    <input
                      className="input"
                      value={lastName}
                      autoComplete="family-name"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Smith"
                    />
                  </Field>
                </div>
                <Field label="Business email" error={errors.email}>
                  <input
                    type="email"
                    className="input"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@yourbusiness.co.uk"
                  />
                </Field>
                <Field label="Phone number" error={errors.phone}>
                  <div className="flex gap-2">
                    <select
                      className="input w-auto flex-none pr-2"
                      value={dialCode}
                      onChange={(e) => setDialCode(e.target.value)}
                      aria-label="Phone country code"
                    >
                      {DIAL_CODES.map((d) => (
                        <option key={d.code} value={d.code}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className="input flex-1"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="7123 456789"
                    />
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
          ) : (
            <motion.div
              key="calc"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mx-auto mt-6 flex max-w-5xl items-center gap-2 text-sm font-medium text-ink-muted">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-mint/15 text-mint-deep">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                Thanks {firstName} — here&rsquo;s what your business could access.
              </p>

              <div className="mx-auto mt-4 max-w-5xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_90px_-50px_rgba(10,18,38,0.55)] ring-1 ring-ink/[0.06]">
                {/* funding-type toggle */}
                <div className="border-b border-ink/[0.06] p-2 sm:p-3">
                  <div className="grid grid-cols-3 gap-1 rounded-2xl bg-paper-soft p-1">
                    {MODES.map((m) => {
                      const active = m.id === mode
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMode(m.id)}
                          aria-pressed={active}
                          className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-semibold transition sm:flex-row sm:gap-2 sm:px-3 sm:text-sm ${
                            active ? 'text-paper' : 'text-ink-muted hover:text-ink'
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="calc-pill"
                              className="absolute inset-0 rounded-xl bg-mint shadow-[0_8px_20px_-10px_rgba(11,83,245,0.8)]"
                              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                            />
                          )}
                          <m.Icon className="relative z-10 h-4 w-4" />
                          <span className="relative z-10">{m.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_0.85fr]">
                  {/* control */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={mode}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Slider
                          label={result.slider.label}
                          value={result.slider.value}
                          min={result.slider.min}
                          max={result.slider.max}
                          step={1000}
                          onChange={result.slider.set}
                          format={gbp}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* result */}
                  <div className="relative overflow-hidden bg-ink p-6 text-paper sm:p-8 lg:p-10">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/25 blur-[90px]"
                    />
                    <div className="relative">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-bright">
                        You could access up to
                      </p>
                      <p className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        <AnimatedGBP value={result.high} />
                      </p>
                      <p className="mt-2 text-[13px] text-paper/55">{result.basis}</p>
                      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                        {result.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-mint/20 text-mint-bright">
                              <Check className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            <span className="text-[13px] leading-snug text-paper/80">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
                        <LinkButton to="/contact" variant="primary" size="lg" className="w-full">
                          Get my funding offer <ArrowUpRight className="h-5 w-5" />
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-5 max-w-3xl text-center text-[12px] leading-relaxed text-ink-fade">
                Funding amounts shown are indicative estimates only and do not constitute an offer, quote or financial
                advice. The actual amount available depends on your application and is subject to status, affordability
                and approval.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
