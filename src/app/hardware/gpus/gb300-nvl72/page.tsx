'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const specifications = [
  { label: 'Configuration', value: '72 NVIDIA Blackwell Ultra GPUs, 36 NVIDIA Grace CPUs' },
  { label: 'NVLink Bandwidth', value: '130 TB/s' },
  { label: 'Fast Memory', value: '37 TB' },
  { label: 'GPU Memory | Bandwidth', value: '20 TB | up to 576 TB/s' },
  { label: 'CPU Memory | Bandwidth', value: '17 TB LPDDR5X | 14 TB/s' },
  { label: 'CPU Core Count', value: '2,592 Arm Neoverse V2 cores' },
  { label: 'FP4 Tensor Core', value: '1440 | 1080* PFLOPS' },
  { label: 'FP8/FP6 Tensor Core', value: '720 PFLOPS' },
  { label: 'INT8 Tensor Core', value: '24 POPS' },
  { label: 'FP16/BF16 Tensor Core', value: '360 PFLOPS' },
  { label: 'TF32 Tensor Core', value: '180 PFLOPS' },
  { label: 'FP32', value: '6 PFLOPS' },
  { label: 'FP64 / FP64 Tensor Core', value: '100 TFLOPS' },
]

const technologicalFeatures = [
  {
    title: 'AI Reasoning Inference',
    description: 'Test-time scaling and AI reasoning increase the compute necessary to achieve quality of service and maximum throughput. NVIDIA Blackwell Ultra Tensor Cores are supercharged with 2x the attention-layer acceleration and 1.5x more AI compute floating-point operations per second (FLOPS) compared to NVIDIA Blackwell GPUs.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: '288 GB of HBM3e',
    description: 'Larger memory capacity allows for larger batch sizing and maximum throughput performance. NVIDIA Blackwell Ultra GPUs offer 1.5x larger HBM3e memory in combination with added AI compute, boosting AI reasoning throughput for the largest context lengths.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'NVIDIA Blackwell Architecture',
    description: 'The NVIDIA Blackwell architecture delivers groundbreaking advancements in accelerated computing, powering a new era of unparalleled performance, efficiency, and scale.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'NVIDIA ConnectX-8 SuperNIC',
    description: 'The NVIDIA ConnectX-8 SuperNIC-8 multihued I/O module hosts two ConnectX-8 devices, providing 800 gigabits per second (Gb/s) of network connectivity for each GPU in the NVIDIA GB300 NVL72. This delivers best-in-class remote direct memory access (RDMA) capabilities with entire NVIDIA Quantum-X800 InfiniBand or Spectrum-X Ethernet networking platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: 'NVIDIA Grace CPU',
    description: 'The NVIDIA Grace CPU is a breakthrough processor designed for modern data center workloads. It provides outstanding performance and memory bandwidth with 2x the energy efficiency of todays leading server processors.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Fifth-Generation NVIDIA NVLink',
    description: 'Unlocking the full potential of accelerated computing requires seamless communication between every GPU. The fifth generation of NVIDIA NVLink is a scale-up interconnect that unleashes accelerated performance for AI reasoning models.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

export default function GB300NVL72Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-midnight-slate">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-core-blue/20 via-midnight-slate to-midnight-slate" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Title and CTA */}
            <FadeIn>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cloud-mist leading-tight mb-4">
                  NVIDIA GB300 NVL72
                </h1>
                <p className="text-xl text-cloud-mist/70 mb-8">
                  Built for the age of AI reasoning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <span className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-electric-azure text-white rounded">
                    Available Now
                  </span>
                  <Link href="/waitlist?product=NVIDIA GB300 NVL72">
                    <Button variant="outline" size="lg" className="border-electric-azure text-electric-azure hover:bg-electric-azure hover:text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right - Product Image */}
            <FadeIn delay={200}>
              <div className="relative">
                <Image
                  src="https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/gb300-nvl72/gb300-nvl72-bm-af-bottom-p.jpg"
                  alt="NVIDIA GB300 NVL72"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-cloud-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-medium text-midnight-slate/60 uppercase tracking-wider">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4 mb-8">
              Designed for AI Reasoning Performance
            </h2>
            <p className="text-lg text-midnight-slate/70 leading-relaxed">
              The NVIDIA GB300 NVL72 features a fully liquid-cooled, rack-scale architecture that integrates 72 NVIDIA Blackwell Ultra GPUs and 36 Arm-based NVIDIA Grace CPUs into a single platform. The system delivers 1.5x more dense FP4 Tensor Core FLOPS and 2x higher attention performance compared to NVIDIA Blackwell GPUs. It is purpose-built for test-time scaling inference and AI reasoning tasks. AI factories accelerated by the GB300 NVL72—leveraging NVIDIA Quantum-X800 InfiniBand or Spectrum-X Ethernet, ConnectX-8 SuperNIC, and NVIDIA Mission Control management—deliver up to a 50x overall increase in AI factory output performance compared to NVIDIA Hopper-based platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-gradient-to-b from-cloud-mist to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-midnight-slate/60 uppercase tracking-wider">Performance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                Scaling AI Factories to Unprecedented Levels
              </h2>
            </div>
          </Reveal>

          <FadeIn>
            <div className="relative bg-midnight-slate rounded-2xl overflow-hidden p-8">
              {/* Performance Chart */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-cloud-mist mb-6">NVIDIA Blackwell Ultra AI Factory Output</h3>
                <div className="relative">
                  <Image
                    src="https://www.nvidia.com/en-au/data-center/gb300-nvl72/_jcr_content/root/responsivegrid/nv_container/nv_container_1005881640/nv_image.coreimg.100.410.jpeg/1742278444865/blackwell-ultra-ai-factory-output-2560-1440.jpeg"
                    alt="AI Factory Output Performance Chart"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    unoptimized
                  />
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">50x</div>
                  <div className="text-sm text-cloud-mist/70 mt-2">AI Factory Output vs Hopper</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">10x</div>
                  <div className="text-sm text-cloud-mist/70 mt-2">User Responsiveness (TPS)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">5x</div>
                  <div className="text-sm text-cloud-mist/70 mt-2">Throughput per Megawatt</div>
                </div>
              </div>

              <p className="text-xs text-cloud-mist/50 mt-6">
                DeepSeek R1 1K + 32K, OSS, 4 BS. GB300 NVL72 with FP4 Dynamic disaggregation. H200 with FP8 & flight batching. Projected performance subject to change.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 text-center">
            <p className="text-midnight-slate/70 max-w-3xl mx-auto">
              Experience next-level AI reasoning performance with the NVIDIA GB300 NVL72 platform. Compared to Hopper, the GB300 NVL72 delivers an impressive 10x boost in user responsiveness (TPS per user) and a 5x improvement in throughput (TPS per megawatt) (MW). Together, these advancements translate into a remarkable 50x leap in overall AI factory output.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-midnight-slate/60 uppercase tracking-wider">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                Technological Breakthroughs
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologicalFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <div className="p-6">
                  <div className="text-electric-azure mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-midnight-slate mb-3">{feature.title}</h3>
                  <p className="text-sm text-midnight-slate/60 leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Control Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/dgx-superpod/nvidia-mission-control-bm-af-bottom-p.jpg"
            alt="NVIDIA Mission Control"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-slate/95 via-midnight-slate/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-6">
                NVIDIA Mission Control
              </h2>
              <p className="text-cloud-mist/80 leading-relaxed mb-8">
                NVIDIA Mission Control streamlines AI factory operations, from workloads to infrastructure, with world-class expertise delivered as software. It powers NVIDIA Grace Blackwell data centers, bringing instant agility for inference and training while providing full-stack intelligence for infrastructure resilience. Every enterprise can run AI with hyperscale efficiency, simplifying and accelerating AI experimentation.
              </p>
              <Link href="/contact" className="inline-flex items-center text-electric-azure font-semibold hover:underline">
                Run Models, Automate the Essentials
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DGX Station Section */}
      <section className="py-24 bg-cloud-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <Image
                  src="https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/gb300-nvl72/nvidia-dgx-station-bm-md460-offset-right-d@2x.jpg"
                  alt="NVIDIA DGX Station"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mb-6">
                  NVIDIA DGX Station
                </h2>
                <p className="text-midnight-slate/70 leading-relaxed mb-6">
                  Develop and run cutting-edge AI locally with NVIDIA DGX Station, powered by the NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip. Accelerate large-scale training and inferencing workloads and easily scale them from deskside to data center.
                </p>
                <Link href="/hardware/gpus" className="inline-flex items-center text-electric-azure font-semibold hover:underline">
                  Learn More About NVIDIA DGX Station
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-midnight-slate/60 uppercase tracking-wider">Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                NVIDIA GB300 NVL72<sup>1</sup>
              </h2>
            </div>
          </Reveal>

          <FadeIn>
            <div className="border border-midnight-slate/10 rounded-lg overflow-hidden">
              {specifications.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-6 py-4 ${index % 2 === 0 ? 'bg-midnight-slate/5' : 'bg-white'} ${index !== specifications.length - 1 ? 'border-b border-midnight-slate/10' : ''}`}
                >
                  <span className="text-midnight-slate/70 font-medium">{spec.label}</span>
                  <span className="text-midnight-slate font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-midnight-slate/50 mt-4">
              * All Tensor Core specifications are with sparsity unless otherwise noted.<br />
              1. Without sparsity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-core-blue to-electric-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your AI Infrastructure?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn more about the NVIDIA GB300 NVL72 and how it can transform your AI workloads.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/waitlist?product=NVIDIA GB300 NVL72">
                <Button variant="secondary" size="lg" className="bg-white text-core-blue hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
