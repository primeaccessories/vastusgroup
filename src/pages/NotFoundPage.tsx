import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-paper px-5">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold tracking-tight text-mint-deep">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          The page you're looking for might have moved, or never existed.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-soft"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  )
}
