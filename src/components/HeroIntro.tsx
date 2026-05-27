import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'a2b-intro-shown'
const HOLD_MS = 2200

export default function HeroIntro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    const params = new URLSearchParams(window.location.search)
    if (params.get('intro') === 'force') return true
    return !sessionStorage.getItem(STORAGE_KEY)
  })

  useEffect(() => {
    if (!show) return
    sessionStorage.setItem(STORAGE_KEY, '1')
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setShow(false), HOLD_MS)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = previousOverflow
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="a2b-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden bg-ink"
          aria-hidden="true"
        >
          <video
            src="/a2b-intro.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.img
            src="/a2b-mask.svg"
            alt=""
            initial={{ scale: 2.1, opacity: 0.6 }}
            animate={{ scale: 1.88, opacity: 1 }}
            exit={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
