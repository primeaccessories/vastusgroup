import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react'
import BrandLogo from '../components/BrandLogo'
import TurboITPill from '../components/TurboITPill'
import { LinkButton } from '../components/Button'
import ServicesNavDropdown from '../components/ServicesNavDropdown'

const NAV = [
  { to: '/group', label: 'The Group' },
  { to: '/team', label: 'Meet Vastus' },
  { to: '/contact', label: 'Contact' },
]

// Footer division columns — one per Vastus division, each heading links to its
// landing page, with a handful of headline services beneath.
const FOOTER_DIVISIONS = [
  {
    heading: 'Pay',
    href: '/pay',
    links: [
      { to: '/services/payment-terminals', label: 'Payment terminals' },
      { to: '/services/virtual-terminal', label: 'Virtual terminal' },
      { to: '/services/epos-systems', label: 'E-POS systems' },
      { to: '/services/ecommerce', label: 'E-commerce' },
    ],
  },
  {
    heading: 'Capital',
    href: '/capital',
    links: [
      { to: '/services/cash-advance', label: 'Cash advance' },
      { to: '/services/term-loans', label: 'Term loans' },
      { to: '/services/revenue-based-loans', label: 'Revenue finance' },
      { to: '/services/asset-finance', label: 'Asset finance' },
    ],
  },
  {
    heading: 'Utilities',
    href: '/utilities',
    links: [
      { to: '/services/gas-electricity', label: 'Gas & electricity' },
      { to: '/services/water', label: 'Water' },
      { to: '/services/telecoms', label: 'Telecoms' },
      { to: '/services/broadband', label: 'Broadband' },
    ],
  },
  {
    heading: 'Technology',
    href: '/technology',
    links: [
      { to: '/services/website-development', label: 'Web development' },
      { to: '/services/software-development', label: 'Software' },
      { to: '/services/ai-solutions', label: 'AI solutions' },
      { to: '/services/it-support-managed-services', label: 'IT support' },
    ],
  },
]

export default function MarketingLayout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Scroll to top on route CHANGES only. Skip the initial mount so a page
  // refresh lets the browser restore the previous scroll position natively
  // (forcing top here fought that restore and caused a top→back jump).
  const firstRender = useRef(true)
  useEffect(() => {
    setOpen(false)
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'
  // Service detail pages (/services/<slug>) also open on a dark, full-bleed hero,
  // so the header sits transparent over it like the home page.
  const isServiceDetail = /^\/services\/.+/.test(location.pathname)
  const heroDark = isHome || isServiceDetail
  // Once the mobile menu opens, the panel below is light (bg-paper) — flip the
  // header to match so the hamburger doesn't sit in a dark strip above a white slab.
  const darkMode = heroDark && !open
  const headerBg = open
    ? 'bg-paper'
    : heroDark
      ? scrolled
        ? 'bg-ink/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
        : 'bg-transparent'
      : scrolled
        ? 'bg-paper/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
        : 'bg-paper'

  return (
    <div className={`flex min-h-[100dvh] flex-col ${heroDark ? 'bg-ink' : 'bg-paper'}`}>
      <header className={`sticky top-0 z-40 transition-colors duration-300 ${headerBg}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <BrandLogo variant={darkMode ? 'dark' : 'light'} />

          <nav className="hidden items-center gap-1 lg:flex">
            <ServicesNavDropdown darkMode={darkMode} />
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? darkMode
                        ? 'bg-paper text-ink'
                        : 'bg-ink text-paper'
                      : darkMode
                        ? 'text-paper/80 hover:bg-white/10 hover:text-paper'
                        : 'text-ink-fade hover:bg-ink/5 hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LinkButton
              to="/sign-in"
              variant="ghost"
              size="sm"
              className={darkMode ? 'text-paper hover:bg-white/10' : ''}
            >
              Sign in
            </LinkButton>
            <LinkButton to="/contact" variant="primary" size="sm">
              Let's get started
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              darkMode
                ? 'bg-paper text-ink hover:bg-paper/90'
                : 'bg-ink text-paper hover:bg-ink-soft'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-ink/5 bg-paper lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/5'
                  }`
                }
              >
                Services
              </NavLink>
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-ink/10 pt-4">
                <LinkButton to="/sign-in" variant="secondary" size="md">
                  Sign in to portal
                </LinkButton>
                <LinkButton to="/contact" variant="primary" size="md">
                  Let's get started
                  <ArrowUpRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className={`flex-1 ${heroDark ? '-mt-[72px] sm:-mt-[80px]' : ''}`}>
        <Outlet />
      </main>

      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-6 sm:px-8 lg:pt-24 lg:pb-8">
          {/* Brand + contact */}
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-16">
            <div>
              <BrandLogo variant="dark" />
              <p className="mt-6 max-w-md text-pretty text-paper/70">
                One group, four divisions — card payments, business finance, utilities and technology for UK businesses. Based in Blackpool, trusted across the country.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-paper/70">
              <a href="tel:03334432645" className="inline-flex items-center gap-3 hover:text-mint-bright">
                <Phone className="h-4 w-4 flex-shrink-0" /> 0333 443 2645
              </a>
              <a href="mailto:info@vastusgroup.com" className="inline-flex items-center gap-3 hover:text-mint-bright">
                <Mail className="h-4 w-4 flex-shrink-0" /> info@vastusgroup.com
              </a>
              <span className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  Unit 11 Croft Court, Plumpton Close,<br />
                  Blackpool, Lancashire, FY4 5PR
                </span>
              </span>
            </div>
          </div>

          {/* Division columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-12 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_DIVISIONS.map((div) => (
              <div key={div.href}>
                <Link
                  to={div.href}
                  className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50 transition-colors hover:text-mint-bright"
                >
                  {div.heading}
                </Link>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {div.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-paper/80 hover:text-mint-bright">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">
                The Group
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link to="/group" className="text-paper/80 hover:text-mint-bright">The Group</Link></li>
                <li><Link to="/team" className="text-paper/80 hover:text-mint-bright">Our team</Link></li>
                <li><Link to="/contact" className="text-paper/80 hover:text-mint-bright">Contact</Link></li>
                <li><Link to="/sign-in" className="text-paper/80 hover:text-mint-bright">Customer portal</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:text-left">
              <p className="text-xs text-paper/50">
                © {new Date().getFullYear()} Vastus Group Ltd. Registered in England &amp; Wales. Authorised payment institution.
              </p>
              <Link to="/privacy" className="text-xs text-paper/60 hover:text-mint-bright">
                Privacy Policy
              </Link>
            </div>
            {/* Turbo IT attribution — centred on its own row at the very bottom. */}
            <div className="mt-4 flex justify-center">
              <TurboITPill />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
