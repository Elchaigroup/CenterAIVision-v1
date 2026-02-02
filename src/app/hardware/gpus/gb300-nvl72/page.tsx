'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const specifications = [
  { label: 'NVLink Bandwidth', value: '130 TB/s' },
  { label: 'Fast Memory', value: '37 TB' },
  { label: 'GPU Memory', value: '20 TB' },
  { label: 'GPU Memory Bandwidth', value: '576 TB/s' },
  { label: 'CPU Memory', value: '17 TB LPDDR5X' },
  { label: 'CPU Memory Bandwidth', value: '14 TB/s' },
  { label: 'CPU Cores', value: '2,592 Arm Neoverse V2' },
  { label: 'FP4 Tensor Core', value: '1,440 PFLOPS' },
  { label: 'FP8/FP6 Tensor Core', value: '720 PFLOPS' },
]

const performanceMetrics = [
  { value: '50x', label: 'AI Factory Output', description: 'vs. Hopper-based platforms' },
  { value: '10x', label: 'User Responsiveness', description: 'TPS per user improvement' },
  { value: '5x', label: 'Power Efficiency', description: 'Throughput per megawatt' },
  { value: '30x', label: 'Video Generation', description: 'Real-time acceleration' },
]

const keyFeatures = [
  {
    title: '72 Blackwell Ultra GPUs',
    description: 'Combined with 36 Arm-based NVIDIA Grace CPUs in a single unified platform for unprecedented compute density.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Liquid-Cooled Architecture',
    description: 'Fully liquid-cooled rack-scale design enables maximum performance density while maintaining optimal operating temperatures.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: '800 Gb/s Networking',
    description: 'NVIDIA ConnectX-8 SuperNIC delivers 800 Gb/s connectivity per GPU for seamless multi-node scaling.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: '5th Gen NVLink',
    description: 'Fifth-generation NVIDIA NVLink provides 130 TB/s of GPU-to-GPU bandwidth for massive model training.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

export default function GB300NVL72Page() {
  return (
    <>
      {/* Hero Section with Product Image */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-core-blue/30 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-azure/20 via-transparent to-transparent" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(44, 147, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(44, 147, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Info */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    Available Now
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-electric-azure/20 text-electric-azure rounded-full border border-electric-azure/30">
                    Blackwell Ultra Architecture
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  NVIDIA
                  <span className="block bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    GB300 NVL72
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  Built for the age of AI reasoning. A rack-scale system combining 72 Blackwell Ultra GPUs
                  with 36 Grace CPUs, delivering unprecedented performance for the most demanding AI workloads.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/waitlist?product=NVIDIA GB300 NVL72">
                    <Button variant="primary" size="lg">
                      Buy Now
                    </Button>
                  </Link>
                  <Link href="/compute/gpu">
                    <Button variant="outline" size="lg">
                      Rent GPU Compute
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Product Image */}
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-electric-azure/30 to-core-blue/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-electric-azure/20 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-electric-azure/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    {/* Official Product Image */}
                    <Image
                      src="https://www.ingrasys.com/upload/fac_b/product_main__25G17nKwLs.png"
                      alt="NVIDIA GB300 NVL72 Server Rack"
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">72 GPUs | 36 CPUs | Liquid Cooled</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-electric-azure/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-azure to-cyan-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-cloud-mist">{metric.label}</div>
                  <div className="text-xs text-cloud-mist/50">{metric.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Vision Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                The Future of AI Infrastructure
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The NVIDIA GB300 NVL72 represents the pinnacle of AI computing technology.
                Built on the revolutionary Blackwell Ultra architecture, this system delivers
                unprecedented performance for large language models, AI reasoning, and real-time
                video generation workloads.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-electric-azure/20 to-core-blue/20 text-electric-azure h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cloud-mist mb-2">{feature.title}</h3>
                      <p className="text-cloud-mist/60 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-transparent via-card-bg/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Technical Specifications
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                Industry-leading specifications designed for the most demanding AI workloads.
              </p>
            </div>
          </Reveal>

          <FadeIn>
            <Card variant="glass" className="overflow-hidden" spotlight={false}>
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  {specifications.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between items-center px-6 py-4 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <span className="text-cloud-mist/70">{spec.label}</span>
                      <span className="text-cloud-mist font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

    </>
  )
}
