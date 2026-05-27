import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import BrandLogo from '../../components/BrandLogo'

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
            <p className="mt-2 text-ink-muted">{subtitle}</p>
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
          className="pointer-events-none absolute -top-32 -left-32 h-[640px] w-[640px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #59d1c3, transparent 70%)' }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end p-14 text-paper">
          <blockquote className="font-display text-3xl leading-[1.15] tracking-tight text-balance">
            "Switching to A2B saved us nearly £400 a month versus our last provider. The team actually picks up the phone when something goes wrong."
          </blockquote>
          <p className="mt-6 text-sm text-paper/60">Sarah W. — Independent café, Blackpool</p>
        </div>
      </aside>

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
    </div>
  )
}
