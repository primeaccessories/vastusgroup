import { Globe, Smartphone, Code2, Sparkles, type LucideIcon } from 'lucide-react'

export type GroupSlug = 'pay' | 'capital' | 'technology' | 'utilities'

export interface GroupCompany {
  slug: GroupSlug
  name: string
  tag: string
  tagline: string
  blurb: string
  description: string
  logo: string
  offers: 'payments' | 'finance' | 'technology' | 'utilities'
  highlights?: string[]
}

export const GROUP: GroupCompany[] = [
  {
    slug: 'pay',
    name: 'Vastus Pay',
    tag: 'Payments',
    tagline: 'Card payments, built for UK business.',
    blurb: 'Card payments, terminals and merchant services built for UK businesses.',
    description:
      'Take card, contactless and mobile-wallet payments anywhere you trade — in store, online and on the move. Bespoke pricing, the latest terminals and 105+ e-commerce integrations, all backed by a dedicated UK support team.',
    logo: '/vastus-pay.webp',
    offers: 'payments',
    highlights: [
      'Card, contactless & mobile-wallet payments',
      'The latest card terminals & POS',
      '105+ e-commerce integrations',
      'Dedicated UK support team',
    ],
  },
  {
    slug: 'capital',
    name: 'Vastus Capital',
    tag: 'Finance',
    tagline: 'Funding that flexes with your business.',
    blurb: 'Business funding, cash advances and flexible finance to help you grow.',
    description:
      'Capital when you need it — cash advances, term loans and revenue-based finance. Fast decisions, no hidden fees, and a dedicated relationship manager from first quote to drawdown.',
    logo: '/vastus-capital.webp',
    offers: 'finance',
    highlights: [
      'Fast funding decisions',
      'No hidden fees, ever',
      'A dedicated relationship manager',
      'Flexible repayment as you trade',
    ],
  },
  {
    slug: 'technology',
    name: 'Vastus Technology',
    tag: 'Technology',
    tagline: 'Digital that means business.',
    blurb: 'Websites, apps and software — digital solutions delivered end to end.',
    description:
      "The digital arm of the group. Websites, mobile apps and custom software, designed and built end to end. Tell us what you're trying to achieve and we'll put the right team on it.",
    logo: '/vastus-technology.webp',
    offers: 'technology',
    highlights: [
      'Websites & high-performance web apps',
      'iOS & Android mobile apps',
      'Custom software & integrations',
      'Branding, hosting & SEO',
    ],
  },
  {
    slug: 'utilities',
    name: 'Vastus Utilities',
    tag: 'Utilities',
    tagline: 'Business utilities, without the hassle.',
    blurb: 'Energy, water and connectivity for your business — compared, switched and managed in one place.',
    description:
      'We take the hassle out of business utilities — energy, water, broadband and telecoms. One team to compare the market, handle the switch and manage your contracts, so you can get on with running your business.',
    logo: '/vastus-utilities.webp',
    offers: 'utilities',
    highlights: [
      'Business energy, water & connectivity',
      'We compare the whole market for you',
      'We handle the switch from end to end',
      'One point of contact for every contract',
    ],
  },
]

export const groupBySlug = (slug?: string): GroupCompany | undefined =>
  GROUP.find((c) => c.slug === slug)

export interface TechService {
  title: string
  blurb: string
  Icon: LucideIcon
}

export const TECH_SERVICES: TechService[] = [
  { title: 'Website Development', blurb: 'High-performance, conversion-focused sites built to modern standards.', Icon: Globe },
  { title: 'Mobile App Development', blurb: 'Native and cross-platform apps for iOS and Android.', Icon: Smartphone },
  { title: 'Software & Technology Solutions', blurb: 'Custom software, integrations and automation for your operations.', Icon: Code2 },
  { title: 'Other Digital Services', blurb: 'Branding, hosting, SEO and the digital essentials to grow online.', Icon: Sparkles },
]
