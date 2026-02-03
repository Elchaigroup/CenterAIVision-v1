'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'

const minerData = {
  name: 'Antminer S23',
  brand: 'Bitmain',
  price: 4990,
  monthlyProfit: 920,
  roiMonths: 5.4,
  annualROI: 221,
  location: 'USA (Oregon)',
  revenueShare: '75% Owner / 25% Platform',
}

const specifications = [
  { label: 'Hashrate', value: '318 TH/s' },
  { label: 'Power Consumption', value: '3,498W' },
  { label: 'Energy Efficiency', value: '11 J/TH' },
  { label: 'Algorithm', value: 'SHA-256' },
  { label: 'Cooling', value: 'Air Cooled' },
  { label: 'Dimensions', value: '449 x 219 x 293 mm' },
  { label: 'Weight', value: '15.8 kg' },
  { label: 'Noise Level', value: '75 dB' },
  { label: 'Operating Temp', value: '5°C to 40°C' },
  { label: 'Interface', value: 'Ethernet' },
  { label: 'Release', value: 'May 2025' },
  { label: 'Warranty', value: '365 Days' },
]

const performanceMetrics = [
  { value: '318', label: 'TH/s Hashrate', description: 'SHA-256 mining power' },
  { value: '11', label: 'J/TH Efficiency', description: 'Best in class' },
  { value: `${minerData.annualROI}%`, label: 'Annual ROI', description: 'Expected returns' },
  { value: `${minerData.roiMonths}`, label: 'Months to ROI', description: 'Payback period' },
]

const keyFeatures = [
  {
    title: 'Best-in-Class Efficiency',
    description: 'Industry-leading 11 J/TH efficiency delivers the lowest operating costs of any air-cooled Bitcoin miner.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: '318 TH/s Mining Power',
    description: 'Next-generation hashrate delivers 69% more mining power compared to the popular S21 generation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Professional Hosting',
    description: 'Hosted in our enterprise data centers with optimal power rates and 24/7 monitoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Monthly Bitcoin Payouts',
    description: 'Receive your share of mining revenue directly to your wallet every month.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function S23Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    Available
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                    Best Efficiency
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  {minerData.brand}
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                    {minerData.name}
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  Invest in the most efficient air-cooled Bitcoin miner ever made. 318 TH/s hashrate with
                  groundbreaking 11 J/TH efficiency - fully hosted and managed for maximum returns.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href={`/waitlist?product=${minerData.name}`}>
                    <Button variant="primary" size="lg">
                      Invest Now
                    </Button>
                  </Link>
                  <Link href="/hardware/miners">
                    <Button variant="outline" size="lg">
                      Compare Miners
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-green-500/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-green-500/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://bitmars.io/wp-content/uploads/2025/05/BITMAIN-Antminer-S23-318T-BTC-Miner.png"
                      alt={`${minerData.brand} ${minerData.name}`}
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">318 TH/s | 11 J/TH | Air Cooled</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-green-500/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-cloud-mist">{metric.label}</div>
                  <div className="text-xs text-cloud-mist/50">{metric.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <Card variant="glass" className="h-full" spotlight={false}>
                <CardContent>
                  <h2 className="text-2xl font-bold text-cloud-mist mb-6">Investment Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">Investment Amount</span>
                      <span className="text-2xl font-bold text-electric-azure">{formatCurrency(minerData.price)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">Location</span>
                      <span className="text-cloud-mist font-medium">{minerData.location}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">Revenue Share</span>
                      <span className="text-cloud-mist font-medium">{minerData.revenueShare}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={100}>
              <Card variant="glass" className="h-full" spotlight={false}>
                <CardContent>
                  <h2 className="text-2xl font-bold text-cloud-mist mb-6">Expected Returns</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">Monthly Profit</span>
                      <span className="text-2xl font-bold text-positive">{formatCurrency(minerData.monthlyProfit)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">ROI Timeline</span>
                      <span className="text-cloud-mist font-medium">{minerData.roiMonths} months</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-card-border">
                      <span className="text-cloud-mist/70">Annual ROI</span>
                      <span className="text-2xl font-bold text-positive">{minerData.annualROI}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Why Invest in This Miner
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The Antminer S23 sets a new standard for Bitcoin mining efficiency,
                fully hosted and managed - you just collect the profits.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cloud-mist mb-2">{feature.title}</h3>
                      <p className="text-cloud-mist/60 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Technical Specifications
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                Complete specifications for the {minerData.name} Bitcoin miner.
              </p>
            </div>
          </Reveal>

          <FadeIn>
            <Card variant="glass" className="overflow-hidden" spotlight={false}>
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  {specifications.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between items-center px-6 py-4 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <span className="text-cloud-mist/70">{spec.label}</span>
                      <span className="text-cloud-mist font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 via-card-bg/50 to-green-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-bold text-cloud-mist mb-4">
              Ready to Start Mining Bitcoin?
            </h3>
            <p className="text-cloud-mist/60 mb-8">
              Invest in the {minerData.name} today and start earning {formatCurrency(minerData.monthlyProfit)}/month
            </p>
            <Link href={`/waitlist?product=${minerData.name}`}>
              <Button variant="primary" size="lg">
                Invest {formatCurrency(minerData.price)} Now
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
