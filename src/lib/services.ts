import {
  // pay
  CreditCard, MonitorSmartphone, Monitor, Link2, QrCode, ShoppingCart, ShieldCheck, ArrowLeftRight,
  // capital
  Banknote, FileText, TrendingUp, HandCoins, Truck, Receipt, Building2, Construction,
  // utilities
  Zap, Recycle, Droplet, RadioTower, Wifi, PhoneCall,
  // technology
  Globe, Smartphone, Code2, BrainCircuit, Workflow, Users, Lock, Cloud, PieChart,
  Database, LifeBuoy, Store, Megaphone, Rocket, PenTool,
  type LucideIcon,
} from 'lucide-react'
import { SERVICE_DETAILS } from './serviceDetails'

export type ServiceCategory = 'pay' | 'capital' | 'utilities' | 'technology'

export type ServiceSection =
  | { kind: 'prose'; eyebrow?: string; heading: string; body: string }
  | { kind: 'cards'; eyebrow?: string; heading: string; items: { title: string; desc: string }[] }
  | { kind: 'list'; eyebrow?: string; heading: string; items: string[] }
  | { kind: 'stats'; eyebrow?: string; heading: string; items: { value: string; label: string }[] }
  | { kind: 'faq'; eyebrow?: string; heading: string; items: { q: string; a: string }[] }
  | { kind: 'steps'; eyebrow?: string; heading: string; items: { title: string; desc: string }[] }
  | { kind: 'terms'; eyebrow?: string; heading?: string; body: string }

export interface Service {
  slug: string
  title: string
  shortTitle: string
  category: ServiceCategory
  tagline: string
  Icon: LucideIcon
  /** Detail-page content. Present only on the services with a dedicated page. */
  description?: string
  features?: string[]
  image?: string
  sections?: ServiceSection[]
}

/** True when a service has a dedicated /services/<slug> detail page. */
export const hasDetail = (s: Service) => Array.isArray(s.sections) && s.sections.length > 0

