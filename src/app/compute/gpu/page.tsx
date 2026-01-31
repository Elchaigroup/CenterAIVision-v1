'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { GPUComputeCard } from '@/components/sections/gpu-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { gpuComputeProducts, gpuFeatures } from '@/data/gpu-products'

export default function GPUComputePage() {
  return (
    <>
      {/* Full Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/0448.webp"
          alt="AI Command Center"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate/80 via-midnight-slate/50 to-midnight-slate" />

        {/* Content Container - All Centered */}
        <div className="relative h-full flex items-end justify-center pb-32">
          <div className="text-center px-4 max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              AI GPU Cloud Compute
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-cloud-mist/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Next-Generation NVIDIA GPU Infrastructure
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-cloud-mist/70 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              On-demand access to enterprise GPUs for AI training, inference, and high-performance computing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* GPU Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Available GPU Configurations
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Enterprise-grade NVIDIA GPUs ready for deployment
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuComputeProducts.map((gpu, index) => (
              <GPUComputeCard key={gpu.id} gpu={gpu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our GPUs */}
      <section className="py-20 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Why Choose Our Cloud GPUs
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Built for AI workloads that demand the best
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {gpuFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              Ideal Use Cases
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Our infrastructure powers diverse AI applications
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'LLM Training',
                description: 'Train large language models with distributed computing across multiple GPUs.',
              },
              {
                title: 'AI Inference',
                description: 'Deploy production AI models with low-latency inference endpoints.',
              },
              {
                title: 'Computer Vision',
                description: 'Process images and video at scale for object detection and analysis.',
              },
              {
                title: 'Scientific Computing',
                description: 'Run complex simulations and computational research workloads.',
              },
            ].map((useCase, index) => (
              <FeatureCard
                key={useCase.title}
                title={useCase.title}
                description={useCase.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Showcase */}
      <section className="py-20 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-12">
              Our AI Infrastructure
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={100}>
              <div className="relative h-72 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0705.webp"
                  alt="AI Operations Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist">AI Operations Center</h3>
                  <p className="text-cloud-mist/70 mt-1">24/7 monitoring and management</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-72 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0162.webp"
                  alt="GPU Data Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-cloud-mist">GPU Data Center</h3>
                  <p className="text-cloud-mist/70 mt-1">Enterprise-grade compute infrastructure</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Additional Infrastructure Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-cloud-mist text-center mb-4">
              World-Class Facilities
            </h2>
            <p className="text-cloud-mist/60 text-center max-w-2xl mx-auto mb-12">
              Global infrastructure designed for AI at scale
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            <FadeIn delay={100}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/2584.webp"
                  alt="Cooling Systems"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Advanced Cooling</h3>
                  <p className="text-sm text-cloud-mist/70">Liquid and air cooling solutions</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/0073.webp"
                  alt="GPU Arrays"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">GPU Clusters</h3>
                  <p className="text-sm text-cloud-mist/70">High-density compute arrays</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/4091.webp"
                  alt="Facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-cloud-mist">Secure Facilities</h3>
                  <p className="text-sm text-cloud-mist/70">Enterprise security standards</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/images/0357.webp"
          alt="Data Center Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate via-midnight-slate/60 to-midnight-slate/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist/80 text-lg">Powering the next generation of AI applications</p>
          </div>
        </div>
      </section>
    </>
  )
}
