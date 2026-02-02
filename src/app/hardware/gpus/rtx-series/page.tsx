'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const rtx4090Specs = [
  { label: 'GPU Architecture', value: 'NVIDIA Ada Lovelace' },
  { label: 'CUDA Cores', value: '16,384' },
  { label: 'GPU Memory', value: '24 GB GDDR6X' },
  { label: 'GPU Memory Bandwidth', value: '1,008 GB/s' },
  { label: 'Boost Clock', value: '2.52 GHz' },
  { label: 'RT Cores', value: '128 (3rd Gen)' },
  { label: 'Tensor Cores', value: '512 (4th Gen)' },
  { label: 'Max TDP', value: '450W' },
]

const rtx4080Specs = [
  { label: 'GPU Architecture', value: 'NVIDIA Ada Lovelace' },
  { label: 'CUDA Cores', value: '9,728' },
  { label: 'GPU Memory', value: '16 GB GDDR6X' },
  { label: 'GPU Memory Bandwidth', value: '717 GB/s' },
  { label: 'Boost Clock', value: '2.51 GHz' },
  { label: 'RT Cores', value: '76 (3rd Gen)' },
  { label: 'Tensor Cores', value: '304 (4th Gen)' },
  { label: 'Max TDP', value: '320W' },
]

const performanceMetrics = [
  { value: '24', label: 'GB GDDR6X', description: 'RTX 4090 memory' },
  { value: '82.6', label: 'TFLOPS', description: 'FP32 performance' },
  { value: '16,384', label: 'CUDA Cores', description: 'Parallel processing' },
  { value: '1,008', label: 'GB/s', description: 'Memory bandwidth' },
]

const keyFeatures = [
  {
    title: 'Ada Lovelace Architecture',
    description: 'The latest consumer GPU architecture delivers exceptional gaming and AI performance at accessible price points.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Effective AI',
    description: 'RTX 4090/4080 GPUs offer excellent price-to-performance for AI inference and smaller training workloads.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'DLSS 3 & Ray Tracing',
    description: 'Third-generation RT Cores and DLSS 3 with Frame Generation for exceptional visual quality and performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Wide Compatibility',
    description: 'Standard PCIe form factor with broad software support for easy integration into existing systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

export default function RTXSeriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-600/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(132, 204, 22, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(132, 204, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-lime-500/20 text-lime-400 rounded-full border border-lime-500/30">
                    Available Now
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    Best Value
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  NVIDIA
                  <span className="block bg-gradient-to-r from-lime-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                    RTX 4090 / 4080
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  High-performance consumer GPUs for AI inference and development.
                  Excellent price-to-performance ratio for cost-effective deployments.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/waitlist?product=NVIDIA RTX 4090">
                    <Button variant="primary" size="lg">
                      Buy RTX 4090
                    </Button>
                  </Link>
                  <Link href="/waitlist?product=NVIDIA RTX 4080">
                    <Button variant="outline" size="lg">
                      Buy RTX 4080
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-500/30 to-green-500/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-lime-500/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-lime-500/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/nvidia-rtx-4090.png"
                      alt="NVIDIA RTX 4090"
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">24 GB GDDR6X | 82.6 TFLOPS | Ada Lovelace</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-lime-500/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
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
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-lime-400 bg-lime-500/10 rounded-full border border-lime-500/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Accessible AI Compute
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The RTX 40 series delivers excellent AI performance at consumer price points,
                perfect for inference, fine-tuning, and development workloads.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-lime-500/20 to-green-500/20 text-lime-400 h-fit">
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

      {/* Technical Specifications - RTX 4090 */}
      <section className="py-24 bg-gradient-to-b from-transparent via-card-bg/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Technical Specifications
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                Complete specifications for RTX 4090 and RTX 4080.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-lime-400 mb-4">RTX 4090</h3>
              </div>
              <Card variant="glass" className="overflow-hidden" spotlight={false}>
                <CardContent className="p-0">
                  <div className="divide-y divide-white/5">
                    {rtx4090Specs.map((spec, index) => (
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

            <FadeIn delay={100}>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-400 mb-4">RTX 4080</h3>
              </div>
              <Card variant="glass" className="overflow-hidden" spotlight={false}>
                <CardContent className="p-0">
                  <div className="divide-y divide-white/5">
                    {rtx4080Specs.map((spec, index) => (
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
        </div>
      </section>
    </>
  )
}
