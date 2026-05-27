import { CreditCard, Globe, Monitor, ShoppingCart, Banknote, Briefcase, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ProductCategory = 'payments' | 'finance'

export interface Product {
  slug: string
  title: string
  shortTitle: string
  category: ProductCategory
  tagline: string
  description: string
  features: string[]
  Icon: LucideIcon
  bullets: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'payment-terminals',
    title: 'Payment Terminals',
    shortTitle: 'Terminals',
    category: 'payments',
    tagline: 'Take card, contactless and mobile wallet payments anywhere.',
    description:
      'Countertop, portable and mobile terminals from leading manufacturers, configured for your business and delivered ready to trade.',
    features: ['Contactless & chip-and-PIN', 'Apple Pay / Google Pay', '4G + Wi-Fi capable', 'Next-day delivery'],
    Icon: CreditCard,
    bullets: [
      'Countertop, portable & fully-mobile options',
      'Next-day delivery on stocked models',
      'Full PCI-DSS compliant — handled for you',
      'UK-based support team you can actually reach',
    ],
  },
  {
    slug: 'virtual-terminal',
    title: 'Virtual Terminal',
    shortTitle: 'Virtual Terminal',
    category: 'payments',
    tagline: 'Take MOTO and phone payments from a web browser.',
    description:
      'Securely take card details over the phone or by mail order from any computer, with full reporting and refunds in one dashboard.',
    features: ['MOTO ready', 'Multi-user access', 'Recurring billing', 'Live reporting'],
    Icon: Globe,
    bullets: [
      'No hardware required — log in and take payments',
      'Recurring payment plans for subscription businesses',
      'Multi-user access with role-based permissions',
      'Hosted payment pages for compliance off-load',
    ],
  },
  {
    slug: 'epos-systems',
    title: 'E-POS Systems',
    shortTitle: 'E-POS',
    category: 'payments',
    tagline: 'Smart till systems with payments built in.',
    description:
      'Stock control, staff management, table service, kitchen printing — and payments integrated end-to-end. Built for hospitality and retail.',
    features: ['Hospitality + retail modes', 'Stock & staff control', 'Cloud backup', 'Integrated payments'],
    Icon: Monitor,
    bullets: [
      'Cloud-based — your data goes with you between sites',
      'Built-in payment integration, no extra device',
      'Detailed sales reporting and Z-reads',
      'Hardware + software + installation as one package',
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Payments',
    shortTitle: 'E-Commerce',
    category: 'payments',
    tagline: 'Accept online payments without re-platforming.',
    description:
      'Drop-in checkout for Shopify, WooCommerce, Magento and bespoke sites — with 3-D Secure, Apple Pay and Google Pay configured for you.',
    features: ['Shopify / WooCommerce', 'Hosted & embedded checkout', 'Apple & Google Pay', '3-D Secure'],
    Icon: ShoppingCart,
    bullets: [
      'Plug-in gateways for all major platforms',
      'Hosted checkout for low-PCI scope',
      'Apple Pay & Google Pay enabled out-the-box',
      'Recurring billing & subscription support',
    ],
  },
  {
    slug: 'cash-advance',
    title: 'Cash Advance',
    shortTitle: 'Cash Advance',
    category: 'finance',
    tagline: 'Funding that pays back as you trade.',
    description:
      'Repayments come out of your card takings — so when business is quieter, you pay less. No fixed monthly payment, no surprises.',
    features: ['No fixed monthly cost', 'Decisions in 24h', 'Up to £500k', 'Repay from card sales'],
    Icon: Banknote,
    bullets: [
      'Eligibility decision within 24 hours',
      'Up to £500,000 advanced against future card sales',
      'Repayment scales with your takings — no fixed schedule',
      'Top up once 60% repaid',
    ],
  },
  {
    slug: 'term-loans',
    title: 'Term Loans',
    shortTitle: 'Term Loans',
    category: 'finance',
    tagline: 'Fixed-rate business loans without the bank.',
    description:
      'Predictable monthly payments and rates fixed for the term. Up to 5 years, lent against business performance not personal credit.',
    features: ['Up to £500k', 'Terms 6–60 months', 'Fixed rate', 'No early-repayment fee'],
    Icon: Briefcase,
    bullets: [
      'Fixed monthly repayments for the full term',
      'Decision in 48 hours, funds in 7 days',
      'Use it for equipment, expansion, refurbishment or stock',
      'No fee for repaying early',
    ],
  },
  {
    slug: 'revenue-based-loans',
    title: 'Revenue-Based Loans',
    shortTitle: 'Revenue Loans',
    category: 'finance',
    tagline: 'Loans that flex with your monthly revenue.',
    description:
      'Repayments are a percentage of monthly revenue — predictable, but proportionate. Built for seasonal businesses and growth-stage companies.',
    features: ['% of monthly revenue', 'Up to £1m', 'No equity given up', 'Seasonal-friendly'],
    Icon: TrendingUp,
    bullets: [
      'Repayments scale with monthly turnover',
      'No dilution — you keep 100% ownership',
      'Up to £1,000,000 available',
      'Ideal for hospitality, retail and seasonal trade',
    ],
  },
]

export const productBySlug = (slug?: string) =>
  PRODUCTS.find((p) => p.slug === slug)
