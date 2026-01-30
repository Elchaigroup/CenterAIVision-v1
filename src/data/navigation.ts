export interface NavItem {
  label: string
  href?: string
  dropdown?: NavItem[]
}

export const navigationItems: NavItem[] = [
  {
    label: 'Compute',
    dropdown: [
      { label: 'Bitcoin Mining', href: '/compute/mining' },
      { label: 'AI GPU Compute', href: '/compute/gpu' },
    ],
  },
  {
    label: 'Hardware',
    dropdown: [
      { label: 'Buy ASIC Miners', href: '/hardware/miners' },
      { label: 'Buy Hashrate', href: '/hardware/hashrate' },
      { label: 'Buy AI GPUs', href: '/hardware/gpus' },
    ],
  },
  {
    label: 'Investors',
    dropdown: [
      { label: 'Investor Dashboard', href: '/investors/dashboard' },
      { label: 'Stock Information', href: '/investors/stock' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
]

export const footerLinks = {
  services: [
    { label: 'Bitcoin Mining', href: '/compute/mining' },
    { label: 'AI GPU Compute', href: '/compute/gpu' },
    { label: 'ASIC Miners', href: '/hardware/miners' },
    { label: 'Hashrate', href: '/hardware/hashrate' },
  ],
  resources: [
    { label: 'Investment Calculators', href: '/calculators' },
    { label: 'GPU Hardware', href: '/hardware/gpus' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ],
  investors: [
    { label: 'Investor Dashboard', href: '/investors/dashboard' },
    { label: 'Stock Information', href: '/investors/stock' },
    { label: 'Financial Reports', href: '#' },
    { label: 'Press Releases', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
}
