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
    hourlyPrice: 145,
    monthlyPrice: 89000,
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
    hourlyPrice: 125,
    monthlyPrice: 77000,
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
    hourlyPrice: 55,
    monthlyPrice: 34000,
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
    hourlyPrice: 45,
    monthlyPrice: 28000,
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
    hourlyPrice: 38,
    monthlyPrice: 23500,
  },
  {
    id: 'h200',
    name: 'NVIDIA H200',
    specs: {
      memory: '141GB HBM3e',
      performance: '3.96 PFLOPS FP8',
      gpuCount: '1 GPU',
    },
    hourlyPrice: 4.50,
    monthlyPrice: 2800,
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
    hourlyPrice: 3.50,
    monthlyPrice: 2200,
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
    hourlyPrice: 4.99,
    monthlyPrice: 3100,
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
    hourlyPrice: 1.20,
    monthlyPrice: 750,
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
    hourlyPrice: 0.80,
    monthlyPrice: 500,
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
    hourlyPrice: 40,
    monthlyPrice: 25000,
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
    hourlyPrice: 0.60,
    monthlyPrice: 380,
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
    hourlyPrice: 1.50,
    monthlyPrice: 950,
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
      performance: '207 PFLOPS FP8',
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
      memory: '13.5TB HBM3e',
      performance: '180 PFLOPS FP8',
      gpuCount: '72 GPUs',
    },
  },
  {
    id: 'dgx-h200-hw',
    name: 'NVIDIA DGX H200',
    badge: 'MOST MEMORY',
    price: 550000,
    monthlyProfit: 34500,
    roiMonths: 15.9,
    annualROI: 75.3,
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
    price: 420000,
    monthlyProfit: 28500,
    roiMonths: 14.7,
    annualROI: 81.4,
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
    price: 520000,
    monthlyProfit: 23890,
    roiMonths: 21.8,
    annualROI: 55.1,
    specs: {
      memory: '1.5TB HBM3e',
      performance: '144 PFLOPS FP4',
      gpuCount: '8 GPUs',
    },
  },
  {
    id: 'h200-hw',
    name: 'NVIDIA H200',
    price: 45000,
    monthlyProfit: 2900,
    roiMonths: 15.5,
    annualROI: 77.3,
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
    price: 35000,
    monthlyProfit: 2300,
    roiMonths: 15.2,
    annualROI: 78.9,
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
    price: 65000,
    monthlyProfit: 3250,
    roiMonths: 20,
    annualROI: 60,
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
    price: 7500,
    monthlyProfit: 780,
    roiMonths: 9.6,
    annualROI: 124.8,
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
    price: 2200,
    monthlyProfit: 520,
    roiMonths: 4.2,
    annualROI: 283.6,
    specs: {
      memory: '24GB GDDR6X',
      performance: '82.6 TFLOPS',
      gpuCount: '1 GPU',
    },
  },
  {
    id: 'rtx-4080-hw',
    name: 'NVIDIA RTX 4080',
    price: 1400,
    monthlyProfit: 380,
    roiMonths: 3.7,
    annualROI: 325.7,
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
    price: 380000,
    monthlyProfit: 25500,
    roiMonths: 14.9,
    annualROI: 80.5,
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
    price: 3200,
    monthlyProfit: 400,
    roiMonths: 8,
    annualROI: 150,
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
    price: 8500,
    monthlyProfit: 980,
    roiMonths: 8.7,
    annualROI: 138.4,
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
    price: 18500,
    hashrate: '930 TH/s',
    power: '12555W',
    efficiency: '13.5 J/TH',
    badge: 'MOST POWERFUL',
    monthlyProfit: 2850,
    roiMonths: 6.5,
    annualROI: 185,
    location: 'USA (Texas)',
  },
  {
    id: 's21-xp-hyd',
    name: 'Antminer S21 XP Hyd',
    price: 9800,
    hashrate: '473 TH/s',
    power: '5676W',
    efficiency: '12 J/TH',
    badge: 'NEWEST',
    monthlyProfit: 1580,
    roiMonths: 6.2,
    annualROI: 193,
    location: 'USA (Texas)',
  },
  {
    id: 's23',
    name: 'Antminer S23',
    price: 6200,
    hashrate: '318 TH/s',
    power: '3498W',
    efficiency: '11 J/TH',
    badge: 'BEST EFFICIENCY',
    monthlyProfit: 1120,
    roiMonths: 5.5,
    annualROI: 217,
    location: 'USA (Oregon)',
  },
  {
    id: 's21-xp',
    name: 'Antminer S21 XP',
    price: 4500,
    hashrate: '270 TH/s',
    power: '3645W',
    efficiency: '13.5 J/TH',
    badge: 'POPULAR',
    monthlyProfit: 820,
    roiMonths: 5.5,
    annualROI: 218,
    location: 'USA (Texas)',
  },
  {
    id: 's21-pro',
    name: 'Antminer S21 Pro',
    price: 5800,
    hashrate: '234 TH/s',
    power: '3510W',
    efficiency: '15 J/TH',
    badge: 'TOP AIR-COOLED',
    monthlyProfit: 890,
    roiMonths: 6.5,
    annualROI: 184,
    location: 'USA (Texas)',
  },
  {
    id: 'm60s',
    name: 'Whatsminer M60S',
    price: 5200,
    hashrate: '200 TH/s',
    power: '3080W',
    efficiency: '15.4 J/TH',
    badge: 'NEW GEN',
    monthlyProfit: 780,
    roiMonths: 6.7,
    annualROI: 180,
    location: 'USA (Oregon)',
  },
  {
    id: 'avalon-a1566',
    name: 'Canaan Avalon A1566',
    price: 4800,
    hashrate: '200 TH/s',
    power: '3200W',
    efficiency: '16 J/TH',
    badge: 'IMMERSION READY',
    monthlyProfit: 720,
    roiMonths: 6.7,
    annualROI: 180,
    location: 'Iceland',
  },
  {
    id: 'sealminer-a2',
    name: 'Bitdeer Sealminer A2',
    price: 4600,
    hashrate: '226 TH/s',
    power: '3420W',
    efficiency: '15.1 J/TH',
    badge: 'NEW',
    monthlyProfit: 850,
    roiMonths: 5.4,
    annualROI: 222,
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
