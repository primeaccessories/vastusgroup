import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ArrowUpRight, CreditCard, Banknote, Zap, Code2, type LucideIcon } from 'lucide-react'
import GlassIcon from './GlassIcon'

interface Props {
  darkMode: boolean
}

const CLOSE_DELAY_MS = 120

interface DivisionItem {
  name: string
  href: string
  pitch: string
  Icon: LucideIcon
}

const DIVISIONS: DivisionItem[] = [
  { name: 'Vastus Pay', href: '/pay', pitch: 'Card payments, terminals & checkout.', Icon: CreditCard },
  { name: 'Vastus Capital', href: '/capital', pitch: 'Funding that flexes with your business.', Icon: Banknote },
  { name: 'Vastus Utilities', href: '/utilities', pitch: 'Energy, water & connectivity, sorted.', Icon: Zap },
  { name: 'Vastus Technology', href: '/technology', pitch: 'Websites, apps & custom software.', Icon: Code2 },
]

export default function ServicesNavDropdown({ darkMode }: Props) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()
  const onServicesRoute = location.pathname.startsWith('/services')

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }

  const handleEnter = () => {
    cancelClose()
    setOpen(true)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={scheduleClose}
      onFocus={handleEnter}
      onBlur={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
          onServicesRoute
            ? darkMode
              ? 'bg-paper text-ink'
              : 'bg-ink text-paper'
            : darkMode
              ? 'text-paper/80 hover:bg-white/10 hover:text-paper'
              : 'text-ink-fade hover:bg-ink/5 hover:text-ink'
        }`}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.2}
        />
      </button>

      <div
        aria-hidden={!open}
        className={`absolute left-0 top-full z-50 w-[560px] max-w-[calc(100vw-2rem)] pt-3 transition-[opacity,transform] duration-150 ease-out ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="overflow-hidden rounded-2xl border border-ink/5 bg-paper shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)] ring-1 ring-ink/5">
          <div className="grid grid-cols-2 gap-1 p-3">
            {DIVISIONS.map((d) => (
              <Link
                key={d.href}
                to={d.href}
                className="group flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-mint/10"
              >
                <GlassIcon Icon={d.Icon} tone="mint" size="sm" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{d.name}</span>
                  <span className="block text-xs text-ink-fade">{d.pitch}</span>
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/services"
            className="group flex items-center justify-between border-t border-ink/5 bg-paper-soft px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink/[0.04]"
          >
            See all services
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
