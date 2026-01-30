'use client'

import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { GPUHardwareCard } from '@/components/sections/gpu-card'
import { Card } from '@/components/ui/card'
import { gpuHardwareProducts } from '@/data/gpu-products'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function GPUHardwarePage() {
  return (
    <>
      <PageHeader
        title="Buy AI GPU Hardware"
        subtitle="Invest in enterprise NVIDIA GPU infrastructure with managed hosting, guaranteed uptime, and monthly profit distributions."
      />

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
              <FadeIn key={gpu.id} delay={index * 100}>
                <GPUHardwareCard gpu={gpu} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-card-bg/50">
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
              <FadeIn key={benefit.title} delay={index * 150}>
                <Card hover={false} className="h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cloud-mist mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-cloud-mist/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
