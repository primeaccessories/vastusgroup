const STORAGE_KEY = 'a2b.session'

const DEMO_EMAIL = 'test1@test.co.uk'
const DEMO_PASSWORD = 'test123'

interface Session {
  email: string
  signedInAt: string
}

export function signIn(email: string, password: string): { ok: true } | { ok: false; reason: string } {
  const e = email.trim().toLowerCase()
  if (e !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return { ok: false, reason: 'Email or password is incorrect.' }
  }
  const session: Session = { email: e, signedInAt: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  return { ok: true }
}

export function signOut() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Session
  } catch {
    return null
  }
}

export function isAuthed(): boolean {
  return getSession() !== null
}

export const DEMO_CREDENTIALS = { email: DEMO_EMAIL, password: DEMO_PASSWORD }
