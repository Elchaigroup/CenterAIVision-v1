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
  monthlyProfit: number
  roiMonths: number
  annualROI: number
  location?: string
}

export const gpuComputeProducts: GPUCompute[] = [
  {
    id: 'gb300-nvl72',
    name: 'NVIDIA GB300 NVL72',
    badge: 'NEWEST',
    specs: {
      memory: '13.8TB HBM3e',
      performance: '207 PFLOPS FP8',
      gpuCount: '72 GPUs',
    },
    hourlyPrice: 119,
    monthlyPrice: 74900,
  },
  {
    id: 'gb200-nvl72',
    name: 'NVIDIA GB200 NVL72',
    badge: 'MOST POWERFUL',
    specs: {
      memory: '13.5TB HBM3e',
      performance: '180 PFLOPS FP8',
      gpuCount: '72 GPUs',
    },
    hourlyPrice: 99,
    monthlyPrice: 62500,
  },
  {
    id: 'dgx-h200',
    name: 'NVIDIA DGX H200',
    badge: 'MOST MEMORY',
    specs: {
      memory: '1.1TB HBM3e',
      performance: '32 PFLOPS FP8',
      gpuCount: '8 GPUs',
    },
    hourlyPrice: 19.99,
    monthlyPrice: 12500,
  },
  {
    id: 'dgx-h100',
    name: 'NVIDIA DGX H100',
    badge: 'ENTERPRISE',
    specs: {
      memory: '640GB HBM3',
      performance: '32 PFLOPS FP8',
      gpuCount: '8 GPUs',
    },
    hourlyPrice: 17.99,
    monthlyPrice: 11200,
  },
  {
    id: 'b200-cluster',
    name: 'NVIDIA B200 8x Cluster',
    badge: 'BLACKWELL',
    specs: {
      memory: '1.5TB HBM3e',
      performance: '144 PFLOPS FP4',
      gpuCount: '8 GPUs',
    },
    hourlyPrice: 29.99,
    monthlyPrice: 18900,
  },
  {
    id: 'h200',
    name: 'NVIDIA H200',
    specs: {
      memory: '141GB HBM3e',
      performance: '3.96 PFLOPS FP8',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 2.49,
    monthlyPrice: 1590,
  },
  {
    id: 'h100',
    name: 'NVIDIA H100',
    badge: 'POPULAR',
    specs: {
      memory: '80GB HBM3',
      performance: '3.96 PFLOPS FP8',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 2.19,
    monthlyPrice: 1390,
  },
  {
    id: 'b200',
    name: 'NVIDIA B200',
    badge: 'BEST VALUE',
    specs: {
      memory: '192GB HBM3e',
      performance: '18 PFLOPS FP4',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 3.49,
    monthlyPrice: 2190,
  },
  {
    id: 'rtx-6000-ada',
    name: 'NVIDIA RTX 6000 Ada',
    badge: 'PROFESSIONAL',
    specs: {
      memory: '48GB GDDR6',
      performance: '91.1 TFLOPS',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 0.89,
    monthlyPrice: 559,
  },
  {
    id: 'rtx-4090',
    name: 'NVIDIA RTX 4090',
    badge: 'CONSUMER',
    specs: {
      memory: '24GB GDDR6X',
      performance: '82.6 TFLOPS',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 0.44,
    monthlyPrice: 279,
  },
  {
    id: 'hgx',
    name: 'NVIDIA HGX',
    badge: 'OEM PLATFORM',
    specs: {
      memory: 'Up to 1.5TB HBM3e',
      performance: 'Configurable',
      gpuCount: '4-8 GPUs',
    },
    hourlyPrice: 32,
    monthlyPrice: 19900,
  },
  {
    id: 'l4',
    name: 'NVIDIA L4',
    badge: 'INFERENCE',
    specs: {
      memory: '24GB GDDR6',
      performance: '242 TFLOPS FP8',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 0.49,
    monthlyPrice: 309,
  },
  {
    id: 'rtx-pro-6000',
    name: 'NVIDIA RTX PRO 6000',
    badge: 'SERVER',
    specs: {
      memory: '48GB GDDR6 ECC',
      performance: '91.1 TFLOPS',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 0.99,
    monthlyPrice: 619,
  },
]

export const gpuHardwareProducts: GPUHardware[] = [
  {
    id: 'gb300-nvl72-hw',
    name: 'NVIDIA GB300 NVL72',
    badge: 'NEWEST',
    price: 3200000,
    monthlyProfit: 74900,
    roiMonths: 42.7,
    annualROI: 28.1,
    specs: {
      memory: '13.8TB HBM3e',
      performance: '207 PFLOPS FP8',
      gpuCount: '72 GPUs',
    },
  },
  {
    id: 'gb200-nvl72-hw',
    name: 'NVIDIA GB200 NVL72',
    badge: 'MOST POWERFUL',
    price: 2700000,
    monthlyProfit: 62500,
    roiMonths: 43.2,
    annualROI: 27.8,
    specs: {
      memory: '13.5TB HBM3e',
      performance: '180 PFLOPS FP8',
      gpuCount: '72 GPUs',
    },
  },
  {
    id: 'dgx-h200-hw',
    name: 'NVIDIA DGX H200',
    badge: 'MOST MEMORY',
    price: 420000,
    monthlyProfit: 12500,
    roiMonths: 33.6,
    annualROI: 35.7,
    specs: {
      memory: '1.1TB HBM3e',
      performance: '32 PFLOPS FP8',
      gpuCount: '8 GPUs',
    },
  },
  {
    id: 'dgx-h100-hw',
    name: 'NVIDIA DGX H100',
    badge: 'ENTERPRISE',
    price: 320000,
    monthlyProfit: 11200,
    roiMonths: 28.6,
    annualROI: 42,
    specs: {
      memory: '640GB HBM3',
      performance: '32 PFLOPS FP8',
      gpuCount: '8 GPUs',
    },
  },
  {
    id: 'b200-cluster-hw',
    name: 'NVIDIA B200 8x Cluster',
    badge: 'BLACKWELL',
    price: 380000,
    monthlyProfit: 18900,
    roiMonths: 20.1,
    annualROI: 59.7,
    specs: {
      memory: '1.5TB HBM3e',
      performance: '144 PFLOPS FP4',
      gpuCount: '8 GPUs',
    },
  },
  {
    id: 'h200-hw',
    name: 'NVIDIA H200',
    price: 32000,
    monthlyProfit: 1590,
    roiMonths: 20.1,
    annualROI: 59.6,
    specs: {
      memory: '141GB HBM3e',
      performance: '3.96 PFLOPS FP8',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'h100-hw',
    name: 'NVIDIA H100',
    badge: 'POPULAR',
    price: 25000,
    monthlyProfit: 1390,
    roiMonths: 18,
    annualROI: 66.7,
    specs: {
      memory: '80GB HBM3',
      performance: '3.96 PFLOPS FP8',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'b200-hw',
    name: 'NVIDIA B200',
    badge: 'BEST VALUE',
    price: 42000,
    monthlyProfit: 2190,
    roiMonths: 19.2,
    annualROI: 62.6,
    specs: {
      memory: '192GB HBM3e',
      performance: '18 PFLOPS FP4',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'rtx-6000-ada-hw',
    name: 'NVIDIA RTX 6000 Ada',
    badge: 'PROFESSIONAL',
    price: 6500,
    monthlyProfit: 559,
    roiMonths: 11.6,
    annualROI: 103.2,
    specs: {
      memory: '48GB GDDR6',
      performance: '91.1 TFLOPS',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'rtx-4090-hw',
    name: 'NVIDIA RTX 4090',
    badge: 'CONSUMER',
    price: 1799,
    monthlyProfit: 279,
    roiMonths: 6.4,
    annualROI: 186.2,
    specs: {
      memory: '24GB GDDR6X',
      performance: '82.6 TFLOPS',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'rtx-4080-hw',
    name: 'NVIDIA RTX 4080',
    price: 1199,
    monthlyProfit: 210,
    roiMonths: 5.7,
    annualROI: 210.2,
    specs: {
      memory: '16GB GDDR6X',
      performance: '48.7 TFLOPS',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'hgx-hw',
    name: 'NVIDIA HGX',
    badge: 'OEM PLATFORM',
    price: 290000,
    monthlyProfit: 19900,
    roiMonths: 14.6,
    annualROI: 82.3,
    specs: {
      memory: 'Up to 1.5TB HBM3e',
      performance: 'Configurable',
      gpuCount: '4-8 GPUs',
    },
  },
  {
    id: 'l4-hw',
    name: 'NVIDIA L4',
    badge: 'INFERENCE',
    price: 2800,
    monthlyProfit: 309,
    roiMonths: 9.1,
    annualROI: 132.4,
    specs: {
      memory: '24GB GDDR6',
      performance: '242 TFLOPS FP8',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'rtx-pro-6000-hw',
    name: 'NVIDIA RTX PRO 6000',
    badge: 'SERVER',
    price: 7200,
    monthlyProfit: 619,
    roiMonths: 11.6,
    annualROI: 103.2,
    specs: {
      memory: '48GB GDDR6 ECC',
      performance: '91.1 TFLOPS',
      gpuCount: '1 GPU',
    },
  },
]

export const asicMiners: ASICMiner[] = [
  {
    id: 'm79s',
    name: 'Whatsminer M79S',
    price: 14800,
    hashrate: '930 TH/s',
    power: '12555W',
    efficiency: '13.5 J/TH',
    badge: 'MOST POWERFUL',
    monthlyProfit: 2450,
    roiMonths: 6,
    annualROI: 199,
    location: 'USA (Texas)',
  },
  {
    id: 's21-xp-hyd',
    name: 'Antminer S21 XP Hyd',
    price: 7200,
    hashrate: '473 TH/s',
    power: '5676W',
    efficiency: '12 J/TH',
    badge: 'NEWEST',
    monthlyProfit: 1280,
    roiMonths: 5.6,
    annualROI: 213,
    location: 'USA (Texas)',
  },
  {
    id: 's23',
    name: 'Antminer S23',
    price: 4990,
    hashrate: '318 TH/s',
    power: '3498W',
    efficiency: '11 J/TH',
    badge: 'BEST EFFICIENCY',
    monthlyProfit: 920,
    roiMonths: 5.4,
    annualROI: 221,
    location: 'USA (Oregon)',
  },
  {
    id: 's21-xp',
    name: 'Antminer S21 XP',
    price: 3650,
    hashrate: '270 TH/s',
    power: '3645W',
    efficiency: '13.5 J/TH',
    badge: 'POPULAR',
    monthlyProfit: 680,
    roiMonths: 5.4,
    annualROI: 224,
    location: 'USA (Texas)',
  },
  {
    id: 's21-pro',
    name: 'Antminer S21 Pro',
    price: 4260,
    hashrate: '234 TH/s',
    power: '3510W',
    efficiency: '15 J/TH',
    badge: 'TOP AIR-COOLED',
    monthlyProfit: 720,
    roiMonths: 5.9,
    annualROI: 203,
    location: 'USA (Texas)',
  },
  {
    id: 'm60s',
    name: 'Whatsminer M60S',
    price: 3580,
    hashrate: '200 TH/s',
    power: '3080W',
    efficiency: '15.4 J/TH',
    badge: 'NEW GEN',
    monthlyProfit: 590,
    roiMonths: 6.1,
    annualROI: 198,
    location: 'USA (Oregon)',
  },
  {
    id: 'avalon-a1566',
    name: 'Canaan Avalon A1566',
    price: 4385,
    hashrate: '200 TH/s',
    power: '3200W',
    efficiency: '16 J/TH',
    badge: 'IMMERSION READY',
    monthlyProfit: 610,
    roiMonths: 7.2,
    annualROI: 167,
    location: 'Iceland',
  },
  {
    id: 'sealminer-a2',
    name: 'Bitdeer Sealminer A2',
    price: 3890,
    hashrate: '226 TH/s',
    power: '3420W',
    efficiency: '15.1 J/TH',
    badge: 'NEW',
    monthlyProfit: 710,
    roiMonths: 5.5,
    annualROI: 219,
    location: 'USA (Texas)',
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
    title: 'Professional Hosting',
    description: 'Enterprise-grade data centers with optimal power rates and 99.9% uptime guarantee.',
  },
  {
    title: 'Full Management',
    description: 'We handle all maintenance, repairs, and monitoring. You simply collect profits.',
  },
  {
    title: 'Monthly Payouts',
    description: 'Receive your mining revenue directly to your wallet every month.',
  },
  {
    title: 'Real-time Dashboard',
    description: 'Monitor your miners performance, hashrate, and earnings 24/7.',
  },
]
