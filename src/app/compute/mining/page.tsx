'use client'

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

      {/* Banner */}
      <section className="bg-core-blue/20 border-b border-electric-azure/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-cloud-mist">
            Join 85,000+ active miners earning Bitcoin daily with our enterprise-grade infrastructure
          </p>
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
              <FadeIn key={step.step} delay={index * 150}>
                <FeatureCard
                  step={step.step}
                  title={step.title}
                  description={step.description}
                />
              </FadeIn>
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
              <FadeIn key={plan.id} delay={index * 100}>
                <MiningCard plan={plan} />
              </FadeIn>
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
              <FadeIn key={feature.title} delay={index * 100}>
                <Card hover={false} className="h-full">
                  <CardContent>
                    <h3 className="text-lg font-semibold text-cloud-mist mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cloud-mist/70">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
