import { useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { checkPassword, gateActive, isUnlocked, unlock } from '../lib/siteGate'

/**
 * Site-wide password gate. Wraps the entire app: while locked it renders only
 * the password screen and nothing of the real site loads behind it. Once the
 * password is entered (or if the gate is switched off in lib/siteGate.ts) it
 * renders its children — the full Vastus site, splash animation and all.
 */
export default function SiteGate({ children }: { children: ReactNode }) {
  // Open immediately when the gate is off or this device is already unlocked.
  const [open, setOpen] = useState(() => !gateActive() || isUnlocked())
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    if (checkPassword(value.trim())) {
      unlock()
      setOpen(true)
    } else {
      setError(true)
      setValue('')
    }
  }

  if (open) return <>{children}</>

  return (
    <div className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-paper px-6">
      {/* soft brand glow, echoing the home splash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[58vmin] w-[58vmin] rounded-full bg-mint/10 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm"
      >
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-black/5 bg-white/80 px-7 py-10 shadow-[0_30px_80px_-20px_rgba(10,18,38,0.25)] backdrop-blur">
          <img
            src="/vastus-logo-full.webp"
            alt="Vastus"
            draggable={false}
            className="w-[min(60vw,220px)] select-none"
          />

          <div className="text-center">
            <p className="text-sm font-semibold text-ink">This site is private</p>
            <p className="mt-1 text-sm text-ink-fade">Enter the password to continue.</p>
          </div>

          <form onSubmit={submit} className="w-full space-y-3">
            <input
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setError(false)
              }}
              placeholder="Password"
              aria-label="Site password"
              autoComplete="off"
              className="input text-center"
            />
            {error && (
              <p role="alert" className="text-center text-sm text-red-600">
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-[0.875rem] bg-mint px-4 py-3 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(11,83,245,0.45)] transition hover:bg-mint-deep focus:outline-none focus:ring-4 focus:ring-mint/25"
            >
              Enter
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-ink-fade/70">Vastus Group — private preview</p>
      </motion.div>
    </div>
  )
}
