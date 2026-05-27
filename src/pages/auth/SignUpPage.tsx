import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import AuthShell from './AuthShell'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', business: '', email: '', password: '' })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/portal')
  }

  return (
    <AuthShell
      title="Create your A2B account."
      subtitle="If you're an existing customer, we'll match your account by merchant ID once you sign in."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/sign-in" className="font-semibold text-ink underline-offset-4 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Full name</span>
          <input type="text" required value={form.name} onChange={update('name')} className="input" autoComplete="name" />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Business name</span>
          <input type="text" required value={form.business} onChange={update('business')} className="input" />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Work email</span>
          <input type="email" required value={form.email} onChange={update('email')} className="input" autoComplete="email" />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Password</span>
          <input
            type="password"
            required
            value={form.password}
            onChange={update('password')}
            className="input"
            autoComplete="new-password"
            minLength={8}
          />
          <span className="mt-1 block text-xs text-ink-fade">Minimum 8 characters.</span>
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Create account
        </Button>

        <p className="text-xs text-ink-fade">
          By creating an account you agree to our terms of service and privacy policy.
        </p>
      </form>
    </AuthShell>
  )
}
