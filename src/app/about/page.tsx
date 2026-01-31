'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { GradientText } from '@/components/ui/gradient-text'
import {
  Server,
  RefreshCw,
  Globe,
  Shield,
  Landmark,
  FileCheck,
  AlertTriangle
} from 'lucide-react'

const pillars = [
  {
    icon: Server,
    title: 'Deploy and operate world-class AI compute',
    description: 'We plan staged deployments of up to approximately 238,030 accelerator units across H200-class and next-generation platforms, including NVIDIA Blackwell and approved alternatives, subject to power delivery, supply availability, and export licensing.',
    details: 'We target Tier III design standards (or equivalent), high-density liquid cooling, and an availability target aligned with Tier III benchmarks (commonly cited as 99.982%), with uptime defined contractually per customer SLA.',
  },
  {
    icon: RefreshCw,
    title: 'Execute a disciplined build-and-refresh technology roadmap',
    description: 'We start with proven H200-class platforms, add next-generation architectures such as Blackwell, and keep flexibility via approved alternatives where they make economic and technical sense.',
    details: 'We plan a 3-year hardware refresh cycle to stay competitive on performance and efficiency.',
  },
  {
    icon: Globe,
    title: 'Scale globally using local operating entities',
    description: 'We can establish local SPVs by jurisdiction to support regulatory alignment and local contracting, including EU readiness for GDPR and EU AI Act staged obligations (through August 2026 where applicable).',
    details: '',
  },
]

const governance = [
  {
    icon: Shield,
    title: 'Governance Boundaries',
    items: [
      'Center AI Vision runs operations: we execute the program, hold assets and contracts, and generate operating cashflow.',
      'We do not issue investor equity, maintain shareholder registers, or admit investors.',
      'The Universe Eye controls issuance, transfers, and investor governance at HoldCo level, and maintains the statutory register and a mirrored digital registry for audit trail purposes.',
    ],
  },
  {
    icon: Landmark,
    title: 'Fund Flow Discipline',
    items: [
      'Investors initiate fiat wire transfers to a regulated escrow structure.',
      'Escrow releases funds only after milestone verification (for example: executed purchase orders or site readiness).',
      'Center AI Vision receives verified releases to run operations and pays vendors/OEMs for hardware assets.',
      'Movements are tracked for transparency via the digital registry maintained by The Universe Eye (audit trail use).',
    ],
  },
  {
    icon: FileCheck,
    title: 'Compliance Principles',
    items: [
      'We apply "bank-grade" onboarding and fiat-only rails for the overall structure.',
      'SWIFT bank wire only — no crypto payments.',
      'We support governance controls such as board approvals and transfer restrictions at HoldCo level.',
      'We focus on operational execution and reporting.',
    ],
  },
]

