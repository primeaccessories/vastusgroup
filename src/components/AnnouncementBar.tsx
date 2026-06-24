const MESSAGES = [
  "Switch & Save — we'll cover your exit costs",
  'Up to 240% cash advance on your card turnover',
  'Card payments, finance, utilities & technology',
  'UK-based support, around the clock',
  'Like-for-like quote within 24 hours',
] as const

/**
 * Slim, full-width scrolling announcement ticker pinned to the very top of every
 * marketing page (above the header). Brand-blue strip, white uppercase messages
 * separated by ✦, looping horizontally — mirrors the RONS-hub top bar.
 * The marquee keyframe translates -50%, so the message set is duplicated twice
 * for a seamless loop. Motion is disabled under prefers-reduced-motion.
 */
export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-mint text-paper">
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {MESSAGES.map((message) => (
              <span key={message} className="flex items-center">
                <span className="whitespace-nowrap px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:px-7 sm:text-xs">
                  {message}
                </span>
                <span className="text-sm text-paper/55" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">{MESSAGES.join('. ')}</span>
    </div>
  )
}
