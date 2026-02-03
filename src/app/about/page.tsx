'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { TeamCarousel } from '@/components/ui/team-carousel'
import {
  Server,
  RefreshCw,
  Globe,
  Shield,
  Landmark,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Target,
  Zap
} from 'lucide-react'

// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

// Data
const coreOperations = [
  {
    icon: Server,
    title: 'Deploy World-Class AI Compute',
    bullets: [
      'Up to 238,030 accelerator units (H200 & Blackwell)',
      'Tier III design standards with 99.982% availability target',
      'High-density liquid cooling infrastructure'
    ],
    keyPoint: 'Q2 2026 staged deployment',
    anchor: 'governance'
  },
  {
    icon: RefreshCw,
    title: 'Disciplined Technology Roadmap',
    bullets: [
      'Start with proven H200-class platforms',
      'Add Blackwell and approved alternatives',
      '3-year hardware refresh cycle'
    ],
    keyPoint: 'Performance & efficiency focus',
    anchor: 'fund-flow'
  },
  {
    icon: Globe,
    title: 'Global Operating Entities',
    bullets: [
      'Local SPVs by jurisdiction as required',
      'EU readiness for GDPR and AI Act',
      'Regulatory alignment and local contracting'
    ],
    keyPoint: 'Multi-jurisdiction support',
    anchor: 'compliance'
  }
]

const governanceData = [
  {
    id: 'governance',
    icon: Shield,
    title: 'Governance Boundaries',
    items: [
      'Center AI Vision executes the program, holds assets and contracts, generates operating cashflow',
      'We do not issue investor equity, maintain shareholder registers, or admit investors',
      'The Universe Eye controls issuance, transfers, and investor governance at HoldCo level'
    ]
  },
  {
    id: 'fund-flow',
    icon: Landmark,
    title: 'Fund Flow Discipline',
    items: [
      'Capital deployment follows milestone-based escrow approach',
      'Escrow releases only after milestone verification',
      'Movements tracked via digital registry for audit trail'
    ]
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance Principles',
    items: [
      '"Bank-grade" onboarding and fiat-only rails',
      'SWIFT bank wire only — no crypto payments',
      'Board approvals and transfer restrictions at HoldCo level'
    ]
  }
]

const fundFlowSteps = [
  { step: 1, label: 'Investor fiat wire to escrow' },
  { step: 2, label: 'Milestone verification' },
  { step: 3, label: 'Release to operating SPV' },
  { step: 4, label: 'Audit trail in registry' }
]

const journeyTimeline = [
  {
    year: '2022',
    title: 'Foundation & Market Entry',
    description: 'Official company establishment, license registration, and market analysis to identify strategic opportunities in AI infrastructure.',
    status: 'completed' as const,
  },
  {
    year: '2023',
    title: 'Research & Strategic Planning',
    description: 'Conducted technical research, infrastructure planning, and initiated partnerships with key technology and investment stakeholders.',
    status: 'completed' as const,
  },
  {
    year: '2024',
    title: 'Validation & Investor Preparation',
    description: 'Completed proof-of-concept testing, finalized the business model, and prepared comprehensive investor documentation and financial projections.',
    status: 'completed' as const,
  },
  {
    year: '2025',
    title: 'SPV Fundraising & Operational Launch',
    description: 'Initiated Special Purpose Vehicle (SPV) fundraising round and began full-scale construction, procurement, and operational activities for AI data centers.',
    status: 'current' as const,
  },
  {
    year: '2026',
    title: 'Launch of 200 MW AI Facility',
    description: 'Successfully launching our flagship 200 MW AI data center facility, marking a significant milestone in global operational capacity.',
    status: 'upcoming' as const,
  },
  {
    year: '2027',
    title: 'Continued Global Expansion',
    description: 'Strategically expanding infrastructure, forging new partnerships, and advancing toward our ambitious growth targets.',
    status: 'upcoming' as const,
  },
]

