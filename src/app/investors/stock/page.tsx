'use client'

import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { StockChart } from '@/components/sections/stock-chart'
import { stockInfo, companyEvents, companyHighlights } from '@/data/stock-data'
import { cn } from '@/lib/utils'

export default function StockInformationPage() {
  const isPositive = stockInfo.change >= 0

  return (
    <>
      <PageHeader
        title="Stock Information"
        subtitle="CAIV - Center AI Vision Inc. on NASDAQ"
      />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Price Overview */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Price Card */}
            <FadeIn className="lg:col-span-2">
              <Card hover={false}>
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-cloud-mist/60 mb-1">
                        {stockInfo.symbol}
                      </div>
                      <div className="text-4xl font-bold text-cloud-mist">
                        ${stockInfo.price.toFixed(2)}
                      </div>
                      <div className={cn(
                        'text-lg font-medium mt-1',
                        isPositive ? 'text-positive' : 'text-negative'
                      )}>
                        {isPositive ? '+' : ''}{stockInfo.change.toFixed(2)} ({isPositive ? '+' : ''}{stockInfo.changePercent.toFixed(2)}%)
                      </div>
                    </div>
                    <div className="text-sm text-cloud-mist/60">
                      As of market close
                    </div>
                  </div>
                  <StockChart />
                </CardContent>
              </Card>
            </FadeIn>

            {/* Key Metrics */}
            <FadeIn delay={200}>
              <Card hover={false} className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-6">
                    Key Metrics
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Market Cap', value: `$${stockInfo.marketCap}` },
                      { label: 'P/E Ratio', value: stockInfo.peRatio.toFixed(1) },
                      { label: '52-Week High', value: `$${stockInfo.high52Week.toFixed(2)}` },
                      { label: '52-Week Low', value: `$${stockInfo.low52Week.toFixed(2)}` },
                      { label: 'Volume', value: stockInfo.volume },
                      { label: 'Avg Volume', value: stockInfo.avgVolume },
                      { label: 'EPS', value: `$${stockInfo.eps.toFixed(2)}` },
                      { label: 'Dividend', value: stockInfo.dividend },
                    ].map((metric) => (
                      <div key={metric.label} className="flex justify-between">
                        <span className="text-sm text-cloud-mist/60">{metric.label}</span>
                        <span className="text-sm font-medium text-cloud-mist">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Company Info & Events */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Company Highlights */}
            <Reveal>
              <Card hover={false} className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-6">
                    Company Highlights
                  </h3>
                  <ul className="space-y-4">
                    {companyHighlights.map((highlight, index) => (
                      <li key={index} className="text-cloud-mist/80 text-sm leading-relaxed pl-4 border-l-2 border-electric-azure/50">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            {/* Upcoming Events */}
            <Reveal>
              <Card hover={false} className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-6">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {companyEvents.map((event, index) => (
                      <div key={index} className="p-4 bg-midnight-slate/50 rounded-lg border border-card-border/50">
                        <div className="text-xs text-electric-azure mb-1">{event.type}</div>
                        <div className="text-sm font-medium text-cloud-mist">{event.title}</div>
                        <div className="text-sm text-cloud-mist/60 mt-1">{event.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* About Section */}
          <Reveal>
            <Card hover={false} className="mt-8">
              <CardContent>
                <h3 className="text-lg font-semibold text-cloud-mist mb-4">
                  About Center AI Vision Inc.
                </h3>
                <p className="text-cloud-mist/70 leading-relaxed">
                  Center AI Vision Inc. is a leading provider of Bitcoin mining infrastructure and
                  AI compute solutions. The company operates enterprise-grade data centers across
                  North America and Europe, delivering institutional-quality technology for digital
                  asset mining and artificial intelligence workloads. With a commitment to sustainable
                  operations and renewable energy, Center AI Vision is positioned at the intersection
                  of cryptocurrency and AI infrastructure.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-card-border">
                  <div>
                    <div className="text-sm text-cloud-mist/60 mb-1">Headquarters</div>
                    <div className="text-sm font-medium text-cloud-mist">Austin, Texas</div>
                  </div>
                  <div>
                    <div className="text-sm text-cloud-mist/60 mb-1">Founded</div>
                    <div className="text-sm font-medium text-cloud-mist">2019</div>
                  </div>
                  <div>
                    <div className="text-sm text-cloud-mist/60 mb-1">Employees</div>
                    <div className="text-sm font-medium text-cloud-mist">500+</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}
