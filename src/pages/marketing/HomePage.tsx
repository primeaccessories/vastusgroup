import { ArrowDown, ArrowUpRight, Check, Phone, UtensilsCrossed, ShoppingBag, ShoppingCart, Scissors, Car, Briefcase, Hammer, Ticket, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { LinkButton } from '../../components/Button'
import GlassIcon from '../../components/GlassIcon'
import { GROUP, TECH_SERVICES } from '../../lib/group'

const MASK_DURATION_MS = 2600
const HERO_TEXT_DELAY_MS = 2200

// Plays once per browser tab session. A normal refresh keeps the flag, so the
// intro is skipped and the scroll position is preserved; a fresh tab / new
// session replays it.
const MASK_SEEN_KEY = 'vastus-mask-seen'

const SUBLINES = [
  'Payments, finance and technology — one group, working as one team.',
  'Card processing, business funding and digital solutions under one roof.',
  'Joined-up thinking for businesses that refuse to settle for ordinary.',
  'One partner for the tools that move your business forward.',
]
const SUBLINE_ROTATE_MS = 3000

const PORTAL_FEATURES = [
  'Live transaction feed',
  'Terminal health & status',
  'Loan & cash advance balances',
  'Statements & documents',
  'Raise & track support tickets',
  'Manage your team users',
]

const PAGES_GRID: { title: string; excerpt: string; image: string; to: string }[] = [
  {
    title: 'Terminals',
    excerpt:
      'Solutions that are efficient and cost-effective. The latest payment technology — we guarantee you can always take a payment.',
    image: '/pages-grid/terminals.jpg',
    to: '/products/payment-terminals',
  },
  {
    title: 'Term Loans',
    excerpt:
      'Looking for flexible financing to grow your business? Competitive term loans designed to meet your unique needs.',
    image: '/pages-grid/ukmoney.png',
    to: '/products/term-loans',
  },
  {
    title: 'Revenue-Based Loans',
    excerpt:
      'Looking for flexible financing to grow your business? Competitive revenue-based loans designed to meet your business.',
    image: '/pages-grid/ukmoney.png',
    to: '/products/revenue-based-loans',
  },
  {
    title: 'Our Team',
    excerpt: 'Meet the people behind Vastus — solutions that are efficient, and a team you can actually reach.',
    image: '/pages-grid/team.jpg',
    to: '/team',
  },
  {
    title: 'E-POS Systems',
    excerpt:
      'Bespoke solutions designed to meet business needs. Electronic point of sale systems — choose what fits.',
    image: '/pages-grid/epos.jpg',
    to: '/products/epos-systems',
  },
  {
    title: 'E-Commerce Payment Solutions',
    excerpt:
      'Offering solutions to accept online payments securely. 105+ partners and integrations — WooCommerce, Magento, WIX and more.',
    image: '/pages-grid/ecommerce.jpg',
    to: '/products/ecommerce',
  },
  {
    title: 'Contact Us',
    excerpt:
      'Solutions that are efficient and cost-effective. Talk to a member of the Vastus team about your business.',
    image: '/pages-grid/contact.jpg',
    to: '/contact',
  },
  {
    title: 'Cash Advance',
    excerpt:
      'Flexible finance for businesses accepting card payments. Pay it back as a percentage of every transaction.',
    image: '/pages-grid/cash-advance.png',
    to: '/products/cash-advance',
  },
]

const TRUST_ROWS: { label: string; duration: number; reverse?: boolean; items: string[] }[] = [
  {
    label: 'Cards & wallets',
    duration: 52,
    items: [
      'VISA',
      'Mastercard',
      'American Express',
      'Maestro',
      'Discover',
      'JCB',
      'UnionPay',
      'Diners Club',
      'Apple Pay',
      'Google Pay',
      'Samsung Pay',
      'Klarna',
      'PayPal',
      'Open Banking',
    ],
  },
  {
    label: 'Standards & infra',
    duration: 58,
    reverse: true,
    items: [
      'PCI-DSS Level 1',
      '3D Secure 2',
      'EMV Chip & PIN',
      'Contactless NFC',
      'Tap to Pay',
      'P2PE',
      'Tokenisation',
      'AES-256',
      'ISO 8583',
      'ISO 20022',
      'PSD2 / SCA',
      'Visa Direct',
      'Mastercard Send',
      'Faster Payments',
    ],
  },
]

// TODO(owner): swap these placeholder sectors for the client's final target-sector list.
const SECTORS: { name: string; Icon: LucideIcon }[] = [
  { name: 'Hospitality', Icon: UtensilsCrossed },
  { name: 'Retail', Icon: ShoppingBag },
  { name: 'E-commerce', Icon: ShoppingCart },
  { name: 'Health & Beauty', Icon: Scissors },
  { name: 'Automotive', Icon: Car },
  { name: 'Professional Services', Icon: Briefcase },
  { name: 'Trades & Construction', Icon: Hammer },
  { name: 'Leisure & Entertainment', Icon: Ticket },
]

export default function HomePage() {
  const alreadySeen =
    typeof window !== 'undefined' && sessionStorage.getItem(MASK_SEEN_KEY) === 'true'

  const [maskGone, setMaskGone] = useState(alreadySeen)
  useEffect(() => {
    if (maskGone) return
    // Mark seen immediately so a mid-intro route change + return doesn't replay it.
    try { sessionStorage.setItem(MASK_SEEN_KEY, 'true') } catch { /* private mode */ }
    const t = setTimeout(() => setMaskGone(true), MASK_DURATION_MS)
    return () => clearTimeout(t)
  }, [maskGone])

  // Lock scroll while the mask is playing so users can't scroll behind the fixed overlay.
  // overflow:hidden alone doesn't stop iOS touch scrolling, so also block touchmove.
  useEffect(() => {
    if (maskGone) return
    const html = document.documentElement
    const body = document.body
    window.scrollTo(0, 0)
    const prevHtml = html.style.overflow
    const prevBody = body.style.overflow
    const prevTouch = body.style.touchAction
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'
    const blockTouch = (e: TouchEvent) => e.preventDefault()
    document.addEventListener('touchmove', blockTouch, { passive: false })
    return () => {
      html.style.overflow = prevHtml
      body.style.overflow = prevBody
      body.style.touchAction = prevTouch
      document.removeEventListener('touchmove', blockTouch)
    }
  }, [maskGone])

  const [textIn, setTextIn] = useState(alreadySeen)
  useEffect(() => {
    if (textIn) return
    const t = setTimeout(() => setTextIn(true), HERO_TEXT_DELAY_MS)
    return () => clearTimeout(t)
  }, [textIn])

  const [sublineIdx, setSublineIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSublineIdx((i) => (i + 1) % SUBLINES.length), SUBLINE_ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  // Portal tease (mobile) — small scroll-driven parallax: the card and text drift
  // at different speeds as the section passes through the viewport.
  const portalRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress: portalProgress } = useScroll({
    target: portalRef,
    offset: ['start end', 'end start'],
  })
  // Smooth the raw scroll value through a spring so the parallax glides instead of
  // tracking every jittery scroll tick (the laggy feel, esp. on mobile).
  const portalSmooth = useSpring(portalProgress, { stiffness: 70, damping: 22, mass: 0.25 })
  const portalCardY = useTransform(portalSmooth, [0, 1], [50, -50])
  const portalTextY = useTransform(portalSmooth, [0, 1], [24, -24])
  // Floating cards drift further + in opposite directions for a slick layered parallax.
  const portalFloat1Y = useTransform(portalSmooth, [0, 1], [110, -110])
  const portalFloat2Y = useTransform(portalSmooth, [0, 1], [-80, 90])

  // Explore section — scroll-driven stack: each card scales down + blurs as the
  // next card rises to cover it for a smooth, cinematic transition.
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const PIN = 96 // matches sticky top-24 (6rem)
    let raf = 0
    const update = () => {
      raf = 0
      const els = cardRefs.current
      for (let i = 0; i < els.length; i++) {
        const inner = els[i]
        if (!inner) continue
        const next = els[i + 1]
        let progress = 0
        if (next) {
          const slot = inner.getBoundingClientRect().height
          const gap = next.getBoundingClientRect().top - PIN
          progress = Math.min(Math.max(1 - gap / slot, 0), 1)
        }
        const scale = 1 - progress * 0.2
        const blur = progress * 5
        const lift = -progress * 28
        inner.style.transform = `translateY(${lift}px) scale(${scale})`
        inner.style.filter = blur > 0.05 ? `blur(${blur}px)` : 'none'
        inner.style.opacity = `${1 - progress * 0.35}`
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* VASTUS LOADING SPLASH — full-screen ink sheet with the complete Vastus
          logo (blue V mark + wordmark) centred. Gentle zoom + fade into the dark
          hero (ink→ink, so no flash). Sits above the header for a clean splash. */}
      <AnimatePresence>
        {!maskGone && (
          <motion.div
            key="hero-vastus-mask"
            aria-hidden="true"
            initial={{ scale: 1.0, opacity: 1 }}
            animate={{
              scale: [1, 1.7],
              opacity: [1, 1, 0],
              transition: {
                scale: { duration: 1.6, delay: 0.9, ease: [0.55, 0, 0.2, 1] },
                opacity: { duration: 1.6, delay: 0.9, times: [0, 0.45, 1], ease: 'easeIn' },
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            className="pointer-events-none fixed left-0 top-[-10vh] z-50 h-[120vh] w-screen overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 bg-ink" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 px-6 sm:gap-5">
                <img
                  src="/vastus-mark.webp"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="h-14 w-14 select-none sm:h-20 sm:w-20"
                />
                <img
                  src="/vastus-logo-dark.webp"
                  alt="Vastus"
                  draggable={false}
                  className="h-8 w-auto select-none sm:h-12"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO + MARQUEE — one viewport-tall landing block. Height compensates for
          the header pull-up (-mt-[72px]/sm:-mt-[80px]) so it fills exactly to the
          viewport bottom on every browser (Safari was ending ~72px short, revealing
          the next section + lifting content). */}
      <div className="flex min-h-[calc(100dvh_+_72px)] flex-col bg-ink sm:min-h-[calc(100dvh_+_80px)]">
      {/* HERO */}
      <section className="relative isolate flex flex-1 flex-col overflow-hidden bg-ink text-paper">
        {/* Ambient brand backdrop — replaces the old intro video. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] -z-20 h-[44rem] w-[44rem] rounded-full bg-mint/25 blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-25%] left-[-15%] -z-20 h-[40rem] w-[40rem] rounded-full bg-mint-deep/20 blur-[150px]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={textIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-36 pb-8 sm:px-8 sm:pt-44 sm:pb-10 lg:pt-52"
        >
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-mint-bright sm:text-xs">
              <span className="h-px w-8 bg-mint-bright" />
              One group · Three companies
            </p>

            <h1 className="mt-6 font-display text-balance text-[clamp(2.5rem,7.5vw,6rem)] font-semibold uppercase leading-[0.95] tracking-tight text-paper">
              Ordinary is
              <br />
              not an option
            </h1>

            <div className="mt-10">
              <LinkButton
                to="/group"
                variant="primary"
                size="lg"
                className="w-full !shadow-none sm:w-auto"
              >
                Explore the Group
                <ArrowUpRight className="h-5 w-5" />
              </LinkButton>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-start pt-12 sm:justify-end sm:pt-16">
            <div className="flex w-full max-w-md items-end gap-4 sm:gap-6">
              <div className="relative min-h-[5rem] flex-1 sm:min-h-[4rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={sublineIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-pretty text-sm text-paper/70 sm:text-lg"
                  >
                    {SUBLINES[sublineIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center text-paper/60"
              >
                <ArrowDown className="h-6 w-6" strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TRUST MARQUEE — anchored to the bottom of the landing block */}
      <section className="shrink-0 border-y border-white/5 bg-ink py-6 text-paper sm:py-10">
        <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-paper/40 sm:mb-10 sm:text-xs">
          Cards, wallets &amp; the rails behind them
        </p>
        <div className="flex flex-col gap-5 sm:gap-7">
          {TRUST_ROWS.map((row, i) => (
            <div key={row.label} className="flex items-center gap-4">
              <span className="hidden shrink-0 pl-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-mint/80 sm:block sm:w-40 sm:pl-8">
                {row.label}
              </span>
              <div className="relative flex-1 overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-24"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-24"
                  aria-hidden="true"
                />
                <div
                  className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap sm:gap-14"
                  style={{
                    animationDuration: `${row.duration}s`,
                    animationDirection: row.reverse ? 'reverse' : 'normal',
                  }}
                >
                  {Array.from({ length: 3 }).flatMap((_, dup) =>
                    row.items.map((brand) => (
                      <span
                        key={`${i}-${dup}-${brand}`}
                        className="font-display text-base font-semibold uppercase tracking-[0.25em] text-paper/40 sm:text-lg"
                      >
                        {brand}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* PORTAL TEASE — cinematic dashboard cluster */}
      <section className="relative overflow-hidden bg-gradient-to-b from-paper via-paper to-paper-soft text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,30,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-15%] h-[40rem] w-[40rem] rounded-full bg-mint/35 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[-15%] h-[40rem] w-[40rem] rounded-full bg-mint-deep/15 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-40">
          {/* MOBILE / TABLET — clean stack */}
          <div ref={portalRef} className="flex flex-col items-center lg:hidden">
            <motion.div style={{ y: portalCardY }} className="w-full max-w-[480px] will-change-transform">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 bg-gradient-to-tr from-mint/45 via-mint/20 to-transparent blur-2xl sm:-inset-10"
                />
                <div className="absolute -top-3 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper shadow-xl ring-1 ring-mint/40">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                  </span>
                  Live
                </div>
                <PortalPreview />

                {/* Floating live cards — drift with scroll + gentle float, like desktop */}
                <motion.div style={{ y: portalFloat1Y }} className="absolute -right-1 top-10 z-30 will-change-transform sm:right-2">
                  <motion.div
                    initial={{ opacity: 0, y: 12, x: 12 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-40 rounded-2xl bg-paper p-3.5 text-ink shadow-[0_24px_60px_-20px_rgba(15,23,30,0.35),0_8px_20px_-8px_rgba(11,83,245,0.3)] ring-1 ring-ink/10 sm:w-48"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-mint-deep sm:text-[10px]">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                          </span>
                          New txn
                        </span>
                        <span className="text-[9px] text-ink-fade sm:text-[10px]">14:32</span>
                      </div>
                      <div className="mt-1.5 flex items-baseline justify-between">
                        <span className="font-display text-lg font-semibold sm:text-xl">+£42.50</span>
                        <span className="text-[10px] text-ink-muted sm:text-xs">Visa ••4521</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div style={{ y: portalFloat2Y }} className="absolute -left-1 bottom-12 z-30 will-change-transform sm:left-2">
                  <motion.div
                    initial={{ opacity: 0, y: 12, x: -12 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                      className="rounded-2xl bg-paper px-3.5 py-2.5 text-ink shadow-[0_24px_60px_-20px_rgba(15,23,30,0.35),0_8px_20px_-8px_rgba(11,83,245,0.3)] ring-1 ring-ink/10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(11,83,245,0.8)]" />
                        <span className="text-[11px] font-semibold sm:text-xs">4 terminals online</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <div
              aria-hidden="true"
              className="my-8 h-10 w-px bg-gradient-to-b from-mint/0 via-mint-deep/50 to-mint/0"
            />

            <motion.div style={{ y: portalTextY }} className="max-w-2xl text-center will-change-transform">
              <p className="text-xs font-semibold uppercase tracking-wider text-mint-deep">Customer portal</p>
              <h2 className="mt-3 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Your account, your numbers, <span className="text-mint-deep">in one place.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-ink-muted sm:text-lg">
                Sign in to see live settlements, manage terminals, check loan balances and raise support tickets — on any device.
              </p>
              <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left text-sm text-ink sm:grid-cols-2">
                {PORTAL_FEATURES.map((line) => (
                  <li key={line} className="inline-flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint text-paper">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <LinkButton to="/sign-in" variant="primary" size="md">
                  Sign in to your portal
                </LinkButton>
                <LinkButton to="/contact" variant="secondary" size="md">
                  Contact us today
                  <ArrowUpRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP — cinematic split */}
          <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 xl:gap-24">
            {/* LEFT — floating dashboard cluster */}
            <div className="relative h-[620px] xl:h-[680px]">
              <motion.div
                initial={{ opacity: 0, y: 30, rotateY: -22 }}
                whileInView={{ opacity: 1, y: 0, rotateY: -8 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 2000, rotateX: 4, transformOrigin: 'left center' }}
                className="absolute left-0 top-1/2 z-10 w-[480px] -translate-y-1/2 xl:w-[520px]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-tr from-mint/35 via-mint/15 to-transparent blur-3xl"
                />
                <div className="absolute -top-3 left-6 z-30 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper shadow-2xl ring-1 ring-mint/40">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                  </span>
                  Portal · Live
                </div>
                <PortalPreview />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12, x: 24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-64 rounded-2xl bg-paper p-4 text-ink shadow-[0_24px_60px_-20px_rgba(15,23,30,0.35),0_8px_20px_-8px_rgba(11,83,245,0.3)] ring-1 ring-ink/10 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-mint-deep">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                      </span>
                      New txn
                    </span>
                    <span className="text-[10px] text-ink-fade">14:32</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="font-display text-2xl font-semibold">+£42.50</span>
                    <span className="text-xs text-ink-muted">Visa ••4521</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12, x: 24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-2 bottom-10 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="w-60 rounded-2xl bg-paper p-4 text-ink shadow-[0_24px_60px_-20px_rgba(15,23,30,0.35),0_8px_20px_-8px_rgba(11,83,245,0.3)] ring-1 ring-ink/10 backdrop-blur"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-fade">Settled today</p>
                  <p className="mt-1 font-display text-2xl font-semibold">£1,422.30</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <ArrowUpRight className="h-3 w-3 text-mint-deep" />
                    <span className="font-semibold text-mint-deep">+12%</span>
                    <span className="text-ink-fade">vs yesterday</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12, x: 24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-20 top-1/2 z-20 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                  className="rounded-2xl bg-paper px-4 py-3 text-ink shadow-[0_24px_60px_-20px_rgba(15,23,30,0.35),0_8px_20px_-8px_rgba(11,83,245,0.3)] ring-1 ring-ink/10 backdrop-blur"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(11,83,245,0.8)]" />
                    <span className="text-xs font-semibold">4 terminals online</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT — copy */}
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-mint-deep">
                <span className="h-px w-8 bg-mint-deep" />
                Customer portal
              </p>
              <h2 className="mt-5 font-display text-balance text-[clamp(2.5rem,4.2vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-ink">
                Your account,<br />your numbers,<br />
                <span className="text-mint-deep">in one place.</span>
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-lg text-ink-muted">
                Sign in to see live settlements, manage terminals, check loan balances and raise support tickets — on any device.
              </p>
              <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm text-ink">
                {PORTAL_FEATURES.map((line) => (
                  <li key={line} className="inline-flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint text-paper">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton to="/sign-in" variant="primary" size="lg">
                  Sign in to your portal
                </LinkButton>
                <LinkButton to="/contact" variant="secondary" size="lg">
                  Contact us today
                  <ArrowUpRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE — the three Vastus companies */}
      <section id="group" className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-mint/20 blur-[150px]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-bright">
              <span className="h-px w-8 bg-mint-bright" /> The Vastus Group <span className="h-px w-8 bg-mint-bright" />
            </p>
            <h2 className="mt-5 font-display text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
              One group. <span className="text-mint-bright">Three companies.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-paper/70 sm:text-lg">
              Payments, finance and technology under one roof — joined-up solutions to help your business move faster.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
            {GROUP.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="group flex h-full flex-col items-start rounded-3xl bg-white/[0.03] p-7 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:ring-mint/40 sm:p-8"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-white px-6 ring-1 ring-ink/5">
                  <img src={c.logo} alt={c.name} loading="lazy" className="max-h-14 w-auto object-contain" />
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-mint-bright">{c.tag}</p>
                <p className="mt-3 text-pretty text-sm text-paper/70 sm:text-base">{c.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint-bright">
                  Explore {c.name}
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE — target sectors (placeholder list until owner provides final) */}
      <section id="sectors" className="relative overflow-hidden bg-paper text-ink">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full bg-mint/15 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Who we serve</p>
              <h2 className="mt-4 font-display text-balance text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight text-ink">
                Built for <span className="text-mint-deep">ambitious</span> UK businesses.
              </h2>
              <p className="mt-5 max-w-md text-pretty text-lg text-ink-muted">
                From the high street to high growth, we partner with businesses across every sector — payments, finance and technology, tailored to how you actually work.
              </p>
              <div className="mt-8">
                <LinkButton to="/contact" variant="primary" size="lg">
                  Talk to our team
                  <ArrowUpRight className="h-5 w-5" />
                </LinkButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {SECTORS.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-ink/[0.06] shadow-[0_18px_40px_-28px_rgba(10,18,38,0.4)] transition duration-300 hover:-translate-y-0.5 hover:ring-mint/40 sm:p-5"
                >
                  <GlassIcon Icon={s.Icon} tone="mint" size="md" />
                  <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VASTUS TECHNOLOGY — dedicated lead-gen pillar */}
      <section id="technology" className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-mint/20 blur-[150px]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-bright">Vastus Technology</p>
              <h2 className="mt-4 font-display text-balance text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
                Digital that means <span className="text-mint-bright">business.</span>
              </h2>
              <p className="mt-5 max-w-md text-pretty text-paper/70 sm:text-lg">
                Websites, apps and software — designed and built end to end. Tell us what you're trying to achieve and we'll put the right team on it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/contact" variant="primary" size="lg">
                  Start a project
                  <ArrowUpRight className="h-5 w-5" />
                </LinkButton>
                <a
                  href="tel:03334432645"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-semibold text-paper transition hover:border-mint-bright hover:text-mint-bright"
                >
                  <Phone className="h-5 w-5" />
                  0333 443 2645
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TECH_SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="group rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:ring-mint/40 sm:p-7"
                >
                  <GlassIcon Icon={svc.Icon} tone="paper" size="md" />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight sm:text-xl">{svc.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-paper/65">{svc.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGES GRID — sticky-stack scroll, refined card-stack transition */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-24">
          <div className="pb-10 sm:pb-12">
            {PAGES_GRID.map((p, i) => (
              <article key={p.title} className="sticky top-24 mb-10">
                <div
                  ref={(el) => { cardRefs.current[i] = el }}
                  style={{ zIndex: i, willChange: 'transform, filter, opacity', transition: 'transform 0.12s linear, filter 0.12s linear, opacity 0.12s linear' }}
                  className="relative origin-top"
                >
                  <Link
                    to={p.to}
                    className="group relative block h-[220px] overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow-[0_24px_60px_-30px_rgba(15,23,30,0.45)] sm:h-[320px] lg:h-[440px]"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/15" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                      <h3 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-pretty text-sm text-paper/80 sm:mt-4 sm:text-base lg:text-lg">
                        {p.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mint sm:mt-6">
                        Read more
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-paper-soft via-paper to-paper p-10 ring-1 ring-ink/5 sm:p-14 lg:p-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-mint/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-16 h-[320px] w-[320px] rounded-full bg-mint-deep/15 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mint-deep">Get a quote</p>
                <h2 className="mt-4 font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  Ready to switch?
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-ink-muted sm:text-lg">
                  Send us your last statement and we'll come back with a like-for-like quote in 24 hours. No commitment, no awkward sales calls.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton to="/contact" variant="primary" size="lg">
                  Get a quote
                  <ArrowUpRight className="h-5 w-5" />
                </LinkButton>
                <a
                  href="tel:03334432645"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/15 px-8 text-base font-semibold text-ink transition hover:border-mint-deep hover:text-mint-deep"
                >
                  <Phone className="h-5 w-5" />
                  0333 443 2645
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function PortalPreview() {
  return (
    <div className="relative w-full rounded-2xl border border-ink/10 bg-paper shadow-[0_30px_80px_-20px_rgba(15,23,30,0.35),0_10px_30px_-10px_rgba(11,83,245,0.25)]">
      <div className="flex items-center gap-1.5 border-b border-ink/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-3 text-xs text-ink-fade">portal.vastusgroup.com</span>
      </div>
      <div className="p-5">
        <p className="text-xs text-ink-fade">Today's takings</p>
        <p className="mt-1 font-display text-3xl font-semibold text-ink">£1,847.50</p>
        <p className="text-xs text-mint-deep">+12% vs yesterday</p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            { label: 'Settled', value: '£1,422' },
            { label: 'Pending', value: '£425' },
            { label: 'Fees', value: '£16.45' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-paper-soft p-3">
              <p className="text-[10px] uppercase tracking-wider text-ink-fade">{s.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {[
            { t: '14:32', a: '+£42.50', card: 'Visa ••4521' },
            { t: '14:18', a: '+£68.00', card: 'Amex ••1003' },
            { t: '13:54', a: '+£215.75', card: 'MC ••8842' },
          ].map((r) => (
            <div key={r.t} className="flex items-center justify-between rounded-xl bg-paper-soft px-3 py-2 text-xs">
              <span className="text-ink-fade">{r.t}</span>
              <span className="text-ink-muted">{r.card}</span>
              <span className="font-semibold text-ink">{r.a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
