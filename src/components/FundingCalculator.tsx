import { useEffect, useMemo, useState } from 'react'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Banknote, LineChart, Repeat } from 'lucide-react'
import { LinkButton } from './Button'

type Mode = 'cash-advance' | 'term-loan' | 'revenue-based'

/* ──────────────────────────────────────────────────────────────────────────
   ⚠️ PLACEHOLDER FIGURES — ILLUSTRATIVE ONLY.
   The multiples / rates below are placeholders so the calculator can render;
   they are NOT real Vastus Capital terms. Confirm the real numbers with the
   business and replace these constants BEFORE this page goes live. Every output
   is disclaimed in the UI as indicative / not a quote.
   ──────────────────────────────────────────────────────────────────────── */
const RATES = {
  cashAdvance: { multiple: 1, factor: 1.15, dailyShare: 0.15 },
  termLoan: { annualRate: 0.12 },
  revenueBased: { factor: 1.2, revenueShare: 0.1 },
}

const gbp = (n: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(
    Math.max(0, Math.round(n)),
  )

function AnimatedGBP({ value }: { value: number }) {
  const mv = useMotionValue(value)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(v),
    })
    return () => controls.stop()
  }, [value, mv])
  return <>{gbp(shown)}</>
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
  const [mode, setMode] = useState<Mode>('cash-advance')
  const [turnover, setTurnover] = useState(15000)
  const [loanAmount, setLoanAmount] = useState(50000)
  const [termMonths, setTermMonths] = useState(12)
  const [rbAmount, setRbAmount] = useState(50000)
  const [revenue, setRevenue] = useState(30000)

  const result = useMemo(() => {
    if (mode === 'cash-advance') {
      const advance = turnover * RATES.cashAdvance.multiple
      const total = advance * RATES.cashAdvance.factor
      return {
        headline: { label: 'Indicative advance', value: advance },
        stats: [
          { label: 'Est. total repayable', value: gbp(total) },
          { label: 'Daily card share', value: `${Math.round(RATES.cashAdvance.dailyShare * 100)}%` },
          { label: 'Fixed term', value: 'None' },
        ],
        note: 'Repaid automatically as a small share of your daily card takings — no fixed term, no APR.',
      }
    }
    if (mode === 'term-loan') {
      const total = loanAmount * (1 + RATES.termLoan.annualRate * (termMonths / 12))
      const monthly = total / termMonths
      return {
        headline: { label: 'Indicative monthly repayment', value: monthly },
        stats: [
          { label: 'You receive', value: gbp(loanAmount) },
          { label: 'Total repayable', value: gbp(total) },
          { label: 'Over', value: `${termMonths} months` },
        ],
        note: `Illustrative ${Math.round(
          RATES.termLoan.annualRate * 100,
        )}% representative annual rate. Fixed, predictable monthly repayments.`,
      }
    }
    const total = rbAmount * RATES.revenueBased.factor
    const monthlyContribution = revenue * RATES.revenueBased.revenueShare
    const months = Math.min(60, Math.max(1, Math.ceil(total / Math.max(1, monthlyContribution))))
    return {
      headline: { label: 'Funding amount', value: rbAmount },
      stats: [
        { label: 'Total repayable', value: gbp(total) },
        { label: 'Est. repayment', value: `~${months} months` },
        { label: 'Monthly share', value: `${Math.round(RATES.revenueBased.revenueShare * 100)}% of revenue` },
      ],
      note: 'Repay as a flat share of monthly revenue — more when you’re busy, less when you’re quiet.',
    }
  }, [mode, turnover, loanAmount, termMonths, rbAmount, revenue])

  return (
    <section className="bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Funding calculator</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See what your business could access
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-muted">
            Pick a funding type and drag the sliders for an instant, indicative illustration — no credit check, no
            commitment.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_90px_-50px_rgba(10,18,38,0.55)] ring-1 ring-ink/[0.06]">
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
            {/* controls */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  {mode === 'cash-advance' && (
                    <Slider
                      label="Average monthly card turnover"
                      value={turnover}
                      min={2000}
                      max={150000}
                      step={1000}
                      onChange={setTurnover}
                      format={gbp}
                    />
                  )}
                  {mode === 'term-loan' && (
                    <>
                      <Slider
                        label="How much do you need?"
                        value={loanAmount}
                        min={5000}
                        max={250000}
                        step={1000}
                        onChange={setLoanAmount}
                        format={gbp}
                      />
                      <Slider
                        label="Over what term?"
                        value={termMonths}
                        min={3}
                        max={36}
                        step={1}
                        onChange={setTermMonths}
                        format={(v) => `${v} months`}
                      />
                    </>
                  )}
                  {mode === 'revenue-based' && (
                    <>
                      <Slider
                        label="How much do you need?"
                        value={rbAmount}
                        min={5000}
                        max={250000}
                        step={1000}
                        onChange={setRbAmount}
                        format={gbp}
                      />
                      <Slider
                        label="Average monthly revenue"
                        value={revenue}
                        min={5000}
                        max={250000}
                        step={1000}
                        onChange={setRevenue}
                        format={gbp}
                      />
                    </>
                  )}
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
                  {result.headline.label}
                </p>
                <p className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  <AnimatedGBP value={result.headline.value} />
                </p>
                <dl className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {result.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4">
                      <dt className="text-sm text-paper/60">{s.label}</dt>
                      <dd className="font-display text-sm font-semibold sm:text-[15px]">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-[13px] leading-relaxed text-paper/70">{result.note}</p>
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
          Figures shown are indicative illustrations only and do not constitute an offer, quote or financial advice.
          Actual funding amounts, rates and terms depend on your application and are subject to status, affordability
          and approval.
        </p>
      </div>
    </section>
  )
}
