import { Link } from 'react-router-dom'
import { ArrowLeft, Quote } from 'lucide-react'
import BrandLogo from '../../components/BrandLogo'
import GlassIcon from '../../components/GlassIcon'

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function AuthShell({ title, subtitle, children, footer }: Props) {
  return (
    <div className="flex min-h-[100dvh] bg-paper">
      <div className="flex w-full flex-col lg:w-[58%]">
        <header className="flex items-center justify-between px-5 py-5 sm:px-10">
          <BrandLogo />
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-ink-fade hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <h1 className="font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-ink-muted">{subtitle}</p>
            <div className="mt-8">{children}</div>
            {footer && <div className="mt-6 text-sm text-ink-muted">{footer}</div>}
          </div>
        </main>

        <footer className="px-5 py-6 text-xs text-ink-fade sm:px-10">
          © {new Date().getFullYear()} A2B Payment Solutions Ltd
        </footer>
      </div>

      <aside className="relative hidden flex-1 overflow-hidden bg-ink lg:block">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[640px] w-[640px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #59d1c3, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #2f9d92, transparent 70%)' }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end p-14 text-paper">
          <div className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur-xl">
            <GlassIcon Icon={Quote} tone="mint" size="md" />
            <blockquote className="mt-6 font-display text-2xl leading-[1.2] tracking-tight text-balance text-paper sm:text-3xl">
              "Switching to A2B saved us nearly £400 a month versus our last provider. The team actually picks up the phone when something goes wrong."
            </blockquote>
            <p className="mt-6 text-sm text-paper/60">Sarah W. — Independent café, Blackpool</p>
          </div>
        </div>
      </aside>
    </div>
  )
}
