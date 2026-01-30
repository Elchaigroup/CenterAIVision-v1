export interface MiningPlan {
  id: string
  name: string
  duration: string
  hashrate: string
  price: number
  expectedBTC: string
  expectedUSD: string
  roi: number
  badge?: string
}

export const miningPlans: MiningPlan[] = [
  {
    id: 'starter',
    name: 'Starter Mining',
    duration: '1 Day',
    hashrate: '100 TH/s',
    price: 8,
    expectedBTC: '0.00001250 BTC',
    expectedUSD: '$1.23',
    roi: 15.4,
    badge: 'POPULAR',
  },
  {
    id: 'standard',
    name: 'Standard Mining',
    duration: '30 Days',
    hashrate: '3000 TH/s',
    price: 1850,
    expectedBTC: '0.01125 BTC',
    expectedUSD: '$1,107',
    roi: -40.2,
  },
  {
    id: 'pro',
    name: 'Pro Mining',
    duration: '180 Days',
    hashrate: '10000 TH/s',
    price: 9500,
    expectedBTC: '0.0675 BTC',
    expectedUSD: '$6,642',
    roi: -30.1,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Mining',
    duration: '360 Days',
    hashrate: '50000 TH/s',
    price: 42000,
    expectedBTC: '0.338 BTC',
    expectedUSD: '$33,250',
    roi: -20.9,
    badge: 'BEST VALUE',
  },
]

export const miningKPIs = [
  { label: 'BTC Held', value: 1959, suffix: ' BTC' },
  { label: 'Mining Hashrate', value: 36.0, suffix: ' EH/s' },
  { label: 'Active Miners', value: 85000, suffix: '' },
  { label: 'BTC Mined (24h)', value: 12.50, suffix: ' BTC', decimals: 2 },
]

export const miningFeatures = [
  {
    title: 'Instant Activation',
    description: 'Start mining immediately after purchase. No setup required, no waiting periods.',
  },
  {
    title: 'Enterprise Infrastructure',
    description: 'Professional mining facilities with 99.9% uptime guarantee and optimal cooling.',
  },
  {
    title: 'Daily Payouts',
    description: 'Receive your mining rewards directly to your wallet every 24 hours.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Real-time dashboards showing hashrate, earnings, and performance metrics.',
  },
]

export const miningSteps = [
  {
    step: '01',
    title: 'Choose Your Plan',
    description: 'Select a mining contract based on your investment goals and timeframe.',
  },
  {
    step: '02',
    title: 'Complete Payment',
    description: 'Pay securely via cryptocurrency or traditional payment methods.',
  },
  {
    step: '03',
    title: 'Start Earning',
    description: 'Mining begins immediately. Track your earnings in real-time.',
  },
]
