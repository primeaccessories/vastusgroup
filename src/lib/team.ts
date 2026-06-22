export interface TeamMember {
  name: string
  role: string
  bio?: string
  founder?: boolean
  lead?: boolean
  image?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Matthew Crook',
    role: 'Founder & Director',
    founder: true,
    image: '/team/matthew-crook.webp',
    bio: "Matthew's focus is on building and maintaining successful relationships with Vastus's clients and partners. It's common sense — if you want to be successful, you've got to genuinely care about the people you work for and with.",
  },
  {
    name: 'Jack Fletcher',
    role: 'Founder & Director',
    founder: true,
    image: '/team/jack-fletcher.webp',
    bio: 'Jack has built a wealth of knowledge on the merchant services industry, rising quickly through the ranks of his previous employer. His passion for being regarded as an extension of his clients\' business is built into the fabric of Vastus.',
  },
  { name: 'Richard Barker', role: 'Chief Technology Officer', lead: true, image: '/team/richard-barker.webp' },
  { name: 'Daniel Page', role: 'Head of Funding', lead: true, image: '/team/daniel-page.webp' },
  { name: 'Georgia Hope', role: 'Head of Finance', lead: true, image: '/team/georgia-hope.webp' },
  { name: 'Ellie Masterson', role: 'Head of Pricing', lead: true, image: '/team/ellie-masterson.webp' },
  { name: 'Lauren Wheatley', role: 'Head of Onboarding', lead: true, image: '/team/lauren-wheatley.webp' },
  { name: 'Patrick Hitie', role: 'Head of Marketing', lead: true, image: '/team/patrick-hitie.webp' },
  { name: 'Jamie Cotton', role: 'Senior Account Manager', image: '/team/jamie-cotton.webp' },
  { name: 'Harry Feeney', role: 'Senior Account Manager', image: '/team/harry-feeney.webp' },
  { name: 'Dylan Pumphrey', role: 'Sales Manager', image: '/team/dylan-pumphrey.webp' },
  { name: 'Paul Metcalfe', role: 'Client Partnership Agent', image: '/team/paul-metcalfe.webp' },
  { name: 'Stephanie Carruthers', role: 'Client Partnership Agent', image: '/team/stephanie-carruthers.webp' },
  { name: "Mackenzie O'Neil", role: 'Client Partnership Agent', image: '/team/mackenzie-oneil.webp' },
  { name: 'Lewis Dollin', role: 'Client Partnership Agent', image: '/team/lewis-dollin.webp' },
  { name: 'Shania Oneill', role: 'Payment Specialist', image: '/team/shania-oneill.webp' },
  { name: 'Dom Baker', role: 'Payment Specialist', image: '/team/dom-baker.webp' },
  { name: 'Phoebe Wheatley', role: 'Onboarding Specialist', image: '/team/phoebe-wheatley.webp' },
]
