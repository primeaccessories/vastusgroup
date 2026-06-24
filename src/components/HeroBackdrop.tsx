type Props = {
  /** Full-bleed hero photo, e.g. '/hero-business.webp'. */
  image: string
}

/**
 * Dark photo-backed hero backdrop — the layered treatment used across every
 * page hero (matching the service detail pages): a full-bleed cover photo, a
 * flat ink wash, a left-weighted gradient that keeps headline text legible, a
 * bottom fade into the page, and a soft mint glow.
 *
 * Render as the FIRST child of a `relative isolate overflow-hidden bg-ink
 * text-paper` hero section; the negative z-index layers sit behind the
 * section's own content.
 */
export default function HeroBackdrop({ image }: Props) {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 bg-ink/45" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/40" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-mint/15 blur-[160px]" />
    </>
  )
}
