'use client'

import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const resources = [
  {
    title: 'Investment Calculators',
    description: 'Calculate potential returns on mining contracts and GPU compute investments.',
    href: '/calculators',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mining Documentation',
    description: 'Complete guides on Bitcoin mining operations, hardware setup, and optimization.',
    href: '#',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'GPU Compute Guides',
    description: 'Learn how to deploy AI workloads on our enterprise NVIDIA GPU infrastructure.',
    href: '#',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'API Documentation',
    description: 'Integrate our services into your applications with our comprehensive API.',
    href: '#',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Support Center',
    description: '24/7 technical support and customer service for all your needs.',
    href: '#',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Security & Compliance',
    description: 'Learn about our enterprise-grade security measures and compliance certifications.',
    href: '#',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Support Available' },
  { value: 'Instant', label: 'Activation' },
  { value: 'Secure', label: 'Enterprise Infrastructure' },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-core-blue/20 via-midnight-slate to-midnight-slate" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-azure/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
                Resources & Media
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight">
                Explore Our
                <span className="block bg-gradient-to-r from-electric-azure to-blue-400 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
              <p className="mt-6 text-lg text-cloud-mist/70 max-w-2xl mx-auto">
                Discover our state-of-the-art data centers, platform capabilities, and comprehensive
                resources to help you maximize your investments.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative py-8 border-y border-electric-azure/10 bg-card-bg/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-electric-azure">{stat.value}</div>
                  <div className="mt-1 text-sm text-cloud-mist/60">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                See Our Infrastructure in Action
              </h2>
              <p className="mt-4 text-cloud-mist/60 max-w-2xl mx-auto">
                Take a virtual tour of our world-class data centers and explore our intuitive platform.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Datacenter Video */}
            <FadeIn delay={100}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-azure/50 to-core-blue/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Card variant="glass" className="relative overflow-hidden" spotlight={false} hover={false}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1160179403?badge=0&autopause=0&player_id=0&app_id=58479&background=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 w-full h-full"
                        title="CenterAiVision DataCenter"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-electric-azure/10">
                          <svg className="w-5 h-5 text-electric-azure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-electric-azure uppercase tracking-wider">Data Center Tour</span>
                      </div>
                      <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                        World-Class Mining Facility
                      </h3>
                      <p className="text-cloud-mist/60 text-sm">
                        Explore our state-of-the-art data center featuring advanced cooling systems,
                        redundant power infrastructure, and enterprise mining rigs operating 24/7.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            {/* Platform Video */}
            <FadeIn delay={200}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-core-blue/50 to-electric-azure/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Card variant="glass" className="relative overflow-hidden" spotlight={false} hover={false}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                      <iframe
                        src="https://player.vimeo.com/video/1160180165?badge=0&autopause=0&player_id=0&app_id=58479&background=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 w-full h-full"
                        title="Platform Center AI Vision"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-electric-azure/10">
                          <svg className="w-5 h-5 text-electric-azure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-electric-azure uppercase tracking-wider">Platform Demo</span>
                      </div>
                      <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                        Intuitive Investment Platform
                      </h3>
                      <p className="text-cloud-mist/60 text-sm">
                        See how our platform makes it easy to manage your mining contracts,
                        track performance, and monitor your returns in real-time.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-gradient-to-b from-transparent via-card-bg/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                Resources & Documentation
              </h2>
              <p className="mt-4 text-cloud-mist/60 max-w-2xl mx-auto">
                Everything you need to get started and succeed with Center AI Vision.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <FadeIn key={resource.title} delay={index * 100}>
                <Link href={resource.href} className="block h-full group">
                  <Card
                    variant="glass"
                    className="h-full transition-all duration-300 group-hover:border-electric-azure/30"
                    spotlight={false}
                  >
                    <CardContent className="flex flex-col h-full">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-electric-azure/20 to-core-blue/20 w-fit mb-4 text-electric-azure group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-cloud-mist mb-2 group-hover:text-electric-azure transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-cloud-mist/60 text-sm flex-grow">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex items-center text-electric-azure text-sm font-medium">
                        <span>Learn more</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-core-blue via-electric-azure/80 to-core-blue" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

              <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-cloud-mist/80 text-lg max-w-2xl mx-auto mb-8">
                  Trust Center AI Vision for your Bitcoin mining
                  and AI compute needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/compute/mining">
                    <Button variant="primary" size="lg" className="bg-cloud-mist text-midnight-slate hover:bg-cloud-mist/90">
                      Start Mining Today
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="border-cloud-mist/30 text-cloud-mist hover:border-cloud-mist">
                      Learn About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
