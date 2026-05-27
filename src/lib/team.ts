export interface TeamMember {
  name: string
  role: string
  bio?: string
  founder?: boolean
}

export const TEAM: TeamMember[] = [
  {
    name: 'Matthew Crook',
    role: 'Founder & Director',
    founder: true,
    bio: "Matthew's focus is on building and maintaining successful relationships with A2B's clients and partners. It's common sense — if you want to be successful, you've got to genuinely care about the people you work for and with.",
  },
  {
    name: 'Jack Fletcher',
    role: 'Founder & Director',
    founder: true,
    bio: 'Jack has built a wealth of knowledge on the merchant services industry, rising quickly through the ranks of his previous employer. His passion for being regarded as an extension of his clients\' business is built into the fabric of A2B.',
  },
  { name: 'Richard Barker', role: 'Senior Partnership Manager' },
  { name: 'Daniel Page', role: 'Senior Partnership Manager' },
  { name: 'Georgia Hope', role: 'Client Partnership Lead' },
  { name: 'Ellie Masterson', role: 'Client Partnership Agent' },
  { name: 'Lauren Wheatley', role: 'Client Partnership Agent' },
  { name: 'Jamie Cotton', role: 'Client Partnership Agent' },
  { name: 'Harry Feeney', role: 'Client Partnership Agent' },
  { name: 'Phoebe Wheatley', role: 'Client Partnership Agent' },
  { name: 'Dylan Pumphrey', role: 'Client Partnership Agent' },
  { name: 'Paul Metcalfe', role: 'Client Partnership Agent' },
  { name: 'Stephanie Carruthers', role: 'Client Partnership Agent' },
  { name: "Mackenzie O'Neil", role: 'Client Partnership Agent' },
  { name: 'Lewis Dollin', role: 'Client Partnership Agent' },
  { name: 'Shania Oneill', role: 'Payment Specialist' },
  { name: 'Dom Baker', role: 'Payment Specialist' },
  { name: 'Patrick Hitie', role: 'Head of Marketing' },
]
