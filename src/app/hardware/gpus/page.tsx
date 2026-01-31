'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { GPUHardwareCard } from '@/components/sections/gpu-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { gpuHardwareProducts } from '@/data/gpu-products'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function GPUHardwarePage() {
  return (
    <>
      {/* Full Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/0448.webp"
          alt="AI GPU Infrastructure"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate/80 via-midnight-slate/50 to-midnight-slate" />

        {/* Content Container - All Centered */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto mt-48">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Buy AI GPU Hardware
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-cloud-mist/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Enterprise GPU Investments
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-cloud-mist/70 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Own the hardware, earn the returns. Managed hosting, guaranteed uptime, and monthly profit distributions included.
            </motion.p>
          </div>
        </div>
      </section>

      {/* GPU Investment Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              GPU Investment Opportunities
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Own enterprise-grade GPU hardware with full management and maintenance
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuHardwareProducts.map((gpu, index) => (
              <GPUHardwareCard key={gpu.id} gpu={gpu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* GPU Infrastructure Gallery */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Our GPU Data Centers
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              State-of-the-art facilities housing your GPU investments
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            <FadeIn delay={100}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0162.webp"
                  alt="GPU Server Room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">GPU Server Room</h3>
                  <p className="text-sm text-cloud-mist/70">High-density compute clusters</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0705.webp"
                  alt="AI Operations Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Operations Center</h3>
                  <p className="text-sm text-cloud-mist/70">24/7 monitoring and support</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2584.webp"
                  alt="Cooling Infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Cooling Systems</h3>
                  <p className="text-sm text-cloud-mist/70">Advanced thermal management</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Investment Comparison
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Detailed breakdown of all GPU investment options
            </p>
          </Reveal>
          <Card hover={false} className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-cloud-mist">
                      GPU Model
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-cloud-mist">
                      Price
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-cloud-mist">
                      Monthly Profit
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-cloud-mist">
                      ROI Timeline
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-cloud-mist">
                      Annual ROI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gpuHardwareProducts.map((gpu, index) => (
                    <tr
                      key={gpu.id}
                      className={cn(
                        'border-b border-card-border/50 hover:bg-midnight-slate/30 transition-colors',
                        index === gpuHardwareProducts.length - 1 && 'border-b-0'
                      )}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-cloud-mist">{gpu.name}</div>
                        {gpu.badge && (
                          <div className="text-xs text-electric-azure mt-1">{gpu.badge}</div>
                        )}
                      </td>
                      <td className="text-right px-6 py-4 text-cloud-mist">
                        {formatCurrency(gpu.price, { compact: true })}
                      </td>
                      <td className="text-right px-6 py-4 text-positive font-medium">
                        {formatCurrency(gpu.monthlyProfit, { compact: true })}
                      </td>
                      <td className="text-right px-6 py-4 text-cloud-mist">
                        {gpu.roiMonths} months
                      </td>
                      <td className="text-right px-6 py-4 text-positive font-semibold">
                        {gpu.annualROI}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Recommendation Banner with Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/4091.webp"
            alt="Center AI Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-core-blue/95 via-core-blue/80 to-midnight-slate/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-cloud-mist mb-2">
                Prefer Mining Hardware?
              </h3>
              <p className="text-cloud-mist/80 text-lg">
                Check out our ASIC miners for Bitcoin mining with excellent ROI and full support.
              </p>
            </div>
            <Link href="/hardware/miners">
              <Button variant="primary" size="lg" className="bg-white text-core-blue hover:bg-white/90">
                Browse ASIC Miners
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Investment Benefits
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Why invest in GPU hardware with Center AI Vision
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Guaranteed Uptime',
                description: 'Our enterprise data centers ensure 99.9% uptime for your GPU investment, maximizing your earning potential.',
              },
              {
                title: 'Monthly Distributions',
                description: 'Receive your share of GPU compute revenue directly to your account every month without delays.',
              },
              {
                title: 'Full Management',
                description: 'We handle all hardware maintenance, cooling, and operational logistics. You simply collect returns.',
              },
            ].map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Showcase */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={100}>
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0073.webp"
                  alt="GPU Array"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">High-Performance Arrays</h3>
                  <p className="text-cloud-mist/70">Clustered GPU configurations for maximum compute power</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2979.webp"
                  alt="Facility Exterior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">Enterprise Facilities</h3>
                  <p className="text-cloud-mist/70">Secure, climate-controlled data centers worldwide</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/0357.webp"
          alt="Data Center Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate via-midnight-slate/60 to-midnight-slate/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist/80 text-lg">Enterprise-grade AI infrastructure for serious investors</p>
          </div>
        </div>
      </section>
    </>
  )
}
