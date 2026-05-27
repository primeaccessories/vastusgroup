import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import AuthShell from './AuthShell'

export default function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/portal')
  }

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to manage your account, view transactions and raise tickets."
      footer={
        <>
          New to A2B?{' '}
          <Link to="/sign-up" className="font-semibold text-ink underline-offset-4 hover:underline">
            Create an account
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Sign in
        </Button>
      </form>
    </AuthShell>
  )
}
