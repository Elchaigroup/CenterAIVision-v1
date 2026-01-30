'use client'

import { CounterUp, Reveal } from '@/components/ui/animations'
import { miningKPIs } from '@/data/mining-plans'

export function KPIStrip() {
  return (
    <Reveal>
      <section className="bg-card-bg border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {miningKPIs.map((kpi, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cloud-mist mb-1">
                  <CounterUp
                    end={kpi.value}
                    duration={2000}
                    decimals={kpi.decimals || 0}
                    suffix={kpi.suffix}
                  />
                </div>
                <div className="text-sm text-cloud-mist/60">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