export const SERVICES: Service[] = [
  // ── VASTUS PAY ──────────────────────────────────────────────────────────
  {
    slug: 'switch-and-save',
    title: 'Switch & Save',
    shortTitle: 'switching',
    category: 'pay',
    tagline: "Tied into a card payments contract? When you switch to Vastus, we'll help cover the cost of leaving.",
    Icon: ArrowLeftRight,
    description:
      "Don't let an early termination fee stand in your way. We'll reimburse the exit fee from your existing agreement — up to £100 for every year you sign up with Vastus. No eligibility criteria, open to every merchant who switches.",
    features: ['Up to £100 per contract year', 'No eligibility criteria', 'Open to every merchant', 'Paid by BACS'],
    sections: [
      {
        kind: 'prose',
        eyebrow: 'The offer',
        heading: "Switch to Vastus and we'll cover your exit costs",
        body: "Tied into a card payments contract you want to leave? Don't let an early termination fee stand in your way. When you move your card payments to Vastus, we'll help cover the cost of leaving your current provider. It's our way of making the switch as smooth — and as cost-free — as possible.",
      },
      {
        kind: 'cards',
        eyebrow: 'How it works',
        heading: 'The longer you commit, the more we cover',
        items: [
          { title: 'Up to £100 per year', desc: "We'll reimburse the termination fee from your existing agreement, up to £100 for each year you sign up with us." },
          { title: 'It scales with your term', desc: "Sign a 1-year contract and we'll cover up to £100. Sign for 2 years and that rises to £200, for 3 years up to £300 — and so on." },
          { title: 'No eligibility criteria', desc: 'There are no hoops to jump through. The offer is open to every merchant who switches their card payments to Vastus.' },
        ],
      },
      {
        kind: 'steps',
        eyebrow: 'How to claim',
        heading: 'Three simple steps',
        items: [
          { title: 'Sign up with Vastus', desc: 'Move your card payments to Vastus and choose your contract length.' },
          { title: 'Send us your proof', desc: "Send proof of the termination fee charged by your previous provider — such as your final bill or termination notice. You'll need to raise this within 6 months of signing with Vastus." },
          { title: 'Get reimbursed', desc: "Once you've been transacting with Vastus for 90 days, we'll pay your reimbursement by BACS directly to your business bank account." },
        ],
      },
      {
        kind: 'terms',
        heading: 'Terms apply',
        body: 'Reimbursement is capped at £100 per year of your Vastus contract term and cannot exceed the actual termination fee you were charged. Proof of the fee must be submitted within 6 months of signing. Payment is made by BACS to your registered business bank account after 90 days of active transacting with Vastus.',
      },
    ],
  },
  {
    slug: 'payment-terminals',
    title: 'Payment Terminals',
    shortTitle: 'Terminals',
    category: 'pay',
    tagline: 'The latest payment technology — efficient and cost-effective.',
    Icon: CreditCard,
    description:
      'Take card, contactless and mobile wallet payments anywhere you trade. Desktop, Wi-Fi and fully-mobile GPRS terminals — bespoke pricing, set up by you, supported by a UK team.',
    features: ['Built-in GPRS SIM card', 'All-day battery life', 'Easy plug-and-pay setup', 'Fast thermal printer'],
    image: '/products/terminals.webp',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Technology',
        heading: 'The latest payment technology',
        body: 'We guarantee we are always up to date with the latest payment methods, ensuring that our clients have the ability to take all types of payments and are never unable to process a transaction. We understand every business is different and our bespoke pricing plans are tailor-made to ensure that card payments are not just efficient but cost-effective.',
      },
      {
        kind: 'cards',
        heading: 'Made for everywhere you trade',
        items: [
          { title: 'Built-in GPRS SIM card', desc: 'The SIM card connects to the strongest mobile network, so you can take payments anywhere.' },
          { title: 'Long-lasting battery life', desc: 'The battery lasts a day, so you can charge it overnight. In-car chargers are also available.' },
          { title: 'Easy to set up', desc: 'You can set the machine up yourself, and start taking payments as soon as it arrives.' },
          { title: 'Fast thermal printer', desc: 'Print a quick receipt for you and your customer with its fast integrated printer.' },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'How they work',
        heading: 'Three connection types',
        items: [
          { title: 'Desktop', desc: 'Terminal connected via ethernet to your router — not mobile, and perfect for countertop service.' },
          { title: 'Wi-Fi', desc: 'Connected via Wi-Fi, mobile within range, allowing table service with a range of movement.' },
          { title: 'GPRS', desc: 'Connected via a roaming SIM that connects to any available mobile network — fully mobile around the UK, perfect for clients constantly on the move or who have had Wi-Fi connectivity issues.' },
        ],
      },
      {
        kind: 'prose',
        eyebrow: 'Support',
        heading: 'Dedicated support team',
        body: 'We understand that having a good support network is fundamental, which is why we supply a personalised service — all of our clients have a dedicated account manager. One element of support is never enough, so this is backed up by a dedicated team for all customer service and technical issues. Every business is different and requires different support at different times, so all of our clients have a 24-hour helpline facilitated by our strategic partner. Three layers of support, supporting every business, 24 hours a day.',
      },
    ],
  },
  {
    slug: 'virtual-terminal',
    title: 'Virtual Terminals',
    shortTitle: 'Virtual Terminal',
    category: 'pay',
    tagline: 'Turn any internet-connected device into a payment terminal.',
    Icon: MonitorSmartphone,
    description:
      'Securely take card payments from any browser — for phone orders, subscriptions, e-commerce or professional services. No hardware required.',
    features: ['MOTO & phone orders', 'Subscription billing', 'Robust encryption', 'Works on any device'],
    image: '/products/virtual-terminal.webp',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'One platform, any device',
        body: 'A virtual terminal stands as an online platform enabling businesses to securely and efficiently process payments without the need for physical card terminals.',
      },
      {
        kind: 'cards',
        eyebrow: 'Use cases',
        heading: 'Built for how you sell',
        items: [
          { title: 'E-commerce retailers', desc: 'Seamlessly integrate payments into your online store, providing customers with a convenient checkout experience.' },
          { title: 'Phone order businesses', desc: 'Easily process payments for orders taken over the phone, catering to customers who prefer this method.' },
          { title: 'Subscription services', desc: 'Manage recurring payments for subscription-based businesses effortlessly, enhancing customer retention.' },
          { title: 'Professional services', desc: 'Streamline invoicing and payment collection for consultants, freelancers, and other service-based businesses.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Why a virtual terminal',
        items: [
          { title: 'Versatility', desc: 'Accept payments from various sources, including credit and debit cards, directly through your computer or mobile device.' },
          { title: 'Security', desc: 'Ensure the safety of sensitive customer data with robust encryption and compliance with industry security standards.' },
          { title: 'Convenience', desc: 'Enjoy the flexibility to process transactions anytime, anywhere, streamlining your payment workflows.' },
        ],
      },
      {
        kind: 'stats',
        eyebrow: 'By the numbers',
        heading: 'The impact',
        items: [
          { value: '20%', label: 'Increase in payment processing efficiency reported by businesses adopting virtual terminals.' },
          { value: '7.8%', label: 'Projected CAGR of the global virtual terminal market from 2022 to 2027.' },
          { value: '15%', label: 'Boost in customer satisfaction for online retailers using virtual terminals.' },
        ],
      },
    ],
  },
  {
    slug: 'epos-systems',
    title: 'EPOS Systems',
    shortTitle: 'E-POS',
    category: 'pay',
    tagline: 'Bespoke point-of-sale, designed around how you trade.',
    Icon: Monitor,
    description:
      'Cloud-based EPOS for retail and hospitality — stock control, staff scheduling, table service, online ordering and integrated payments in one tidy system.',
    features: ['Cloud-based management', 'Stock & staff control', 'Online / QR / app orders', 'Integrated payments'],
    image: '/products/epos.webp',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'Electronic point of sale solutions',
        body: 'Selecting the right Electronic Point of Sale (EPOS) provider is a crucial decision for businesses seeking smooth transactions and efficient operations. At Vastus, we stand out as a paragon of reliability, innovation, and bespoke solutions designed to meet the distinctive needs of businesses across diverse sectors.',
      },
      {
        kind: 'list',
        eyebrow: 'Capabilities',
        heading: 'Everything in one system',
        items: [
          'Manage everything via the cloud',
          'Powerful marketing & loyalty capabilities',
          'Seating plans, split bills & delivery zones',
          'Handles all online, QR & app orders',
          'Modular and scalable to suit your business',
          'Staffing and scheduling tools',
          'Modern and user-friendly',
          'Complete stock control',
          'Full reporting suite',
          'Accounting integration',
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'Why Vastus',
        heading: 'Reliability, innovation, support',
        items: [
          { title: 'Versatility', desc: 'We offer an array of options, ensuring that our systems can be tailored to suit the specific requirements of businesses across various sectors.' },
          { title: 'Technology', desc: 'Stay ahead in the competitive landscape with our cutting-edge EPOS technology. Our solutions are crafted to deliver not just transactions but experiences.' },
          { title: 'Support', desc: 'Our dedicated support and customer service teams are here to assist you every step of the way.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Why choose us',
        items: [
          { title: 'Industry expertise', desc: 'With experience across a myriad of sectors, including retail, hospitality, healthcare and more, our team possesses industry-specific expertise.' },
          { title: 'Security', desc: 'Our EPOS systems incorporate state-of-the-art security features, providing you with peace of mind.' },
          { title: 'Scalability', desc: 'Our solutions are designed with scalability in mind, ensuring they can grow and adapt alongside your business.' },
        ],
      },
    ],
  },
  {
    slug: 'pay-by-link',
    title: 'Pay by Link',
    shortTitle: 'Pay by Link',
    category: 'pay',
    tagline: 'Send a secure payment link and get paid in seconds.',
    Icon: Link2,
  },
  {
    slug: 'qr-payments',
    title: 'QR Payments',
    shortTitle: 'QR Payments',
    category: 'pay',
    tagline: 'Let customers scan and pay from their own phone.',
    Icon: QrCode,
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce Payments',
    shortTitle: 'E-Commerce',
    category: 'pay',
    tagline: 'Accept online payments securely.',
    Icon: ShoppingCart,
    description:
      'Over 105 strategic partners and integrations — WooCommerce, PrestaShop, Opayo, WIX, Magento, WordPress. Slot us into your existing site, or take our MID-only service to cut transaction fees.',
    features: ['WooCommerce / Magento', 'Shopify / WIX / WordPress', 'MID-only option', 'Hosted & embedded'],
    image: '/products/ecommerce.png',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'Your trusted e-commerce partner',
        body: "At Vastus, we're your trusted partner in the ever-evolving world of e-commerce. With a network boasting over 105 strategic partners and integrations, including industry leaders like WooCommerce, PrestaShop, Opayo, WIX, Magento and WordPress, we ensure your payment processes are seamlessly integrated with the best names in the business.",
      },
      {
        kind: 'cards',
        heading: 'Why choose Vastus',
        items: [
          { title: 'Extensive partnerships', desc: 'Benefit from our vast network of over 105 strategic partners, offering you a wide range of options for your e-commerce platform.' },
          { title: 'Top integrations', desc: 'Seamlessly integrate with well-known platforms like WooCommerce, PrestaShop, Opayo, WIX and WordPress, ensuring compatibility and efficiency.' },
          { title: 'Website layout optimisation', desc: 'Happy with your current website layout? We work with you to enhance and optimise your existing design for a seamless user experience.' },
          { title: 'MID-only service', desc: 'Explore our MID-only service, designed to reduce your monthly transaction fees while maintaining the highest standards of security and efficiency.' },
        ],
      },
      {
        kind: 'list',
        eyebrow: 'Integrations',
        heading: 'Works with your platform',
        items: ['WooCommerce', 'PrestaShop', 'Opayo', 'WIX', 'Magento', 'WordPress'],
      },
    ],
  },
  {
    slug: 'secure-payments',
    title: 'Secure Payments',
    shortTitle: 'Secure Payments',
    category: 'pay',
    tagline: 'PCI-compliant processing with fraud protection built in.',
    Icon: ShieldCheck,
  },

  // ── VASTUS CAPITAL ──────────────────────────────────────────────────────
  {
    slug: 'cash-advance',
    title: 'Cash Advance',
    shortTitle: 'Cash Advance',
    category: 'capital',
    tagline: 'Flexible finance for businesses accepting card payments.',
    Icon: Banknote,
    description:
      'Secure up to 240% of your monthly card turnover, paid back as a percentage of each transaction. No APR. No fixed term. Pay it back as you earn.',
    features: ['Up to 240% of monthly turnover', '90% approval rate', 'No APR or hidden fees', 'No fixed term'],
    image: '/products/cash-advance.png',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'No APR — pay it back as you earn',
        body: 'A business cash advance is a flexible finance option for businesses accepting card payments. This allows you to secure up to 240% of your monthly card turnover, which is paid back as a percentage of each transaction. No APR. No time frame — just pay it back when you earn.',
      },
      {
        kind: 'list',
        eyebrow: 'What you get',
        heading: 'Simple, all-inclusive funding',
        items: [
          'Simple application process',
          '90% approval rate',
          'Dedicated relationship manager',
          'No security or business plans required',
          'One simple all-inclusive cost that never changes',
          'No admin fees, APRs and hidden extras',
          'No fixed term or fixed monthly payments',
        ],
      },
      {
        kind: 'faq',
        eyebrow: 'Open Banking',
        heading: 'Open Banking explained',
        items: [
          { q: 'What is Open Banking?', a: "Open banking allows financial facilitators to access customers' transaction history and volumes by connecting to their bank accounts. It enables data transfer only, with no deposit or withdrawal of funds." },
          { q: 'Is Open Banking safe?', a: 'Yes, consumers are protected. Your bank safeguards you against regulated open banking providers, which are listed on the FCA register and the open banking directory.' },
          { q: 'Are you protected?', a: 'Yes. We pride ourselves in providing safe and secure facilities for our clients, from transferring data to depositing funds. All open banking providers we use are FCA regulated and in the open banking directory, giving every consumer not just confidence but protection in every aspect.' },
        ],
      },
    ],
  },
  {
    slug: 'term-loans',
    title: 'Term Loans',
    shortTitle: 'Term Loans',
    category: 'capital',
    tagline: 'Competitive term loans, designed to meet your unique needs.',
    Icon: FileText,
    description:
      'A lump sum of capital with fixed monthly repayments and competitive rates. For equipment, expansion, hiring, refurbishment or debt consolidation.',
    features: ['Competitive interest rates', 'Quick & easy application', 'No hidden fees', 'Flexible loan amounts'],
    image: '/products/term-loans.png',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'Competitive term loans',
        body: 'Term loans are a type of business financing that provides a lump sum of capital, which is repaid over a fixed period with regular monthly payments.',
      },
      {
        kind: 'cards',
        heading: 'Why our term loans',
        items: [
          { title: 'Flexible loan amounts', desc: "Borrow the right amount for your business needs, whether you're investing in new equipment, expanding your operations, or covering unforeseen expenses." },
          { title: 'Competitive interest rates', desc: 'We offer affordable rates to keep your financing costs manageable.' },
          { title: 'Quick and easy application', desc: 'Apply online or speak with our financial specialists to get your loan processed quickly and efficiently.' },
          { title: 'No hidden fees', desc: "Transparency is our priority. You'll always know what to expect with clear terms and straightforward repayment options." },
          { title: 'Support for growth', desc: 'Use your term loan to fuel growth, from hiring new staff to launching new products or consolidating high-interest debts.' },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'Why choose Vastus',
        heading: 'Funding, handled',
        items: [
          { title: 'Fast funding', desc: 'Get approved quickly and access your funds fast so you can keep your business moving forward.' },
          { title: 'Expert guidance', desc: 'Our financial specialists are here to help you navigate the loan process and find the best options for your goals.' },
          { title: 'Client-focused service', desc: 'Built on a foundation of putting our clients first, we offer personalised support and advice tailored to your business.' },
        ],
      },
    ],
  },
  {
    slug: 'revenue-based-loans',
    title: 'Revenue-Based Finance',
    shortTitle: 'Revenue Loans',
    category: 'capital',
    tagline: 'Loans that flex with your monthly revenue.',
    Icon: TrendingUp,
    description:
      'Modern financing where repayments adjust to your income — affordable in quieter months, faster when business is good. Keep 100% ownership.',
    features: ['% of monthly revenue', 'No fixed monthly cost', '100% ownership retained', 'Quick capital access'],
    image: '/products/revenue-loans.png',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Overview',
        heading: 'What are revenue-based loans?',
        body: "Revenue-based loans are a modern financing solution where repayments are tied to your business's revenue. Unlike conventional loans that require fixed monthly payments, our repayment model adjusts to your income, ensuring affordability and peace of mind, even during slower months.",
      },
      {
        kind: 'cards',
        eyebrow: 'Ideal for',
        heading: 'Built for businesses like yours',
        items: [
          { title: 'E-commerce companies', desc: 'Fund inventory purchases and marketing campaigns to drive growth.' },
          { title: 'Service-based businesses', desc: 'Smooth out cash flow to cover expenses or expand your services.' },
          { title: 'Seasonal businesses', desc: 'Manage the ups and downs of seasonal revenue fluctuations with ease.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Key benefits',
        items: [
          { title: 'Flexible repayment plans', desc: 'Payments fluctuate based on your business revenue, allowing you to better manage cash flow.' },
          { title: 'Quick capital access', desc: 'We simplify the approval process, helping you get the funds you need — fast.' },
          { title: 'No fixed monthly payments', desc: 'Only pay a set percentage of your revenue, making payments easier to handle during slow periods.' },
          { title: 'Ownership retained', desc: 'Keep 100% ownership of your business while securing the funding you need to expand and grow.' },
        ],
      },
    ],
  },
  {
    slug: 'business-loans',
    title: 'Business Loans',
    shortTitle: 'Business Loans',
    category: 'capital',
    tagline: 'Straightforward funding to cover costs or invest in growth.',
    Icon: HandCoins,
  },
  {
    slug: 'asset-finance',
    title: 'Asset Finance',
    shortTitle: 'Asset Finance',
    category: 'capital',
    tagline: 'Spread the cost of vehicles, equipment and machinery.',
    Icon: Truck,
  },
  {
    slug: 'invoice-finance',
    title: 'Invoice Finance',
    shortTitle: 'Invoice Finance',
    category: 'capital',
    tagline: 'Unlock the cash tied up in your unpaid invoices.',
    Icon: Receipt,
  },
  {
    slug: 'commercial-mortgages',
    title: 'Commercial Mortgages',
    shortTitle: 'Commercial Mortgages',
    category: 'capital',
    tagline: 'Finance to buy, refinance or develop business premises.',
    Icon: Building2,
  },
  {
    slug: 'development-finance',
    title: 'Development Finance',
    shortTitle: 'Development Finance',
    category: 'capital',
    tagline: 'Short-term funding for property and construction projects.',
    Icon: Construction,
  },

  // ── VASTUS UTILITIES ────────────────────────────────────────────────────
  {
    slug: 'gas-electricity',
    title: 'Gas & Electricity',
    shortTitle: 'Gas & Electricity',
    category: 'utilities',
    tagline: 'Compare and switch to better business energy rates.',
    Icon: Zap,
  },
  {
    slug: 'business-waste',
    title: 'Business Waste',
    shortTitle: 'Business Waste',
    category: 'utilities',
    tagline: 'Reliable, compliant waste collection and recycling.',
    Icon: Recycle,
  },
  {
    slug: 'water',
    title: 'Water',
    shortTitle: 'Water',
    category: 'utilities',
    tagline: 'Lower your water bills with a better business supplier.',
    Icon: Droplet,
  },
  {
    slug: 'telecoms',
    title: 'Telecoms',
    shortTitle: 'Telecoms',
    category: 'utilities',
    tagline: 'Mobile and landline plans built for business.',
    Icon: RadioTower,
  },
  {
    slug: 'broadband',
    title: 'Broadband',
    shortTitle: 'Broadband',
    category: 'utilities',
    tagline: 'Fast, dependable connectivity wherever you trade.',
    Icon: Wifi,
  },
  {
    slug: 'voip-phone-systems',
    title: 'VoIP & Phone Systems',
    shortTitle: 'VoIP & Phones',
    category: 'utilities',
    tagline: 'Modern cloud phone systems that scale with you.',
    Icon: PhoneCall,
  },

  // ── VASTUS TECHNOLOGY ───────────────────────────────────────────────────
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Websites',
    category: 'technology',
    tagline: 'High-performance, conversion-focused sites built to modern standards.',
    Icon: Globe,
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    category: 'technology',
    tagline: 'Native and cross-platform apps for iOS and Android.',
    Icon: Smartphone,
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    shortTitle: 'Software',
    category: 'technology',
    tagline: 'Custom software, integrations and automation for your operations.',
    Icon: Code2,
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    shortTitle: 'AI Solutions',
    category: 'technology',
    tagline: 'Put AI to work — assistants, insights and smart automation.',
    Icon: BrainCircuit,
  },
  {
    slug: 'automation-solutions',
    title: 'Automation Solutions',
    shortTitle: 'Automation',
    category: 'technology',
    tagline: 'Streamline workflows and remove manual, repetitive tasks.',
    Icon: Workflow,
  },
  {
    slug: 'crm-solutions',
    title: 'CRM Solutions',
    shortTitle: 'CRM',
    category: 'technology',
    tagline: 'Manage customers, pipeline and relationships in one place.',
    Icon: Users,
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    shortTitle: 'Cyber Security',
    category: 'technology',
    tagline: 'Protect your business with layered, modern security.',
    Icon: Lock,
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortTitle: 'Cloud',
    category: 'technology',
    tagline: 'Migrate, host and scale on reliable cloud infrastructure.',
    Icon: Cloud,
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    shortTitle: 'BI',
    category: 'technology',
    tagline: 'Turn your data into dashboards and decisions.',
    Icon: PieChart,
  },
  {
    slug: 'data-solutions',
    title: 'Data Solutions',
    shortTitle: 'Data',
    category: 'technology',
    tagline: 'Storage, pipelines and analytics built around your data.',
    Icon: Database,
  },
  {
    slug: 'it-support-managed-services',
    title: 'IT Support & Managed Services',
    shortTitle: 'IT Support',
    category: 'technology',
    tagline: 'Proactive IT support that keeps you running.',
    Icon: LifeBuoy,
  },
  {
    slug: 'ecommerce-solutions',
    title: 'Ecommerce Solutions',
    shortTitle: 'Ecommerce',
    category: 'technology',
    tagline: 'Online stores built to sell and easy to manage.',
    Icon: Store,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Marketing',
    category: 'technology',
    tagline: 'SEO, paid media and content that grows your pipeline.',
    Icon: Megaphone,
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortTitle: 'Transformation',
    category: 'technology',
    tagline: 'Modernise your operations end to end.',
    Icon: Rocket,
  },
  {
    slug: 'other-digital-services',
    title: 'Other Digital Services',
    shortTitle: 'Other Digital',
    category: 'technology',
    tagline: 'Branding, hosting, SEO and the digital essentials to grow online.',
    Icon: PenTool,
  },
]

// Merge auto-generated detail-page content into the stub services.
// Services that already define inline `sections` are left untouched.
for (const s of SERVICES) {
  const detail = SERVICE_DETAILS[s.slug]
  if (detail && !hasDetail(s)) {
    s.description = detail.description
    s.features = detail.features
    s.sections = detail.sections
  }
}

export const serviceBySlug = (slug?: string) => SERVICES.find((s) => s.slug === slug)

export const servicesByCategory = (category: ServiceCategory) =>
  SERVICES.filter((s) => s.category === category)
