export interface Testimonial {
  quote: string
  name: string
  business: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Switching to A2B saved us nearly £400 a month versus our last provider. The team actually picks up the phone when something goes wrong.",
    name: 'Sarah W.',
    business: 'Independent café, Blackpool',
    rating: 5,
  },
  {
    quote:
      "Cash advance funded a new kitchen for us in under a week. Repayment from card sales means we never feel the pinch on a slow Tuesday.",
    name: 'James M.',
    business: 'Restaurant group, North West',
    rating: 5,
  },
  {
    quote:
      "Best terminal support I've ever had. New device sent next-day when the old one died on a Saturday — saved our weekend takings.",
    name: 'Aisha R.',
    business: 'Boutique retailer, Manchester',
    rating: 5,
  },
  {
    quote:
      "Honest pricing, no surprise fees, and Jack walked us through every line of the quote. That doesn't happen with the banks.",
    name: 'Tom K.',
    business: 'Trade supplier, Yorkshire',
    rating: 5,
  },
  {
    quote:
      "We moved our online checkout, our terminals and our financing all to A2B in the same month. Five years later — no regrets.",
    name: 'Priya S.',
    business: 'Multi-site beauty group',
    rating: 5,
  },
  {
    quote:
      "Their e-POS install was painless. Staff picked it up in an hour and the reporting is genuinely useful, not noise.",
    name: 'Dan O.',
    business: 'Hospitality, Lake District',
    rating: 5,
  },
]
