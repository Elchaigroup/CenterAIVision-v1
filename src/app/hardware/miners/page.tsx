'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { ASICCard } from '@/components/sections/asic-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { Button } from '@/components/ui/button'
import { asicMiners, asicInclusions } from '@/data/gpu-products'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'all', label: 'All Miners' },
  { id: 'hydro', label: 'Hydro Cooling' },
  { id: 'air', label: 'Air Cooling' },
]

export default function ASICMinersPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredMiners = asicMiners.filter((miner) => {
    if (activeTab === 'all') return true
    if (activeTab === 'hydro') return miner.name.includes('Hyd')
    if (activeTab === 'air') return !miner.name.includes('Hyd')
    return true
  })

  return (
    <>
      {/* Full Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/1837.webp"
          alt="Mining Container Farm"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate/80 via-midnight-slate/50 to-midnight-slate" />

        {/* Content Container - All Centered */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Buy ASIC Miners
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-cloud-mist/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Professional Mining Hardware
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-cloud-mist/70 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Enterprise-grade Bitcoin mining hardware with free shipping, full warranty coverage, and direct manufacturer support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-card-bg border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px',
                  activeTab === tab.id
                    ? 'text-electric-azure border-electric-azure'
                    : 'text-cloud-mist/60 border-transparent hover:text-cloud-mist'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ASIC Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMiners.map((miner, index) => (
              <ASICCard key={miner.id} miner={miner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Our Mining Infrastructure
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              State-of-the-art facilities powering your mining operations
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            <FadeIn delay={100}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/1942.webp"
                  alt="Mining Farm Aerial"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Solar-Powered Farm</h3>
                  <p className="text-sm text-cloud-mist/70">Sustainable mining operations</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2453.webp"
                  alt="Mining Facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Container Mining</h3>
                  <p className="text-sm text-cloud-mist/70">Scalable mining infrastructure</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2584.webp"
                  alt="Data Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Data Center</h3>
                  <p className="text-sm text-cloud-mist/70">Enterprise-grade cooling</p>
                </div>
              </div>
            </FadeIn>
          </div>
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
                Looking for a Managed Investment?
              </h3>
              <p className="text-cloud-mist/80 text-lg">
                Consider our AI GPU Hardware Investment for higher returns with zero maintenance.
              </p>
            </div>
            <Link href="/hardware/gpus">
              <Button variant="primary" size="lg" className="bg-white text-core-blue hover:bg-white/90">
                Explore GPU Investments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              What is Included
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Every purchase comes with comprehensive support
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {asicInclusions.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/0357.webp"
          alt="Mining Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate via-midnight-slate/60 to-midnight-slate/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist/80 text-lg">Trusted by miners worldwide</p>
          </div>
        </div>
      </section>
    </>
  )
}
