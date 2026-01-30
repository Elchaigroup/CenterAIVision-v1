'use client'

import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { GradientText } from '@/components/ui/gradient-text'

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-hero-gradient border-b border-electric-azure/10 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-azure/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText
              colors={['#E8EDF3', '#2C93FF', '#E8EDF3']}
              animationSpeed={6}
            >
              {title}
            </GradientText>
          </h1>
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-cloud-mist/70 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  )
}
