'use client'

import Image from 'next/image'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { MiningCard } from '@/components/sections/mining-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { Card, CardContent } from '@/components/ui/card'
import { miningPlans, miningFeatures, miningSteps } from '@/data/mining-plans'

export default function BitcoinMiningPage() {
  return (
    <>
      <PageHeader
        title="Bitcoin Cloud Mining"
        subtitle="Professional Bitcoin mining infrastructure with guaranteed uptime, daily payouts, and transparent reporting."
      />

      {/* Hero Image Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/1837.webp"
          alt="Bitcoin Mining Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate via-midnight-slate/60 to-midnight-slate" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist text-lg md:text-xl font-medium">
              Join 85,000+ active miners earning Bitcoin daily
            </p>
            <p className="text-electric-azure mt-2">Enterprise-grade infrastructure</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              How It Works
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Start mining Bitcoin in three simple steps
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {miningSteps.map((step, index) => (
              <FeatureCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mining Plans */}
      <section className="py-20 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Mining Plans
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Choose a plan that fits your investment goals
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningPlans.map((plan, index) => (
              <MiningCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Why Choose Our Mining Infrastructure
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Enterprise-grade technology designed for maximum efficiency
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miningFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-12">
              Our Mining Facilities
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={100}>
              <div className="relative h-72 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/1942.webp"
                  alt="Mining Container Farm"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist">Container Mining Farm</h3>
                  <p className="text-cloud-mist/70 mt-1">Modular, scalable mining infrastructure</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-72 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2453.webp"
                  alt="Solar Powered Facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist">Solar-Powered Operations</h3>
                  <p className="text-cloud-mist/70 mt-1">Sustainable energy for efficient mining</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
