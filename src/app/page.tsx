'use client'

import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GradientBlinds } from '@/components/ui/gradient-blinds'
import { KPIStrip } from '@/components/sections/kpi-strip'
import { MiningCard } from '@/components/sections/mining-card'
import { GPUComputeCard } from '@/components/sections/gpu-card'
import { miningPlans } from '@/data/mining-plans'
import { gpuComputeProducts } from '@/data/gpu-products'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Gradient Blinds Background */}
        <div className="absolute inset-0">
          <GradientBlinds
            gradientColors={['#1B232D', '#003296', '#2C93FF', '#003296', '#1B232D']}
            angle={45}
            noise={0.15}
            blindCount={24}
            blindMinWidth={40}
            mouseDampening={0.1}
            spotlightRadius={0.6}
            spotlightSoftness={1.2}
            spotlightOpacity={0.8}
            mixBlendMode="normal"
          />
        </div>
        {/* Overlay for better text readability - pointer-events-none allows mouse to pass through to gradient */}
        <div className="absolute inset-0 bg-midnight-slate/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cloud-mist max-w-4xl leading-tight">
              Bitcoin Mining & AI GPU Platform
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-xl md:text-2xl text-cloud-mist/70 max-w-2xl">
              Professional Bitcoin mining and AI compute infrastructure.
              Enterprise-grade technology built for institutional investors.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/compute/mining">
                <Button variant="primary" size="lg">
                  Start Mining
                </Button>
              </Link>
              <Link href="/compute/gpu">
                <Button variant="outline" size="lg">
                  Explore GPU Compute
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <FadeIn delay={600}>
              <Card className="border-electric-azure/30" tilt>
                <CardContent>
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                    Bitcoin Mining
                  </h3>
                  <p className="text-cloud-mist/70">
                    Access institutional-grade mining infrastructure with instant activation,
                    daily payouts, and transparent reporting. Start with as little as $8.
                  </p>
                  <Link href="/compute/mining" className="inline-block mt-4">
                    <span className="text-electric-azure text-sm font-medium hover:underline">
                      Learn more
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={700}>
              <Card className="border-electric-azure/30" tilt>
                <CardContent>
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                    AI GPU Compute
                  </h3>
                  <p className="text-cloud-mist/70">
                    On-demand access to next-generation NVIDIA GPUs including GB300 NVL72.
                    Scale your AI workloads with enterprise-grade infrastructure.
                  </p>
                  <Link href="/compute/gpu" className="inline-block mt-4">
                    <span className="text-electric-azure text-sm font-medium hover:underline">
                      Learn more
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KPI Strip */}
      <KPIStrip />

      {/* Cloud Mining Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                  Cloud Mining Plans
                </h2>
                <p className="mt-2 text-cloud-mist/60">
                  Start earning Bitcoin with our secure mining contracts
                </p>
              </div>
              <Link href="/compute/mining">
                <Button variant="ghost">View All Plans</Button>
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningPlans.map((plan, index) => (
              <FadeIn key={plan.id} delay={index * 100}>
                <MiningCard plan={plan} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI GPU Compute Preview */}
      <section className="py-20 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                  AI GPU Compute
                </h2>
                <p className="mt-2 text-cloud-mist/60">
                  Next-generation NVIDIA GPUs for AI workloads
                </p>
              </div>
              <Link href="/compute/gpu">
                <Button variant="ghost">View All GPUs</Button>
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuComputeProducts.map((gpu, index) => (
              <FadeIn key={gpu.id} delay={index * 100}>
                <GPUComputeCard gpu={gpu} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-r from-core-blue to-core-blue/70 rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-cloud-mist/80 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of investors leveraging our infrastructure for Bitcoin mining
                and AI compute. Start your journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators">
                  <Button variant="primary" size="lg">
                    Calculate Your Returns
                  </Button>
                </Link>
                <Link href="/investors/stock">
                  <Button variant="outline" size="lg" className="border-cloud-mist/30 hover:border-cloud-mist">
                    View Stock Information
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
