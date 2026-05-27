import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Button } from '../../components/Button'
import AuthShell from './AuthShell'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AuthShell
      title="Reset your password."
      subtitle="We'll email you a link to set a new password."
      footer={
        <>
          Remembered it?{' '}
          <Link to="/sign-in" className="font-semibold text-ink underline-offset-4 hover:underline">
            Back to sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-2xl border border-mint/30 bg-mint/10 p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint text-ink">
            <Check className="h-5 w-5" strokeWidth={3} />
          </div>
          <p className="mt-4 font-display text-lg font-semibold text-ink">Check your inbox.</p>
          <p className="mt-1 text-sm text-ink-muted">
            If <span className="font-medium text-ink">{email}</span> matches an account, you'll have a reset link within a minute or two.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-5">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              autoComplete="email"
            />
          </label>
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Send reset link
          </Button>
        </form>
      )}
    </AuthShell>
  )
}
