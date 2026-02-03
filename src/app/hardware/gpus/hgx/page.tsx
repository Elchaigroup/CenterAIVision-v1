'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const specifications = [
  { label: 'Platform', value: 'NVIDIA HGX' },
  { label: 'GPU Options', value: 'H100 / H200 / B200' },
  { label: 'GPU Count', value: '4 or 8 GPUs' },
  { label: 'Max GPU Memory', value: 'Up to 1.5 TB HBM3e' },
  { label: 'NVLink Bandwidth', value: 'Up to 900 GB/s per GPU' },
  { label: 'NVSwitch', value: 'Full bisection bandwidth' },
  { label: 'PCIe', value: 'Gen5 x16 per GPU' },
  { label: 'Form Factor', value: 'OEM Baseboard' },
  { label: 'Cooling', value: 'Air or Liquid' },
  { label: 'Power', value: 'Scalable per configuration' },
]

const performanceMetrics = [
  { value: '8', label: 'GPUs Max', description: 'Per baseboard' },
  { value: '1.5', label: 'TB HBM3e', description: 'Max memory' },
  { value: '900', label: 'GB/s NVLink', description: 'Per GPU' },
  { value: 'OEM', label: 'Flexible', description: 'Server integration' },
]

const keyFeatures = [
  {
    title: 'Flexible GPU Platform',
    description: 'HGX baseboards support multiple GPU generations including H100, H200, and B200 for future-proof infrastructure.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'NVSwitch Interconnect',
    description: 'All GPUs connected via NVSwitch for full bisection bandwidth, enabling efficient multi-GPU workloads.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'OEM Integration',
    description: 'Designed for server OEMs to build custom AI systems with optimal cooling and power delivery.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Configurations',
    description: 'Available in 4-GPU and 8-GPU configurations to match workload requirements and budget.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

export default function HGXPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
                    Available Now
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-400 rounded-full border border-violet-500/30">
                    OEM Platform
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  NVIDIA
                  <span className="block bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-400 bg-clip-text text-transparent">
                    HGX Platform
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  The foundation for AI supercomputing. Flexible GPU baseboard platform
                  supporting H100, H200, and B200 GPUs with full NVLink connectivity.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/waitlist?product=NVIDIA HGX">
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

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-indigo-500/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-indigo-500/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/hgx/nvidia-hgx-702-p@2x.png"
                      alt="NVIDIA HGX Platform"
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">Up to 8 GPUs | NVSwitch | OEM Platform</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-indigo-500/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Build Your AI Infrastructure
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The NVIDIA HGX platform provides the building blocks for enterprise AI systems,
                with flexibility to choose GPU generation and configuration.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400 h-fit">
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
                Platform specifications for the NVIDIA HGX.
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
