'use client'

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

      {/* Callout Banner */}
      <section className="bg-positive/10 border-b border-positive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-positive font-medium">
            Highly Profitable GPU Compute Infrastructure with Industry-Leading Availability
          </p>
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
    </>
  )
}
