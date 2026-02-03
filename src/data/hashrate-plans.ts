export interface HashratePlan {
  id: string
  name: string
  hashrate: string
  price: number
  duration: string
  expectedDaily: string
  expectedMonthly: string
  badge?: string
}

export const hashratePlans: HashratePlan[] = [
  {
    id: 'starter-hash',
    name: 'Starter Hashrate',
    hashrate: '10 TH/s',
    price: 89,
    duration: '30 Days',
    expectedDaily: '0.0000125 BTC',
    expectedMonthly: '0.000375 BTC',
    badge: 'STARTER',
  },
  {
    id: 'standard-hash',
    name: 'Standard Hashrate',
    hashrate: '50 TH/s',
    price: 399,
    duration: '30 Days',
    expectedDaily: '0.0000625 BTC',
    expectedMonthly: '0.001875 BTC',
    badge: 'POPULAR',
  },
  {
    id: 'pro-hash',
    name: 'Pro Hashrate',
    hashrate: '200 TH/s',
    price: 1490,
    duration: '30 Days',
    expectedDaily: '0.00025 BTC',
    expectedMonthly: '0.0075 BTC',
  },
  {
    id: 'enterprise-hash',
    name: 'Enterprise Hashrate',
    hashrate: '1000 TH/s',
    price: 6990,
    duration: '30 Days',
    expectedDaily: '0.00125 BTC',
    expectedMonthly: '0.0375 BTC',
    badge: 'BEST VALUE',
  },
]

export const hashrateInclusions = [
  {
    title: 'Instant Activation',
    description: 'Your hashrate allocation begins immediately after payment confirmation.',
  },
  {
    title: 'Pool Mining',
    description: 'Connected to top-tier mining pools for consistent payouts.',
  },
  {
    title: 'Daily Rewards',
    description: 'Mining rewards deposited to your wallet every 24 hours.',
  },
  {
    title: 'No Maintenance Fees',
    description: 'All operational costs included in the purchase price.',
  },
]