const team = [
  {
    name: 'Stefano Curzio',
    role: 'CEO',
    responsibility: 'Owns overall execution, delivery, and operating performance.',
    image: '/members/StefanoCurzio.webp',
    linkedin: 'https://www.linkedin.com/in/stefanocurzio/'
  },
  {
    name: 'Sukhchain Singh',
    role: 'CTO',
    responsibility: 'Owns platform architecture, infrastructure engineering, and security-by-design.',
    image: '/members/Sukhchain_Singh1.webp',
    linkedin: 'https://www.linkedin.com/in/sukhchainsingh/'
  },
  {
    name: 'Giorgia Cristina',
    role: 'Financial Analyst',
    responsibility: 'Owns financial modeling support, budget discipline, and operating reporting.',
    image: '/members/GIORGIA-CRISTINA.webp',
    linkedin: 'https://www.linkedin.com/in/giorgia-cristina-panico-7b4a1b171/'
  },
  {
    name: 'Charles David',
    role: 'Head of AI',
    responsibility: 'Owns AI workload strategy, customer requirements translation, and performance benchmarking.',
    image: '/members/Charles-David-David.webp',
    linkedin: 'https://www.linkedin.com/in/charlesaarondavid/'
  },
  {
    name: 'Jasna Ali',
    role: 'IT Project Manager',
    responsibility: 'Owns delivery planning, vendor coordination, timelines, and execution governance.',
    image: '/members/JASNA.webp',
    linkedin: 'https://www.linkedin.com/in/jasna-ali-2067111a1/'
  },
  {
    name: 'Diana Guevarra',
    role: 'Business Manager',
    responsibility: 'Owns UAE business operations support, partnerships, and local execution coordination.',
    image: '/members/DIANA.webp',
    tag: 'UAE' as const,
    linkedin: 'https://www.linkedin.com/in/dianna-rose-guevarra-1007a3221/'
  },
  {
    name: 'Angela Cordella',
    role: 'Business Manager',
    responsibility: 'Owns EU business operations support, partnerships, and local compliance coordination.',
    image: '/members/ANGELA.webp',
    tag: 'EU' as const,
    linkedin: 'https://www.linkedin.com/in/angela-cordella-69112739b/'
  }
]

