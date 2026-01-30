'use client'

import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { GPUComputeCard } from '@/components/sections/gpu-card'
import { Card, CardContent } from '@/components/ui/card'
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
              <FadeIn key={gpu.id} delay={index * 100}>
                <GPUComputeCard gpu={gpu} />
              </FadeIn>
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
              <FadeIn key={feature.title} delay={index * 150}>
                <Card hover={false} className="h-full">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-cloud-mist mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-cloud-mist/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
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
              <FadeIn key={useCase.title} delay={index * 100}>
                <Card hover={false} className="h-full">
                  <CardContent>
                    <h3 className="text-lg font-semibold text-cloud-mist mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-cloud-mist/70">
                      {useCase.description}
                    </p>
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
