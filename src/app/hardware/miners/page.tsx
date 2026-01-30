'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { ASICCard } from '@/components/sections/asic-card'
import { Card, CardContent } from '@/components/ui/card'
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
      <PageHeader
        title="Buy ASIC Miners"
        subtitle="Enterprise-grade Bitcoin mining hardware with free shipping and full warranty coverage."
      />

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
              <FadeIn key={miner.id} delay={index * 100}>
                <ASICCard miner={miner} />
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
                Looking for a Managed Investment?
              </h3>
              <p className="text-cloud-mist/70">
                Consider our AI GPU Hardware Investment for higher returns with zero maintenance.
              </p>
            </div>
            <Link href="/hardware/gpus">
              <Button variant="primary">
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
