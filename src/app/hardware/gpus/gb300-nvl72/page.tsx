'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'

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
    description: 'Test-time scaling and AI reasoning increase the compute necessary to achieve quality of service and maximum throughput. NVIDIA Blackwell Ultra Tensor Cores are supercharged with 2x the attention-layer acceleration.',
  },
  {
    title: '288 GB of HBM3e',
    description: 'Larger memory capacity allows for larger batch sizing and maximum throughput performance. NVIDIA Blackwell Ultra GPUs offer 1.5x larger HBM3e memory in combination with added AI compute.',
  },
  {
    title: 'NVIDIA Blackwell Architecture',
    description: 'The NVIDIA Blackwell architecture delivers groundbreaking advancements in accelerated computing, powering a new era of unparalleled performance, efficiency, and scale.',
  },
  {
    title: 'NVIDIA ConnectX-8 SuperNIC',
    description: 'The ConnectX-8 SuperNIC provides 800 Gb/s of network connectivity for each GPU, delivering best-in-class RDMA capabilities with NVIDIA Quantum-X800 InfiniBand or Spectrum-X Ethernet.',
  },
  {
    title: 'NVIDIA Grace CPU',
    description: 'The NVIDIA Grace CPU is a breakthrough processor designed for modern data center workloads with 2x the energy efficiency of today\'s leading server processors.',
  },
  {
    title: 'Fifth-Generation NVIDIA NVLink',
    description: 'The fifth generation of NVIDIA NVLink is a scale-up interconnect that unleashes accelerated performance for AI reasoning models with seamless GPU communication.',
  },
]

