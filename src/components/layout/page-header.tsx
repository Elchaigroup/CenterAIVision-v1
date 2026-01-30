'use client'

import { ReactNode } from 'react'
import { FadeIn } from '@/components/ui/animations'

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-hero-gradient border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-cloud-mist mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-cloud-mist/70 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </div>
  )
}
