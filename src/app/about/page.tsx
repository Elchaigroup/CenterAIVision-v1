'use client'

import { FadeIn, Reveal, CounterUp } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { value: 36, suffix: ' EH/s', label: 'Mining Hashrate' },
  { value: 85000, suffix: '', label: 'Active Miners' },
  { value: 12, suffix: '', label: 'Data Centers' },
  { value: 500, suffix: '+', label: 'Team Members' },
]

const values = [
  {
    title: 'Transparency',
    description: 'We believe in complete transparency in our operations, from mining metrics to financial reporting. Our investors have full visibility into their investments.',
  },
  {
    title: 'Sustainability',
    description: 'Committed to sustainable operations, we prioritize renewable energy sources and efficient cooling systems across all our data centers.',
  },
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries in both Bitcoin mining and AI compute infrastructure, leveraging the latest technologies for optimal performance.',
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security protocols protect our infrastructure and investor assets, with redundant systems and continuous monitoring.',
  },
]

const milestones = [
  { year: '2019', title: 'Company Founded', description: 'Center AI Vision established in Austin, Texas.' },
  { year: '2020', title: 'First Data Center', description: 'Launched our first mining facility with 5,000 miners.' },
  { year: '2022', title: 'AI Compute Division', description: 'Expanded into AI GPU compute infrastructure.' },
  { year: '2023', title: 'NASDAQ Listing', description: 'Successfully listed on NASDAQ under ticker CAIV.' },
  { year: '2024', title: 'Global Expansion', description: 'Opened data centers in Europe and expanded to 12 locations.' },
  { year: '2026', title: 'Next-Gen GPUs', description: 'First to deploy NVIDIA GB300 NVL72 at scale.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Center AI Vision"
        subtitle="On-demand AI compute powered by next-gen NVIDIA GPUs. Scalable, sustainable, transparent."
      />

      {/* Stats Section */}
      <section className="py-12 bg-card-bg/50 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cloud-mist mb-1">
                    <CounterUp
                      end={stat.value}
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-cloud-mist/60">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-cloud-mist/70 leading-relaxed mb-6">
                  Center AI Vision is dedicated to building and operating the infrastructure
                  that powers the future of digital assets and artificial intelligence. We
                  provide institutional-grade Bitcoin mining and AI compute solutions that
                  enable businesses and investors to participate in these transformative technologies.
                </p>
                <p className="text-lg text-cloud-mist/70 leading-relaxed">
                  Our commitment to operational excellence, sustainability, and transparency
                  sets us apart in an industry often characterized by opacity. We believe that
                  access to enterprise-grade infrastructure should be available to investors
                  of all sizes.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <Card hover={false} className="p-8 bg-gradient-to-br from-core-blue/20 to-transparent">
                <CardContent>
                  <blockquote className="text-xl text-cloud-mist/90 leading-relaxed italic">
                    &ldquo;We are building the foundation for the next era of computing,
                    where Bitcoin mining and AI workloads coexist in sustainable,
                    efficient data centers that serve investors worldwide.&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-card-border">
                    <div className="text-cloud-mist font-medium">Executive Team</div>
                    <div className="text-sm text-cloud-mist/60">Center AI Vision Inc.</div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Our Values
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              The principles that guide everything we do
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 100}>
                <Card hover={false} className="h-full">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-cloud-mist mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-cloud-mist/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Our Journey
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Key milestones in our growth
            </p>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="w-20 shrink-0">
                    <div className="text-2xl font-bold text-electric-azure">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-card-border pl-6 relative">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-electric-azure/30 border-2 border-electric-azure" />
                    <h3 className="text-lg font-semibold text-cloud-mist mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-cloud-mist/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-gradient-to-b from-core-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cloud-mist mb-4">
                Global Infrastructure
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                Our data centers span North America and Europe, strategically located
                for optimal connectivity and access to renewable energy sources.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'North America',
                locations: '8 Data Centers',
                capacity: '28 EH/s Mining | 50,000 GPUs',
              },
              {
                region: 'Europe',
                locations: '4 Data Centers',
                capacity: '8 EH/s Mining | 15,000 GPUs',
              },
              {
                region: 'Coming Soon',
                locations: 'Asia Pacific',
                capacity: 'Expansion planned for 2027',
              },
            ].map((region, index) => (
              <FadeIn key={region.region} delay={index * 150}>
                <Card hover={false} className="text-center">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-cloud-mist mb-2">
                      {region.region}
                    </h3>
                    <div className="text-electric-azure font-medium mb-1">
                      {region.locations}
                    </div>
                    <div className="text-sm text-cloud-mist/60">
                      {region.capacity}
                    </div>
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