// Section wrapper component for consistent spacing
function Section({
  children,
  className = '',
  id
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-22 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

// Section header component
function SectionHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-cloud-mist leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-cloud-mist/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default function AboutPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Radial gradients */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-azure/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-core-blue/[0.05] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-azure bg-electric-azure/10 rounded-full border border-electric-azure/20">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-azure animate-pulse" />
              Operating SPV
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-cloud-mist leading-[1.1] mb-4"
          >
            About Center AI Vision
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-center text-cloud-mist/70 mb-8"
          >
            Executing the Global AI Compute Infrastructure Program
          </motion.p>

          {/* Intro paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-center text-cloud-mist/60 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Center AI Vision is the operating special purpose vehicle (SPV) that executes and runs
            the Global AI Compute Infrastructure Program. We hold the operating assets and contracts,
            generate revenues from deployed compute, and deliver the program through staged
            deployments starting from Q2 2026. We work alongside{' '}
            <span className="text-cloud-mist font-medium">The Universe Eye</span>, which acts as the
            HoldCo, issuer, governance layer, and registry owner.
          </motion.p>

        </motion.div>
      </Section>

      {/* Company Journey Timeline Section */}
      <Section className="relative overflow-hidden">
        <SectionHeader
          eyebrow="Our Journey"
          title="Company Timeline"
          subtitle="From foundation to global expansion — our path to becoming a leader in AI infrastructure"
        />

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="relative min-w-max">
              {/* Horizontal Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-azure/10 via-electric-azure/40 to-electric-azure/10" />

              {/* Timeline Items */}
              <div className="flex gap-4 md:gap-6">
                {journeyTimeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex flex-col items-center w-[200px] md:w-[220px] flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Year Badge */}
                    <motion.div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 cursor-pointer ${
                        item.status === 'completed'
                          ? 'bg-electric-azure/20 border-electric-azure text-electric-azure'
                          : item.status === 'current'
                          ? 'bg-positive/20 border-positive text-positive'
                          : 'bg-card-bg border-cloud-mist/30 text-cloud-mist/60'
                      }`}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {item.status === 'current' && (
                        <span className="absolute inset-0 rounded-full bg-positive/30 animate-ping" />
                      )}
                      <span className="relative">{item.year}</span>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className="mt-6 w-full group"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Card
                        className={`relative h-full transition-all duration-300 border ${
                          item.status === 'completed'
                            ? 'border-electric-azure/20 hover:border-electric-azure/40 hover:shadow-lg hover:shadow-electric-azure/10'
                            : item.status === 'current'
                            ? 'border-positive/20 hover:border-positive/40 hover:shadow-lg hover:shadow-positive/10'
                            : 'border-cloud-mist/10 hover:border-cloud-mist/20'
                        }`}
                        hover={false}
                      >
                        <CardContent className="p-4">
                          {/* Status Badge */}
                          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium mb-2 ${
                            item.status === 'completed'
                              ? 'bg-electric-azure/10 text-electric-azure'
                              : item.status === 'current'
                              ? 'bg-positive/10 text-positive'
                              : 'bg-cloud-mist/10 text-cloud-mist/50'
                          }`}>
                            {item.status === 'completed' && <CheckCircle2 className="w-2.5 h-2.5" />}
                            {item.status === 'current' && <Zap className="w-2.5 h-2.5" />}
                            {item.status === 'upcoming' && <Target className="w-2.5 h-2.5" />}
                            {item.status === 'completed' ? 'Completed' : item.status === 'current' ? 'In Progress' : 'Upcoming'}
                          </div>

                          {/* Title */}
                          <h3 className={`text-sm font-semibold mb-1.5 leading-tight ${
                            item.status === 'upcoming' ? 'text-cloud-mist/60' : 'text-cloud-mist'
                          }`}>
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className={`text-xs leading-relaxed line-clamp-3 ${
                            item.status === 'upcoming' ? 'text-cloud-mist/40' : 'text-cloud-mist/50'
                          }`}>
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Future Indicator */}
                <motion.div
                  className="relative flex flex-col items-center w-[100px] flex-shrink-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-azure/10 to-core-blue/10 flex items-center justify-center border border-electric-azure/20">
                    <Rocket className="w-5 h-5 text-electric-azure/60" />
                  </div>
                  <p className="mt-4 text-xs text-cloud-mist/40 text-center">And beyond...</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-xs text-cloud-mist/40 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Scroll to explore
            </p>
          </div>
        </div>
      </Section>

      {/* Core Operations Section */}
      <Section className="bg-gradient-to-b from-card-bg/30 to-transparent">
        <SectionHeader
          eyebrow="What We Do"
          title="Core Operations"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreOperations.map((item, index) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card
                className="h-full group transition-all duration-300 hover:-translate-y-1 hover:border-electric-azure/40 hover:shadow-lg hover:shadow-electric-azure/5"
                hover={false}
              >
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-azure/20 to-electric-azure/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-electric-azure/20">
                    <item.icon className="w-6 h-6 text-electric-azure transition-all duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-cloud-mist mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-cloud-mist/70">
                        <CheckCircle2 className="w-4 h-4 text-electric-azure/60 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Point Pill */}
                  <div className="mt-auto pt-4 border-t border-card-border">
                    <span className="inline-block px-3 py-1.5 text-xs font-medium text-electric-azure bg-electric-azure/10 rounded-full">
                      {item.keyPoint}
                    </span>
                  </div>

                  {/* Learn More Link */}
                  <button
                    onClick={() => scrollToSection(item.anchor)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-cloud-mist/50 hover:text-electric-azure transition-colors focus:outline-none focus:text-electric-azure group/link"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Governance & Compliance Section */}
      <Section id="governance-section">
        <SectionHeader
          eyebrow="How We Operate"
          title="Governance & Compliance"
        />

        {/* Three Columns */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {governanceData.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              variants={fadeInUp}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-electric-azure/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-electric-azure" />
                </div>
                <h3 className="text-lg font-semibold text-cloud-mist">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-azure/60 mt-2 shrink-0" />
                    <p className="text-sm text-cloud-mist/70 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Fund Flow Stepper */}
        <motion.div
          className="relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cloud-mist/50 mb-2">
              Fund Flow Process
            </h4>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-azure/30 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {fundFlowSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-card-bg border-2 border-electric-azure/40 flex items-center justify-center relative z-10">
                    <span className="text-lg font-bold text-electric-azure">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-sm text-cloud-mist/70">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Leadership & Team Section */}
      <Section className="bg-gradient-to-b from-card-bg/30 to-transparent overflow-hidden">
        <SectionHeader
          eyebrow="Our Team"
          title="Leadership & Team"
          subtitle="The people driving operational excellence and program delivery"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <TeamCarousel members={team} />
        </motion.div>
      </Section>
    </div>
  )
}
