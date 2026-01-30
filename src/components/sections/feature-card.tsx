'use client'

import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  title: string
  description: string
  step?: string
}

export function FeatureCard({ title, description, step }: FeatureCardProps) {
  return (
    <Card hover={false} className="h-full">
      <CardContent>
        {step && (
          <div className="text-4xl font-bold text-electric-azure/30 mb-4">
            {step}
          </div>
        )}
        <h3 className="text-lg font-semibold text-cloud-mist mb-2">{title}</h3>
        <p className="text-sm text-cloud-mist/70 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
