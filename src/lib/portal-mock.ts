export const MOCK_USER = {
  id: 'cust_2X9k1Z',
  businessName: 'Riverside Bistro Ltd',
  contactName: 'Daniel Pearce',
  email: 'test1@test.co.uk',
  phone: '07712 345678',
  merchantId: 'MID-487-2261',
  accountManager: 'Georgia Hope',
  accountManagerEmail: 'georgia@a2bpayments.co.uk',
  joinedAt: '2024-03-18',
}

export interface MockTransaction {
  id: string
  date: string
  amount: number
  fee: number
  net: number
  card: string
  status: 'settled' | 'pending' | 'refunded'
  terminal: string
}

const today = new Date()
const day = (n: number) => {
  const d = new Date(today)
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

export const MOCK_TRANSACTIONS: MockTransaction[] = [
  { id: 'TXN-9012-A1', date: day(0), amount: 142.5, fee: 1.27, net: 141.23, card: 'Visa ••4521', status: 'pending', terminal: 'POS-01 Bar' },
  { id: 'TXN-9011-B7', date: day(0), amount: 68.0, fee: 0.61, net: 67.39, card: 'Amex ••1003', status: 'settled', terminal: 'POS-01 Bar' },
  { id: 'TXN-9010-C2', date: day(0), amount: 215.75, fee: 1.92, net: 213.83, card: 'Mastercard ••8842', status: 'settled', terminal: 'POS-02 Dining' },
  { id: 'TXN-9008-D9', date: day(1), amount: 47.5, fee: 0.42, net: 47.08, card: 'Visa ••1290', status: 'settled', terminal: 'POS-02 Dining' },
  { id: 'TXN-9006-E4', date: day(1), amount: 320.0, fee: 2.85, net: 317.15, card: 'Visa ••6677', status: 'settled', terminal: 'POS-01 Bar' },
  { id: 'TXN-9001-F8', date: day(2), amount: 89.25, fee: 0.79, net: 88.46, card: 'Mastercard ••3399', status: 'settled', terminal: 'Mobile-01' },
  { id: 'TXN-8997-G3', date: day(2), amount: 156.0, fee: 1.39, net: 154.61, card: 'Visa ••8821', status: 'settled', terminal: 'POS-02 Dining' },
  { id: 'TXN-8990-H6', date: day(3), amount: 24.5, fee: 0.22, net: 24.28, card: 'Apple Pay', status: 'settled', terminal: 'POS-01 Bar' },
  { id: 'TXN-8988-J1', date: day(3), amount: 78.0, fee: 0.69, net: 77.31, card: 'Visa ••4521', status: 'refunded', terminal: 'POS-01 Bar' },
  { id: 'TXN-8984-K5', date: day(4), amount: 412.5, fee: 3.67, net: 408.83, card: 'Mastercard ••2210', status: 'settled', terminal: 'POS-02 Dining' },
  { id: 'TXN-8981-L0', date: day(4), amount: 95.5, fee: 0.85, net: 94.65, card: 'Visa ••7711', status: 'settled', terminal: 'POS-01 Bar' },
  { id: 'TXN-8975-M9', date: day(5), amount: 167.25, fee: 1.49, net: 165.76, card: 'Google Pay', status: 'settled', terminal: 'Mobile-01' },
  { id: 'TXN-8970-N2', date: day(6), amount: 230.0, fee: 2.05, net: 227.95, card: 'Visa ••3354', status: 'settled', terminal: 'POS-02 Dining' },
]

export const MOCK_LOAN = {
  id: 'CA-2026-0418',
  product: 'Cash Advance',
  advanced: 25000,
  totalRepayable: 28750,
  repaid: 17850,
  remaining: 10900,
  percentOfCard: 12,
  startedAt: '2026-01-14',
  estimatedEnd: '2026-08-22',
  recentRepayments: [
    { date: day(0), amount: 246.5 },
    { date: day(1), amount: 188.2 },
    { date: day(2), amount: 312.4 },
    { date: day(3), amount: 175.6 },
    { date: day(4), amount: 421.9 },
    { date: day(5), amount: 268.0 },
    { date: day(6), amount: 295.3 },
  ],
}

export interface MockTerminal {
  id: string
  model: string
  location: string
  serial: string
  status: 'online' | 'offline' | 'maintenance'
  lastSeen: string
  monthlyVolume: number
}

export const MOCK_TERMINALS: MockTerminal[] = [
  { id: 'POS-01 Bar', model: 'Castles S1F4', location: 'Front bar — counter', serial: 'CSL-S1F4-7821', status: 'online', lastSeen: 'now', monthlyVolume: 18420 },
  { id: 'POS-02 Dining', model: 'PAX A920 Pro', location: 'Dining room — host stand', serial: 'PAX-A920-4412', status: 'online', lastSeen: 'now', monthlyVolume: 24180 },
  { id: 'Mobile-01', model: 'PAX A77 4G', location: 'Outdoor seating', serial: 'PAX-A77-9087', status: 'online', lastSeen: '3 min ago', monthlyVolume: 6240 },
  { id: 'Backup-01', model: 'Castles S1F4', location: 'Office (spare)', serial: 'CSL-S1F4-7104', status: 'offline', lastSeen: '14 days ago', monthlyVolume: 0 },
]

export interface MockTicket {
  id: string
  subject: string
  status: 'open' | 'awaiting-you' | 'resolved'
  priority: 'low' | 'normal' | 'high'
  createdAt: string
  lastActivity: string
  messages: number
}

export const MOCK_TICKETS: MockTicket[] = [
  { id: 'TIC-1042', subject: 'POS-02 receipt printer cutting off VAT line', status: 'awaiting-you', priority: 'normal', createdAt: day(1), lastActivity: '2h ago', messages: 4 },
  { id: 'TIC-1038', subject: 'Add second user to virtual terminal', status: 'open', priority: 'low', createdAt: day(3), lastActivity: 'yesterday', messages: 2 },
  { id: 'TIC-1029', subject: 'Refund processed but not showing on statement', status: 'resolved', priority: 'normal', createdAt: day(9), lastActivity: '5 days ago', messages: 6 },
  { id: 'TIC-1015', subject: 'Request quote — mobile terminal for outdoor service', status: 'resolved', priority: 'low', createdAt: day(21), lastActivity: '14 days ago', messages: 3 },
]

export const MOCK_DOCUMENTS = [
  { id: 'STMT-2026-04', title: 'April 2026 Statement', kind: 'Statement', uploadedAt: '2026-05-02', size: '142 KB' },
  { id: 'STMT-2026-03', title: 'March 2026 Statement', kind: 'Statement', uploadedAt: '2026-04-02', size: '138 KB' },
  { id: 'STMT-2026-02', title: 'February 2026 Statement', kind: 'Statement', uploadedAt: '2026-03-02', size: '129 KB' },
  { id: 'AGR-CA-2026', title: 'Cash Advance Agreement', kind: 'Agreement', uploadedAt: '2026-01-14', size: '312 KB' },
  { id: 'AGR-MS-2024', title: 'Merchant Services Agreement', kind: 'Agreement', uploadedAt: '2024-03-18', size: '288 KB' },
]
