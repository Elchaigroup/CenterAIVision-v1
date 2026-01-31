'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { HashrateCard } from '@/components/sections/hashrate-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { Button } from '@/components/ui/button'
import { hashratePlans, hashrateInclusions } from '@/data/hashrate-plans'

export default function HashratePage() {
  return (
    <>
      <PageHeader
        title="Buy Hashrate"
        subtitle="Purchase dedicated mining hashrate from our enterprise infrastructure. No hardware maintenance required."
      />

      {/* Hero Image Banner */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/2453.webp"
          alt="Mining Farm Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate/80 via-midnight-slate/50 to-midnight-slate" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-cloud-mist mb-4">
              Dedicated Mining Power
            </h2>
            <p className="text-cloud-mist/80 text-lg max-w-2xl">
              Access our hashrate without owning hardware
            </p>
          </div>
        </div>
      </section>

      {/* Hashrate Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Hashrate Plans
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Choose your hashrate allocation for consistent mining rewards
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hashratePlans.map((plan, index) => (
              <HashrateCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Powered by Our Infrastructure
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Your hashrate is backed by world-class mining facilities
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={100}>
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/1837.webp"
                  alt="Mining Containers"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">Mining Container Farm</h3>
                  <p className="text-cloud-mist/70">Modular, efficient, and scalable mining infrastructure</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-80 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/1942.webp"
                  alt="Solar Powered Mining"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-midnight-slate/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist mb-2">Sustainable Operations</h3>
                  <p className="text-cloud-mist/70">Solar-powered mining for eco-friendly hashrate</p>
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
            src="/images/2979.webp"
            alt="Facility Exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-core-blue/95 via-core-blue/80 to-midnight-slate/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-cloud-mist mb-2">
                Want to Own Your Hardware?
              </h3>
              <p className="text-cloud-mist/80 text-lg">
                Purchase ASIC miners for long-term ownership and full control over your mining operations.
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

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              What is Included
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Every hashrate purchase includes full service
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hashrateInclusions.map((item, index) => (
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
          alt="Data Center Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate via-midnight-slate/60 to-midnight-slate/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist/80 text-lg">Enterprise-grade mining infrastructure</p>
          </div>
        </div>
      </section>
    </>
  )
}
