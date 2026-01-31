'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        {/* Overlay for better text readability - pointer-events-none allows mouse to pass through to gradient */}
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
                <Button variant="outline" size="lg">
                  Explore GPU Compute
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Feature Cards - Liquid Glass Effect */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <FadeIn delay={600}>
              <Link href="/waitlist">
                <Card variant="glass" tilt spotlight={false} className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <Image
                      src="/images/1837.webp"
                      alt="Bitcoin Mining Infrastructure"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/50 to-transparent" />
                  </div>
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
                <Card variant="glass" tilt spotlight={false} className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <Image
                      src="/images/0448.webp"
                      alt="AI GPU Command Center"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/50 to-transparent" />
                  </div>
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

      {/* Live Market Ticker - TradingView */}
      <TradingViewTicker />

      {/* KPI Strip */}
      <KPIStrip />

      {/* Infrastructure Showcase */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                World-Class Infrastructure
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                Our state-of-the-art facilities power the future of Bitcoin mining and AI compute
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            <FadeIn delay={100}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/4091.webp"
                  alt="Center AI Vision Facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Main Facility</h3>
                  <p className="text-sm text-cloud-mist/70">Solar-powered data center</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/1942.webp"
                  alt="Mining Container Farm"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Mining Farm</h3>
                  <p className="text-sm text-cloud-mist/70">Enterprise mining containers</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0705.webp"
                  alt="AI Command Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Command Center</h3>
                  <p className="text-sm text-cloud-mist/70">24/7 monitoring operations</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cloud Mining Preview */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/2453.webp"
            alt="Mining Infrastructure"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate via-midnight-slate/95 to-midnight-slate" />
        </div>
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/0073.webp"
            alt="AI Command Center"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-card-bg via-card-bg/95 to-card-bg" />
        </div>
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
              <Link href="/waitlist">
                <Button variant="ghost">View All GPUs</Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuComputeProducts.map((gpu, index) => (
              <GPUComputeCard key={gpu.id} gpu={gpu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/2584.webp"
                  alt="Data Center Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-core-blue/90 via-core-blue/80 to-midnight-slate/90" />
              </div>
              <div className="relative p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-cloud-mist/80 text-lg max-w-2xl mx-auto mb-8">
                  Join thousands of investors leveraging our infrastructure for Bitcoin mining
                  and AI compute. Start your journey today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/waitlist">
                    <Button variant="primary" size="lg">
                      Join the Waitlist
                    </Button>
                  </Link>
                  <Link href="/investors/stock">
                    <Button variant="outline" size="lg" className="border-cloud-mist/30 hover:border-cloud-mist">
                      View Stock Information
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
