import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import AuthShell from './AuthShell'
import { signIn, DEMO_CREDENTIALS } from '../../lib/auth'

export default function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = signIn(email, password)
    if (result.ok) {
      navigate(result.role === 'admin' ? '/admin' : '/portal')
    } else {
      setError(result.reason)
    }
  }

  const fillDemo = () => {
    setEmail(DEMO_CREDENTIALS.email)
    setPassword(DEMO_CREDENTIALS.password)
    setError(null)
  }

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to manage your account, view transactions and raise tickets."
      footer={
        <>
          New to A2B?{' '}
          <Link to="/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
            Contact us today
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError(null)
            }}
            className="input"
            placeholder="you@business.co.uk"
            autoComplete="email"
          />
        </label>

        <label className="block">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-sm font-medium text-ink">Password</span>
            <Link to="/forgot-password" className="text-sm text-mint-deep hover:text-ink">
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(null)
            }}
            className="input"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </label>

        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Sign in
        </Button>

        <div className="rounded-xl border border-ink/10 bg-paper-soft p-4 text-xs text-ink-muted">
          <p className="font-semibold text-ink">Demo access</p>
          <p className="mt-1">
            Email <span className="font-mono text-ink">{DEMO_CREDENTIALS.email}</span> · password{' '}
            <span className="font-mono text-ink">{DEMO_CREDENTIALS.password}</span>
          </p>
          <button
            type="button"
            onClick={fillDemo}
            className="mt-2 font-semibold text-mint-deep hover:text-ink"
          >
            Fill in for me →
          </button>
        </div>
      </form>
    </AuthShell>
  )
}