export default function GB300NVL72Page() {
  return (
    <>
      {/* Hero Section - Centered Layout */}
      <section className="relative bg-midnight-slate pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left - Text */}
            <FadeIn>
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud-mist leading-tight">
                  NVIDIA GB300<br />NVL72
                </h1>
                <p className="text-lg text-cloud-mist/70 mt-4 mb-6">
                  Built for the age of AI reasoning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/waitlist?product=NVIDIA GB300 NVL72">
                    <Button variant="primary" size="lg">
                      Available Now
                    </Button>
                  </Link>
                  <Link href="/waitlist?product=NVIDIA GB300 NVL72">
                    <Button variant="outline" size="lg" className="border-cloud-mist/30 text-cloud-mist hover:bg-cloud-mist/10">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right - Product Image */}
            <FadeIn delay={200}>
              <div className="lg:w-1/2">
                <Image
                  src="https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/gb300-nvl72/gb300-nvl72-bm-af-bottom-p.jpg"
                  alt="NVIDIA GB300 NVL72"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold text-midnight-slate/50 uppercase tracking-widest">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4 mb-8">
                Designed for AI Reasoning Performance
              </h2>
              <p className="text-base text-midnight-slate/70 leading-relaxed">
                The NVIDIA GB300 NVL72 features a fully liquid-cooled, rack-scale architecture that integrates 72 NVIDIA Blackwell Ultra GPUs and 36 Arm-based NVIDIA Grace CPUs into a single platform. The system delivers 1.5x more dense FP4 Tensor Core FLOPS and 2x higher attention performance compared to NVIDIA Blackwell GPUs. It is purpose-built for test-time scaling inference and AI reasoning tasks. AI factories accelerated by the GB300 NVL72—leveraging NVIDIA Quantum-X800 InfiniBand or Spectrum-X Ethernet, ConnectX-8 SuperNIC, and NVIDIA Mission Control management—deliver up to a 50x overall increase in AI factory output performance compared to NVIDIA Hopper-based platforms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-midnight-slate/50 uppercase tracking-widest">Performance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                Scaling AI Factories to Unprecedented Levels
              </h2>
            </div>
          </Reveal>

          <FadeIn>
            <div className="bg-midnight-slate rounded-xl overflow-hidden">
              {/* Chart Header */}
              <div className="p-6 pb-0">
                <p className="text-sm text-cloud-mist/70">NVIDIA Blackwell Ultra AI Factory Output</p>
              </div>

              {/* Chart Image */}
              <div className="p-6">
                <Image
                  src="https://www.nvidia.com/en-au/data-center/gb300-nvl72/_jcr_content/root/responsivegrid/nv_container/nv_container_1005881640/nv_image.coreimg.100.410.jpeg/1742278444865/blackwell-ultra-ai-factory-output-2560-1440.jpeg"
                  alt="AI Factory Output Performance Chart"
                  width={1000}
                  height={500}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 border-t border-white/10">
                <div className="p-6 text-center border-r border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">50x</div>
                  <div className="text-sm text-cloud-mist/60 mt-2">AI Factory Output vs Hopper</div>
                </div>
                <div className="p-6 text-center border-r border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">10x</div>
                  <div className="text-sm text-cloud-mist/60 mt-2">User Responsiveness (TPS)</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-electric-azure">5x</div>
                  <div className="text-sm text-cloud-mist/60 mt-2">Throughput per Megawatt</div>
                </div>
              </div>

              <div className="px-6 pb-4">
                <p className="text-[10px] text-cloud-mist/40">
                  DeepSeek R1 1K + 32K, OSS, 4 BS. GB300 NVL72 with FP4 Dynamic disaggregation. H200 with FP8 & flight batching. Projected performance subject to change.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-8 text-center">
            <p className="text-midnight-slate/60 max-w-3xl mx-auto text-sm">
              Experience next-level AI reasoning performance with the NVIDIA GB300 NVL72 platform. Compared to Hopper, the GB300 NVL72 delivers an impressive 10x boost in user responsiveness (TPS per user) and a 5x improvement in throughput (TPS per megawatt). Together, these advancements translate into a remarkable 50x leap in overall AI factory output.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Light Gray Background */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-midnight-slate/50 uppercase tracking-widest">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                Technological Breakthroughs
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologicalFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 50}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-electric-azure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
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
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-slate/95 via-midnight-slate/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-cloud-mist mb-6">
                NVIDIA Mission Control
              </h2>
              <p className="text-cloud-mist/80 leading-relaxed mb-6 text-sm">
                NVIDIA Mission Control streamlines AI factory operations, from workloads to infrastructure, with world-class expertise delivered as software. It powers NVIDIA Grace Blackwell data centers, bringing instant agility for inference and training while providing full-stack intelligence for infrastructure resilience. Every enterprise can run AI with hyperscale efficiency, simplifying and accelerating AI experimentation.
              </p>
              <Link href="/contact" className="inline-flex items-center text-electric-azure font-medium text-sm hover:underline">
                Run Models, Automate the Essentials
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DGX Station Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Image
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/data-center/gb300-nvl72/nvidia-dgx-station-bm-md460-offset-right-d@2x.jpg"
                alt="NVIDIA DGX Station"
                width={500}
                height={350}
                className="w-full h-auto"
                unoptimized
              />
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mb-6">
                  NVIDIA DGX Station
                </h2>
                <p className="text-midnight-slate/70 leading-relaxed mb-6 text-sm">
                  Develop and run cutting-edge AI locally with NVIDIA DGX Station, powered by the NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip. Accelerate large-scale training and inferencing workloads and easily scale them from deskside to data center.
                </p>
                <Link href="/hardware/gpus" className="inline-flex items-center text-electric-azure font-medium text-sm hover:underline">
                  Learn More About NVIDIA DGX Station
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-midnight-slate/50 uppercase tracking-widest">Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mt-4">
                NVIDIA GB300 NVL72<sup className="text-lg">1</sup>
              </h2>
            </div>
          </Reveal>

          <FadeIn>
            <div className="overflow-hidden">
              {specifications.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-4 py-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <span className="text-sm text-midnight-slate/70">{spec.label}</span>
                  <span className="text-sm text-midnight-slate font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-midnight-slate/40 mt-4">
              * All Tensor Core specifications are with sparsity unless otherwise noted. 1. Without sparsity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-core-blue to-electric-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Scale Your AI Infrastructure?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
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
