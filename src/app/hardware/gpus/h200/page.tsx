'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const specifications = [
  { label: 'GPU Architecture', value: 'NVIDIA Hopper' },
  { label: 'GPU Memory', value: '141 GB HBM3e' },
  { label: 'GPU Memory Bandwidth', value: '4.8 TB/s' },
  { label: 'FP8 Tensor Core', value: '3.96 PFLOPS' },
  { label: 'FP16 Tensor Core', value: '1.98 PFLOPS' },
  { label: 'TF32 Tensor Core', value: '989 TFLOPS' },
  { label: 'FP64 Tensor Core', value: '67 TFLOPS' },
  { label: 'NVLink', value: '900 GB/s' },
  { label: 'PCIe', value: 'Gen5 x16' },
  { label: 'Max TDP', value: '700W' },
  { label: 'Form Factor', value: 'SXM' },
]

const performanceMetrics = [
  { value: '141', label: 'GB HBM3e', description: 'GPU memory' },
  { value: '4.8', label: 'TB/s', description: 'Memory bandwidth' },
  { value: '3.96', label: 'PFLOPS FP8', description: 'Tensor performance' },
  { value: '900', label: 'GB/s NVLink', description: 'GPU interconnect' },
]

const keyFeatures = [
  {
    title: 'Hopper Architecture',
    description: 'Built on the proven NVIDIA Hopper architecture, optimized for large-scale AI training and inference workloads.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: '141 GB HBM3e Memory',
    description: 'Industry-leading memory capacity with 4.8 TB/s bandwidth for handling the largest AI models and datasets.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: '1.8x More Memory',
    description: 'Compared to H100, the H200 offers 1.8x more memory capacity enabling larger batch sizes and model parameters.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'High-Speed NVLink',
    description: '900 GB/s NVLink connectivity enables seamless multi-GPU scaling for distributed AI workloads.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

export default function H200Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                    Available Now
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-400 rounded-full border border-violet-500/30">
                    Most Memory
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  NVIDIA
                  <span className="block bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                    H200 Tensor Core
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  The world&apos;s most advanced AI accelerator for large language models.
                  141 GB HBM3e memory delivers unprecedented capacity for trillion-parameter models.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/waitlist?product=NVIDIA H200">
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
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-violet-500/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-purple-500/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-500/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/nvidia-h200.png"
                      alt="NVIDIA H200 Tensor Core GPU"
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">141 GB HBM3e | 4.8 TB/s | Hopper</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-purple-500/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
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
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Enterprise AI Performance
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The NVIDIA H200 delivers the memory capacity needed for the largest AI models,
                making it ideal for LLM training and inference at scale.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 text-purple-400 h-fit">
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
                Complete specifications for the NVIDIA H200 Tensor Core GPU.
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
