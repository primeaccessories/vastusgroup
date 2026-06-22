export interface Testimonial {
  slug: string
  business: string
  name: string
  role: string
  logo: string
  shortQuote: string
  quote: string
  rating: number
  logoBg?: 'dark'
  imagePos?: string
  video?: {
    mp4: string
    poster?: string
    channelUrl?: string
  }
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: 'elite-competitions',
    business: 'Elite Competitions',
    name: 'Alex Beckett',
    role: 'Founder & CEO',
    logo: '/testimonials/elite-competitions.svg',
    logoBg: 'dark',
    shortQuote:
      'Watch Alex Beckett share why one of the UK’s biggest online competitions brands runs on Vastus.',
    quote:
      'Hear it straight from Alex — Founder of Elite Competitions, the Blackpool-based online competitions company that has paid out more than £100 million in prizes since 2015 — on what working with Vastus looks like day-to-day.',
    rating: 5,
    video: {
      mp4: '/testimonials/alex-elite.mp4',
      poster: '/testimonials/alex-elite-poster.jpg',
      channelUrl: 'https://www.youtube.com/@JACKFSAYLESS',
    },
  },
  {
    slug: 'the-vine-inn',
    business: 'The Vine Inn',
    name: 'Simon Cant & Liam White',
    role: 'Owners',
    logo: '/testimonials/vineinnedit.png',
    imagePos: 'object-top',
    shortQuote:
      "Vastus's adeptness at significantly reducing card processing fees has been a game-changer for our hospitality business.",
    quote:
      "I am immensely grateful to the exceptional team at Vastus for their unwavering support, particularly within the dynamic realm of the hospitality industry. Their invaluable contributions have not only streamlined my business operations but have also propelled my ventures towards unprecedented growth and success. One of the most striking facets of Vastus' service is their adeptness at significantly reducing card processing fees, a critical aspect in the hospitality sector where every penny counts. By implementing their innovative solutions, I've witnessed a marked improvement in my bottom line, allowing me to allocate resources more efficiently towards enhancing the overall guest experience. Moreover, the expedited settlements provided by Vastus have been instrumental in maintaining the financial health of my establishments. In an industry where cash flow is paramount, the ability to access funds swiftly has been a game-changer, enabling me to seize opportunities and navigate through challenges with confidence. Beyond their prowess in financial management, Vastus has also played a pivotal role in fuelling the expansion of my hospitality portfolio. Through their comprehensive funding assistance, I've been able to embark on ambitious projects and undertake strategic initiatives that have further solidified my presence in the market. I cannot overstate the dedication and diligence demonstrated by Dan and the entire team at Vastus. Their commitment to excellence is palpable in every interaction, as they consistently go above and beyond to address any concerns or inquiries promptly and proficiently.",
    rating: 5,
  },
  {
    slug: 'fy6',
    business: 'FY6',
    name: "Jennifer O'Neill",
    role: 'Owner',
    logo: '/testimonials/fy6edit.png',
    shortQuote:
      'Vastus not only became a regular fixture at our bar but played a pivotal role in significantly reducing our operational costs.',
    quote:
      "When Vastus set up their first office just across the street from our bar, we had no idea how much of a positive impact they would have on our business. As a newcomer to the neighbourhood, Vastus not only became a regular fixture at our establishment but also played a pivotal role in significantly reducing our operational costs. From the very beginning, the support and assistance we've received from Vastus have been exceptional. They've gone above and beyond in their service, making it clear why they're highly regarded in our community. Their team isn't just a service provider; they've become close friends who genuinely care about our success. Their commitment has been so impactful that we've recommended Vastus to numerous other local business owners. The feedback has been universally positive, with many echoing our sentiment that Vastus always exceeds expectations.",
    rating: 5,
  },
  {
    slug: '100-muscle-fitness',
    business: '100% Muscle Fitness',
    name: 'Karl Holmes',
    role: 'Owner',
    logo: '/testimonials/musclefitness.png',
    shortQuote:
      "I wouldn't dream of seeking services elsewhere. Vastus's personal touch and commitment have kept me loyal for years.",
    quote:
      "Without a doubt, I can't find a single fault with the exceptional team at Vastus. From the very beginning, when I first engaged with them as a new company, their dedication to personalised service has been unwavering. It's this personal touch and commitment to excellence that has kept me loyal to Vastus over the years. I wouldn't dream of seeking services elsewhere. Thank you, Vastus, for consistently going above and beyond!",
    rating: 5,
  },
  {
    slug: 'the-crown-inn',
    business: 'The Crown Inn',
    name: 'Simon Cant & Liam White',
    role: 'Owners',
    logo: '/testimonials/crowninn.jpg',
    shortQuote:
      'Expedited settlements have been instrumental in maintaining the financial health of our establishments.',
    quote:
      "Vastus has been instrumental in fuelling the expansion of my hospitality portfolio. Through their comprehensive funding assistance, I've been able to embark on ambitious projects and undertake strategic initiatives that have further solidified my presence in the market. The expedited settlements provided by Vastus have been instrumental in maintaining the financial health of my establishments. In an industry where cash flow is paramount, the ability to access funds swiftly has been a game-changer, enabling me to seize opportunities and navigate through challenges with confidence.",
    rating: 5,
  },
]
