'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'

const minerData = {
  name: 'Avalon A1566',
  brand: 'Canaan',
  price: 4800,
  monthlyProfit: 720,
  roiMonths: 6.7,
  annualROI: 180,
  location: 'Iceland',
  revenueShare: '75% Owner / 25% Platform',
}

const specifications = [
  { label: 'Hashrate', value: '200 TH/s' },
  { label: 'Power Consumption', value: '3,200W' },
  { label: 'Energy Efficiency', value: '16 J/TH' },
  { label: 'Algorithm', value: 'SHA-256' },
  { label: 'Cooling', value: 'Air / Immersion Ready' },
  { label: 'Dimensions', value: '410 x 170 x 282 mm' },
  { label: 'Weight', value: '13.2 kg' },
  { label: 'Noise Level', value: '75 dB' },
  { label: 'Operating Temp', value: '0°C to 40°C' },
  { label: 'Input Voltage', value: '200V - 277V' },
  { label: 'Interface', value: 'Ethernet' },
  { label: 'Warranty', value: '180 Days' },
]

const performanceMetrics = [
  { value: '200', label: 'TH/s Hashrate', description: 'SHA-256 mining power' },
  { value: '16', label: 'J/TH Efficiency', description: 'Efficient operation' },
  { value: `${minerData.annualROI}%`, label: 'Annual ROI', description: 'Expected returns' },
  { value: `${minerData.roiMonths}`, label: 'Months to ROI', description: 'Payback period' },
]

const keyFeatures = [
  {
    title: 'Immersion Ready Design',
    description: 'Designed for both air cooling and immersion cooling, offering flexibility for advanced mining operations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Canaan Quality',
    description: 'Built by Canaan, the original Bitcoin ASIC manufacturer with proven track record since 2013.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Professional Hosting',
    description: 'Hosted in our Iceland data center with renewable geothermal energy and optimal cooling.',
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

export default function AvalonA1566Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
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
                  <span className="px-3 py-1 text-xs font-semibold bg-teal-500/20 text-teal-400 rounded-full border border-teal-500/30">
                    Immersion Ready
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight mb-4">
                  {minerData.brand}
                  <span className="block bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                    {minerData.name}
                  </span>
                </h1>

                <p className="text-xl text-cloud-mist/70 mb-8 leading-relaxed">
                  Versatile Bitcoin miner designed for both air and immersion cooling.
                  Invest in 200+ TH/s hashrate with flexible deployment options.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href={`/waitlist?product=${minerData.brand} ${minerData.name}`}>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl border border-teal-500/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-teal-500/20 blur-3xl" />

                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://res.cloudinary.com/dluwgr5op/image/upload/e_background_removal/e_trim/c_limit,w_3840/f_auto/q_85/sbvjysji3pf3yw905t0i"
                      alt={`${minerData.brand} ${minerData.name}`}
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>

                  <div className="p-4 text-center border-t border-white/5">
                    <p className="text-sm text-cloud-mist/60">200 TH/s | 16 J/TH | Air/Immersion</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 border-y border-teal-500/10 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20">
                Center AI Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Why Invest in This Miner
              </h2>
              <p className="text-cloud-mist/60 max-w-3xl mx-auto text-lg">
                The Canaan Avalon A1566 offers unique flexibility with support for both traditional
                air cooling and advanced immersion cooling deployments.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <Card variant="glass" className="h-full" spotlight={false}>
                  <CardContent className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-teal-400 h-fit">
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
                Complete specifications for the {minerData.brand} {minerData.name}.
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
      <section className="py-16 bg-gradient-to-r from-teal-500/10 via-card-bg/50 to-teal-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-bold text-cloud-mist mb-4">
              Ready to Start Mining Bitcoin?
            </h3>
            <p className="text-cloud-mist/60 mb-8">
              Invest in the {minerData.name} today and start earning {formatCurrency(minerData.monthlyProfit)}/month
            </p>
            <Link href={`/waitlist?product=${minerData.brand} ${minerData.name}`}>
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
