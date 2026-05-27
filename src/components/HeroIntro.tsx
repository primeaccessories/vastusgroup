import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'a2b-intro-shown'
const HOLD_MS = 1400

export default function HeroIntro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem(STORAGE_KEY)
  })

  useEffect(() => {
    if (!show) return
    sessionStorage.setItem(STORAGE_KEY, '1')
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setShow(false), HOLD_MS)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = original
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="a2b-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <motion.img
            src="/a2b-logo.webp"
            alt=""
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="h-16 w-auto sm:h-24"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
