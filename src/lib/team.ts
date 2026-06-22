export interface TeamMember {
  name: string
  role: string
  bio?: string
  founder?: boolean
  lead?: boolean
  image?: string
}

// Vastus team. The founder shows in the hero; `lead: true` renders in the
// Leadership row; everyone else in the wider team grid.
// Headshots live at /team/<slug>.webp (WebP).
export const TEAM: TeamMember[] = [
  {
    name: 'Jack Fletcher',
    role: 'Founder & CEO',
    founder: true,
    image: '/team/jack-fletcher.webp',
    bio: 'Jack has built a wealth of knowledge on the merchant services industry, rising quickly through the ranks of his previous employer. His passion for being regarded as an extension of his clients\' business is built into the fabric of Vastus.',
  },
  { name: 'Ellie Masterson', role: 'Head of Pricing', lead: true, image: '/team/ellie-masterson.webp' },
  { name: 'Lauren Wheatley', role: 'Head of Onboarding', lead: true, image: '/team/lauren-wheatley.webp' },
  { name: 'Brooke Moore', role: 'Capital Advisor', image: '/team/brooke-moore.webp' },
  { name: 'Dom Baker', role: 'Payments Advisor', image: '/team/dom-baker.webp' },
  { name: 'Joe Hargreaves', role: 'Payments Advisor', image: '/team/joe-hargreaves.webp' },
  { name: 'Roman Persaud', role: 'Payments Advisor', image: '/team/roman-persaud.webp' },
  { name: 'Phoebe Wheatley', role: 'Onboarding Advisor', image: '/team/phoebe-wheatley.webp' },
  { name: 'Lloyd Salem', role: 'Client Relationships', image: '/team/lloyd-salem.webp' },
]
