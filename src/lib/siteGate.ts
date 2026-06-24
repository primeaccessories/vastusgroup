// ─────────────────────────────────────────────────────────────────────────────
// SITE PASSWORD GATE — temporary pre-launch lock for vastusgroup.com
//
//   👉 TO TURN THE GATE OFF:  set  SITE_GATE_ENABLED = false  below, then
//      rebuild + redeploy:   npm run build  →  wrangler pages deploy dist
//      That's the only change needed — the whole site becomes public again.
//
//   You can also disable it at build time WITHOUT editing this file by setting
//   an env var before the build:   VITE_SITE_GATE=off npm run build
//
//   Note: this is a soft "are you on the team" gate, not real security — the
//   password ships in the client bundle. Anyone with it sees the full site.
//   (Same trade-off as the existing hardcoded demo logins in lib/auth.ts.)
// ─────────────────────────────────────────────────────────────────────────────

/** Master switch. Flip to `false` to disable the gate entirely. */
export const SITE_GATE_ENABLED = true

/** The shared password. */
export const SITE_GATE_PASSWORD = 'fucka2b'

// localStorage marker written once the password is accepted, so visitors stay
// unlocked across refreshes / navigation on their device.
const GATE_KEY = 'vastus.gate'
const GATE_TOKEN = 'unlocked'

/** Build-time override: VITE_SITE_GATE=off|false|0|no disables the gate. */
function envDisabled(): boolean {
  const env = import.meta.env as unknown as Record<string, string | undefined>
  const v = (env.VITE_SITE_GATE ?? '').toLowerCase()
  return v === 'off' || v === 'false' || v === '0' || v === 'no'
}

/** Is the gate switched on at all? */
export function gateActive(): boolean {
  return SITE_GATE_ENABLED && !envDisabled()
}

/** Has this device already entered the password? */
export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(GATE_KEY) === GATE_TOKEN
  } catch {
    return false
  }
}

/** Persist the unlocked state on this device. */
export function unlock(): void {
  try {
    localStorage.setItem(GATE_KEY, GATE_TOKEN)
  } catch {
    /* storage blocked — gate just re-asks next load */
  }
}

/** Forget the unlock (handy from devtools: localStorage.removeItem('vastus.gate')). */
export function lock(): void {
  try {
    localStorage.removeItem(GATE_KEY)
  } catch {
    /* no-op */
  }
}

export function checkPassword(input: string): boolean {
  return input === SITE_GATE_PASSWORD
}
