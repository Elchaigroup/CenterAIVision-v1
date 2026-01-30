export interface GPUCompute {
  id: string
  name: string
  badge?: string
  specs: {
    memory?: string
    performance?: string
    gpuCount?: string
  }
  hourlyPrice: number
  monthlyPrice: number
}

export interface GPUHardware {
  id: string
  name: string
  badge?: string
  price: number
  monthlyProfit: number
  roiMonths: number
  annualROI: number
  specs?: {
    memory?: string
    performance?: string
    gpuCount?: string
  }
}

export interface ASICMiner {
  id: string
  name: string
  price: number
  hashrate: string
  power: string
  efficiency: string
  badge?: string
}

export const gpuComputeProducts: GPUCompute[] = [
  {
    id: 'gb300-nvl72',
    name: 'NVIDIA GB300 NVL72',
    badge: 'NEWEST',
    specs: {
      memory: '13.8TB HBM3e',
      performance: '207 PFLOPS',
      gpuCount: '72 GPUs',
    },
    hourlyPrice: 145,
    monthlyPrice: 89000,
  },
  {
    id: 'gb200-nvl72',
    name: 'NVIDIA GB200 NVL72',
    badge: 'MOST POWERFUL',
    specs: {
      memory: '11.5TB HBM3e',
      performance: '180 PFLOPS',
      gpuCount: '72 GPUs',
    },
    hourlyPrice: 125,
    monthlyPrice: 77000,
  },
  {
    id: 'hgx-h200',
    name: 'NVIDIA HGX H200',
    badge: 'ENTERPRISE',
    specs: {
      memory: '1.1TB HBM3e',
      performance: '32 PFLOPS',
      gpuCount: '8 GPUs',
    },
    hourlyPrice: 28,
    monthlyPrice: 17250,
  },
  {
    id: 'h200',
    name: 'NVIDIA H200',
    badge: 'BEST VALUE',
    specs: {
      memory: '141GB HBM3e',
      performance: '4 PFLOPS',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 3.99,
    monthlyPrice: 2450,
  },
]

export const gpuHardwareProducts: GPUHardware[] = [
  {
    id: 'gb300-nvl72-hw',
    name: 'NVIDIA GB300 NVL72',
    badge: 'NEWEST',
    price: 4850000,
    monthlyProfit: 89090,
    roiMonths: 54.4,
    annualROI: 22,
    specs: {
      memory: '13.8TB HBM3e',
      performance: '207 PFLOPS',
      gpuCount: '72 GPUs',
    },
  },
  {
    id: 'gb200-nvl72-hw',
    name: 'NVIDIA GB200 NVL72',
    badge: 'MOST POWERFUL',
    price: 4200000,
    monthlyProfit: 72546,
    roiMonths: 57.9,
    annualROI: 20.7,
    specs: {
      memory: '11.5TB HBM3e',
      performance: '180 PFLOPS',
      gpuCount: '72 GPUs',
    },
  },
  {
    id: 'hgx-h200-hw',
    name: 'NVIDIA HGX H200',
    badge: 'ENTERPRISE',
    price: 320000,
    monthlyProfit: 17418,
    roiMonths: 18.4,
    annualROI: 65.3,
    specs: {
      memory: '1.1TB HBM3e',
      performance: '32 PFLOPS',
      gpuCount: '8 GPUs',
    },
  },
  {
    id: 'h200-hw',
    name: 'NVIDIA H200',
    badge: 'BEST VALUE',
    price: 42000,
    monthlyProfit: 2589,
    roiMonths: 16.2,
    annualROI: 73.9,
    specs: {
      memory: '141GB HBM3e',
      performance: '4 PFLOPS',
      gpuCount: '1 GPU',
    },
  },
]

export const asicMiners: ASICMiner[] = [
  {
    id: 's21-plus-hyd',
    name: 'Antminer S21+ Hyd',
    price: 5477,
    hashrate: '319 TH/s',
    power: '5360W',
    efficiency: '16.8 J/TH',
    badge: 'NEWEST',
  },
  {
    id: 's21',
    name: 'Antminer S21',
    price: 3200,
    hashrate: '200 TH/s',
    power: '3550W',
    efficiency: '17.5 J/TH',
    badge: 'POPULAR',
  },
  {
    id: 's19-xp',
    name: 'Antminer S19 XP',
    price: 958,
    hashrate: '140 TH/s',
    power: '3010W',
    efficiency: '21.5 J/TH',
    badge: 'BEST VALUE',
  },
]

export const gpuFeatures = [
  {
    title: 'Instant Deployment',
    description: 'Launch your GPU instances within minutes. No hardware setup or maintenance required.',
  },
  {
    title: 'Flexible Scaling',
    description: 'Scale your compute resources up or down based on workload demands.',
  },
  {
    title: 'Enterprise Support',
    description: 'Dedicated support team available 24/7 for enterprise customers.',
  },
]

export const asicInclusions = [
  {
    title: 'Free Shipping',
    description: 'Worldwide shipping included in the price. Delivery within 7-14 business days.',
  },
  {
    title: '12 Month Warranty',
    description: 'Full manufacturer warranty covering defects and malfunctions.',
  },
  {
    title: 'Setup Guide',
    description: 'Detailed documentation and video tutorials for easy installation.',
  },
  {
    title: 'Technical Support',
    description: 'Access to our technical team for any questions or issues.',
  },
]
