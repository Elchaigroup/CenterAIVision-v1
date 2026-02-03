'use client'

import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GradientBlinds } from '@/components/ui/gradient-blinds'
import { KPIStrip } from '@/components/sections/kpi-strip'
import { TradingViewTicker } from '@/components/sections/tradingview-ticker'
import { MiningCard } from '@/components/sections/mining-card'
import { GPUComputeCard } from '@/components/sections/gpu-card'
import { miningPlans } from '@/data/mining-plans'
import { gpuComputeProducts } from '@/data/gpu-products'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient Blinds Background */}
        <div className="absolute inset-0">
          <GradientBlinds
            gradientColors={['#1B232D', '#003296', '#2C93FF', '#003296', '#1B232D']}
            angle={45}
            noise={0.12}
            blindCount={20}
            blindMinWidth={50}
            mouseDampening={0.08}
            spotlightRadius={0.5}
            spotlightSoftness={0.8}
            spotlightOpacity={1.2}
            mixBlendMode="normal"
          />
        </div>
        <div className="absolute inset-0 bg-midnight-slate/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 relative">
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
              <Link href="/waitlist">
                <Button variant="primary" size="lg">
                  Start Mining
                </Button>
              </Link>
              <Link href="/waitlist">
                <Button variant="glass" size="lg">
                  Explore GPU Compute
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <FadeIn delay={600}>
              <Link href="/waitlist">
                <Card variant="glass" tilt spotlight={false} className="group cursor-pointer">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                      Bitcoin Mining
                    </h3>
                    <p className="text-cloud-mist/70">
                      Access institutional-grade mining infrastructure with instant activation,
                      daily payouts, and transparent reporting. Start with as little as $8.
                    </p>
                    <span className="inline-block mt-4 text-electric-azure text-sm font-medium group-hover:underline">
                      Learn more
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
            <FadeIn delay={700}>
              <Link href="/waitlist">
                <Card variant="glass" tilt spotlight={false} className="group cursor-pointer">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                      AI GPU Compute
                    </h3>
                    <p className="text-cloud-mist/70">
                      On-demand access to next-generation NVIDIA GPUs including GB300 NVL72.
                      Scale your AI workloads with enterprise-grade infrastructure.
                    </p>
                    <span className="inline-block mt-4 text-electric-azure text-sm font-medium group-hover:underline">
                      Learn more
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Live Market Ticker */}
      <TradingViewTicker />

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
              <Link href="/waitlist">
                <Button variant="ghost">View All Plans</Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningPlans.map((plan, index) => (
              <MiningCard key={plan.id} plan={plan} index={index} />
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
            {gpuComputeProducts.slice(0, 4).map((gpu, index) => (
              <GPUComputeCard key={gpu.id} gpu={gpu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-r from-core-blue to-electric-azure/80 rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-cloud-mist/80 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of investors leveraging our infrastructure for Bitcoin mining
                and AI compute. Start your journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/waitlist">
                  <Button variant="secondary" size="lg" className="bg-white border-white text-core-blue font-semibold hover:bg-white/90">
                    Join the Waitlist
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-cloud-mist/30 hover:border-cloud-mist">
                    Contact Us
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