const team = [
  {
    name: 'Stefano Curzio',
    role: 'CEO',
    responsibility: 'Owns overall execution, delivery, and operating performance.',
    image: '/members/StefanoCurzio.webp',
  },
  {
    name: 'Sukhchain Singh',
    role: 'CTO',
    responsibility: 'Owns platform architecture, infrastructure engineering, and security-by-design.',
    image: '/members/Sukhchain_Singh1.webp',
  },
  {
    name: 'Giorgia Cristina',
    role: 'Financial Analyst',
    responsibility: 'Owns financial modeling support, budget discipline, and operating reporting.',
    image: '/members/GIORGIA-CRISTINA.webp',
  },
  {
    name: 'Charles David',
    role: 'Head of AI',
    responsibility: 'Owns AI workload strategy, customer requirements translation, and performance benchmarking.',
    image: '/members/Charles-David-David.webp',
  },
  {
    name: 'Jasna Ali',
    role: 'IT Project Manager',
    responsibility: 'Owns delivery planning, vendor coordination, timelines, and execution governance.',
    image: '/members/JASNA.webp',
  },
  {
    name: 'Diana Guevarra',
    role: 'Business Manager (UAE)',
    responsibility: 'Owns UAE business operations support, partnerships, and local execution coordination.',
    image: '/members/DIANA.webp',
  },
  {
    name: 'Angela Cordella',
    role: 'Business Manager (EU)',
    responsibility: 'Owns EU business operations support, partnerships, and local compliance coordination.',
    image: '/members/ANGELA.webp',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Center AI Vision"
        subtitle="The operating SPV executing the Global AI Compute Infrastructure Program"
      />

      {/* Hero Introduction */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-azure/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-cloud-mist/80 leading-relaxed mb-8">
                Center AI Vision is the operating special purpose vehicle (SPV) that executes and runs
                the <span className="text-electric-azure font-medium">Global AI Compute Infrastructure Program</span>.
                We hold the operating assets and contracts, generate revenues from deployed compute, and
                deliver the program through staged deployments starting from Q2 2026.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card-bg border border-electric-azure/20">
                <div className="w-2 h-2 rounded-full bg-electric-azure animate-pulse" />
                <span className="text-cloud-mist/70 text-sm">
                  We work alongside <span className="text-cloud-mist font-medium">The Universe Eye</span>,
                  which acts as the HoldCo, issuer, governance layer, and registry owner.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do - 3 Pillars */}
      <section className="py-20 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <GradientText
                colors={['#2C93FF', '#60B5FF', '#2C93FF']}
                animationSpeed={4}
                className="text-sm font-semibold uppercase tracking-wider mb-3 block"
              >
                What We Do
              </GradientText>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                Our Core Operations
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full group hover:border-electric-azure/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-azure/20 to-electric-azure/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-7 h-7 text-electric-azure" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-electric-azure/40">{index + 1}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-electric-azure/20 to-transparent" />
                    </div>
                    <h3 className="text-lg font-semibold text-cloud-mist mb-4 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-cloud-mist/70 text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    {pillar.details && (
                      <p className="text-cloud-mist/50 text-sm leading-relaxed border-t border-card-border pt-4">
                        {pillar.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <GradientText
                colors={['#2C93FF', '#60B5FF', '#2C93FF']}
                animationSpeed={4}
                className="text-sm font-semibold uppercase tracking-wider mb-3 block"
              >
                How We Operate
              </GradientText>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist">
                Governance & Compliance Framework
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {governance.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="sticky top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-electric-azure/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-electric-azure" />
                    </div>
                    <h3 className="text-lg font-semibold text-cloud-mist">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-azure mt-2 shrink-0" />
                        <p className="text-sm text-cloud-mist/70 leading-relaxed">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cloud-mist mb-2">
                    Important Note on Projections
                  </h3>
                  <p className="text-cloud-mist/70 text-sm leading-relaxed">
                    Any financial metrics, return targets, and model outputs are illustrative and not guarantees.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-card-bg/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <GradientText
                colors={['#2C93FF', '#60B5FF', '#2C93FF']}
                animationSpeed={4}
                className="text-sm font-semibold uppercase tracking-wider mb-3 block"
              >
                Our Team
              </GradientText>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-4">
                Leadership & Team
              </h2>
              <p className="text-cloud-mist/60 max-w-2xl mx-auto">
                The people driving operational excellence and program delivery
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="group overflow-hidden hover:border-electric-azure/40 transition-all duration-300">
                  <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-electric-azure/10 to-core-blue/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-ink via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-5 relative -mt-16 z-10">
                    <div className="bg-card-bg/95 backdrop-blur-sm rounded-xl p-4 border border-card-border">
                      <h3 className="font-semibold text-cloud-mist mb-1">
                        {member.name}
                      </h3>
                      <GradientText
                        colors={['#2C93FF', '#60B5FF', '#2C93FF']}
                        animationSpeed={4}
                        className="text-sm font-medium block mb-2"
                      >
                        {member.role}
                      </GradientText>
                      <p className="text-xs text-cloud-mist/60 leading-relaxed">
                        {member.responsibility}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
