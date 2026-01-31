'use client'

import Image from 'next/image'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { GPUComputeCard } from '@/components/sections/gpu-card'
import { FeatureCard } from '@/components/sections/feature-card'
import { gpuComputeProducts, gpuFeatures } from '@/data/gpu-products'

export default function GPUComputePage() {
  return (
    <>
      <PageHeader
        title="AI GPU Cloud Compute"
        subtitle="On-demand access to next-generation NVIDIA GPUs for AI training, inference, and high-performance computing."
      />

      {/* Hero Image Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/0448.webp"
          alt="AI Command Center"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-slate via-midnight-slate/60 to-midnight-slate" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-cloud-mist text-lg md:text-xl font-medium">
              Next-Generation NVIDIA GPU Infrastructure
            </p>
            <p className="text-positive mt-2 font-medium">Industry-Leading Availability & Performance</p>
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
    </>
  )
}
