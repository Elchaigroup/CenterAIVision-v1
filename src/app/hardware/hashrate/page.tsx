'use client'

import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { HashrateCard } from '@/components/sections/hashrate-card'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { hashratePlans, hashrateInclusions } from '@/data/hashrate-plans'

export default function HashratePage() {
  return (
    <>
      <PageHeader
        title="Buy Hashrate"
        subtitle="Purchase dedicated mining hashrate from our enterprise infrastructure. No hardware maintenance required."
      />

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
              <FadeIn key={plan.id} delay={index * 100}>
                <HashrateCard plan={plan} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Banner */}
      <section className="py-12 bg-core-blue/20 border-y border-electric-azure/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                Want to Own Your Hardware?
              </h3>
              <p className="text-cloud-mist/70">
                Purchase ASIC miners for long-term ownership and full control over your mining operations.
              </p>
            </div>
            <Link href="/hardware/miners">
              <Button variant="primary">
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
              <FadeIn key={item.title} delay={index * 100}>
                <Card hover={false} className="h-full">
                  <CardContent>
                    <h3 className="text-lg font-semibold text-cloud-mist mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cloud-mist/70">
                      {item.description}
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
