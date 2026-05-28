export type ProductCategory = 'payments' | 'finance'

export interface Product {
  slug: string
  title: string
  shortTitle: string
  category: ProductCategory
  tagline: string
  description: string
  features: string[]
  image: string
  bullets: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'payment-terminals',
    title: 'Payment Terminals',
    shortTitle: 'Terminals',
    category: 'payments',
    tagline: 'The latest payment technology — efficient and cost-effective.',
    description:
      'Take card, contactless and mobile wallet payments anywhere you trade. Desktop, Wi-Fi and fully-mobile GPRS terminals — bespoke pricing, set up by you, supported by a UK team.',
    features: ['Built-in GPRS SIM card', 'All-day battery life', 'Easy plug-and-pay setup', 'Fast thermal printer'],
    image: '/products/terminals.png',
    bullets: [
      'Desktop, Wi-Fi and GPRS options — pick by how you trade',
      'Built-in SIM connects to the strongest mobile network',
      'Set the machine up yourself — start taking payments same day',
      'Three layers of support including 24-hour helpline',
    ],
  },
  {
    slug: 'virtual-terminal',
    title: 'Virtual Terminal',
    shortTitle: 'Virtual Terminal',
    category: 'payments',
    tagline: 'Turn any internet-connected device into a payment terminal.',
    description:
      'Securely take card payments from any browser — for phone orders, subscriptions, e-commerce or professional services. No hardware required.',
    features: ['MOTO & phone orders', 'Subscription billing', 'Robust encryption', 'Works on any device'],
    image: '/products/virtual-terminal.webp',
    bullets: [
      'Take payments by phone, email or MOTO from any computer',
      'Recurring billing built in for subscription businesses',
      'Industry-standard encryption and PCI-DSS compliance',
      'Process transactions anytime, anywhere',
    ],
  },
  {
    slug: 'epos-systems',
    title: 'E-POS Systems',
    shortTitle: 'E-POS',
    category: 'payments',
    tagline: 'Bespoke point-of-sale, designed around how you trade.',
    description:
      'Cloud-based EPOS for retail and hospitality — stock control, staff scheduling, table service, online ordering and integrated payments in one tidy system.',
    features: ['Cloud-based management', 'Stock & staff control', 'Online / QR / app orders', 'Integrated payments'],
    image: '/products/epos.webp',
    bullets: [
      'Marketing, loyalty and customer database tools built in',
      'Seating plans, split bills and delivery-zone management',
      'Modular and scalable — start small, add tills as you grow',
      'Full reporting suite with accounting-software integration',
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Payment Solutions',
    shortTitle: 'E-Commerce',
    category: 'payments',
    tagline: 'Accept online payments securely.',
    description:
      'Over 105 strategic partners and integrations — WooCommerce, PrestaShop, Opayo, WIX, Magento, WordPress. Slot us into your existing site, or take our MID-only service to cut transaction fees.',
    features: ['WooCommerce / Magento', 'Shopify / WIX / WordPress', 'MID-only option', 'Hosted & embedded'],
    image: '/products/ecommerce.png',
    bullets: [
      'Plug-in gateways for every major e-commerce platform',
      'Keep your current site — we optimise the checkout layer',
      'MID-only service available to reduce monthly transaction fees',
      'Apple Pay, Google Pay and 3-D Secure configured for you',
    ],
  },
  {
    slug: 'cash-advance',
    title: 'Cash Advance',
    shortTitle: 'Cash Advance',
    category: 'finance',
    tagline: 'Flexible finance for businesses accepting card payments.',
    description:
      'Secure up to 240% of your monthly card turnover, paid back as a percentage of each transaction. No APR. No fixed term. Pay it back as you earn.',
    features: ['Up to 240% of monthly turnover', '90% approval rate', 'No APR or hidden fees', 'No fixed term'],
    image: '/products/cash-advance.png',
    bullets: [
      'Simple application — 90% approval rate',
      'One all-inclusive cost that never changes',
      'No security, business plans or admin fees',
      'Dedicated relationship manager from day one',
    ],
  },
  {
    slug: 'term-loans',
    title: 'Term Loans',
    shortTitle: 'Term Loans',
    category: 'finance',
    tagline: 'Competitive term loans, designed to meet your unique needs.',
    description:
      'A lump sum of capital with fixed monthly repayments and competitive rates. For equipment, expansion, hiring, refurbishment or debt consolidation.',
    features: ['Competitive interest rates', 'Quick & easy application', 'No hidden fees', 'Flexible loan amounts'],
    image: '/products/term-loans.png',
    bullets: [
      'Borrow what you need — equipment, expansion, unexpected costs',
      'Affordable rates to minimise financing costs',
      'Apply online or with a specialist — fast funding',
      'Transparent pricing, you always know what to expect',
    ],
  },
  {
    slug: 'revenue-based-loans',
    title: 'Revenue-Based Loans',
    shortTitle: 'Revenue Loans',
    category: 'finance',
    tagline: 'Loans that flex with your monthly revenue.',
    description:
      'Modern financing where repayments adjust to your income — affordable in quieter months, faster when business is good. Keep 100% ownership.',
    features: ['% of monthly revenue', 'No fixed monthly cost', '100% ownership retained', 'Quick capital access'],
    image: '/products/revenue-loans.png',
    bullets: [
      'Repayments scale with your monthly turnover',
      'No fixed monthly cost — set percentage of revenue',
      'Keep 100% ownership — no dilution, no equity',
      'Built for e-commerce, service and seasonal businesses',
    ],
  },
]

export const productBySlug = (slug?: string) =>
  PRODUCTS.find((p) => p.slug === slug)
