import { motion } from 'framer-motion'
import { ArrowUpRight, BadgePoundSterling, Check, Phone } from 'lucide-react'
import { LinkButton } from './Button'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const PERKS = ['No eligibility criteria', 'Open to every merchant', 'Paid by BACS'] as const

const TIERS = [
  { yr: '1 year', amt: '£100' },
  { yr: '2 years', amt: '£200' },
  { yr: '3 years', amt: '£300' },
] as const

/**
 * Headline promo banner for the "Switch to Vastus, we'll cover your exit costs"
 * offer. Rendered near the top of the Vastus Pay (/pay) division page; links
 * through to the full /services/switch-and-save detail page.
 */
export default function SwitchSaveBanner() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-[1.75rem] bg-ink text-paper ring-1 ring-white/10 shadow-[0_44px_90px_-44px_rgba(11,83,245,0.55)]"
        >
          {/* ambient glow + grid */}
          <div aria-hidden className="pointer-events-none absolute -right-28 -top-32 h-[34rem] w-[34rem] rounded-full bg-mint/30 blur-[150px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-mint/15 blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_right,black_8%,transparent_70%)]" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            {/* copy */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-mint-bright/30 bg-mint/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-bright">
                <BadgePoundSterling className="h-3.5 w-3.5" /> Switch &amp; Save
              </p>
              <h2 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl">
                We&rsquo;ll cover your <span className="text-mint-bright">exit costs</span>
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-paper/75 sm:text-lg">
                Tied into a card payments contract? Switch to Vastus and we&rsquo;ll reimburse your
                termination fee &mdash; up to &pound;100 for every year you sign up with us.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/85">
                {PERKS.map((perk) => (
                  <li key={perk} className="inline-flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint/20 text-mint-bright">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/services/switch-and-save" variant="primary" size="lg">
                  See the offer
                  <ArrowUpRight className="h-5 w-5" />
                </LinkButton>
                <a
                  href="tel:03334432645"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-paper backdrop-blur transition hover:border-mint-bright hover:text-mint-bright"
                >
                  <Phone className="h-5 w-5" /> 0333 443 2645
                </a>
              </div>
            </div>

            {/* ascending tier visual */}
            <div className="relative">
              <div className="grid grid-cols-3 items-end gap-3 sm:gap-4">
                {TIERS.map((tier, i) => (
                  <motion.div
                    key={tier.yr}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: EASE }}
                    className={`rounded-2xl border bg-white/[0.06] p-4 text-center backdrop-blur-sm ${
                      i === TIERS.length - 1
                        ? 'border-mint-bright/40 bg-mint/15 shadow-[0_18px_40px_-26px_rgba(77,131,255,0.8)]'
                        : 'border-white/10'
                    }`}
                    style={{ paddingBottom: `${1 + i * 0.85}rem`, paddingTop: `${1 + i * 0.85}rem` }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/55">{tier.yr}</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-mint-bright sm:text-3xl">{tier.amt}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-paper/55">
                The longer you commit, the more we cover
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
