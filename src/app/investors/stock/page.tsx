'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { StockChart } from '@/components/sections/stock-chart'
import { stockInfo, companyEvents, companyHighlights } from '@/data/stock-data'
import { GradientText } from '@/components/ui/gradient-text'
import { Magnet } from '@/components/ui/magnet'
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
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card tilt>
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-electric-azure mb-1">
                        {stockInfo.symbol}
                      </div>
                      <div className="text-4xl font-bold">
                        <GradientText colors={['#E8EDF3', '#2C93FF', '#E8EDF3']} animationSpeed={6}>
                          ${stockInfo.price.toFixed(2)}
                        </GradientText>
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
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card tilt className="h-full">
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
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        className="flex justify-between p-2 -mx-2 rounded hover:bg-electric-azure/5 transition-colors"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      >
                        <span className="text-sm text-cloud-mist/60">{metric.label}</span>
                        <span className="text-sm font-medium text-cloud-mist">{metric.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Company Info & Events */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Company Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card tilt className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-6">
                    Company Highlights
                  </h3>
                  <ul className="space-y-4">
                    {companyHighlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="text-cloud-mist/80 text-sm leading-relaxed pl-4 border-l-2 border-electric-azure/50 hover:border-electric-azure transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card tilt className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-6">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {companyEvents.map((event, index) => (
                      <Magnet key={index} padding={40} magnetStrength={5}>
                        <motion.div
                          className="p-4 bg-midnight-slate/50 rounded-lg border border-electric-azure/20 hover:border-electric-azure/40 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-xs text-electric-azure mb-1">{event.type}</div>
                          <div className="text-sm font-medium text-cloud-mist">{event.title}</div>
                          <div className="text-sm text-cloud-mist/60 mt-1">{event.date}</div>
                        </motion.div>
                      </Magnet>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card tilt>
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
                <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-electric-azure/20">
                  {[
                    { label: 'Headquarters', value: 'Austin, Texas' },
                    { label: 'Founded', value: '2019' },
                    { label: 'Employees', value: '500+' },
                  ].map((item, index) => (
                    <Magnet key={item.label} padding={40} magnetStrength={5}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="text-sm text-cloud-mist/60 mb-1">{item.label}</div>
                        <div className="text-sm font-medium">
                          <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
                            {item.value}
                          </GradientText>
                        </div>
                      </motion.div>
                    </Magnet>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}
