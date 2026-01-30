'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { GradientText } from '@/components/ui/gradient-text'

interface FeatureCardProps {
  title: string
  description: string
  step?: string
  index?: number
}

export function FeatureCard({ title, description, step, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card tilt className="h-full">
        <CardContent>
          {step && (
            <motion.div
              className="text-4xl font-bold mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <GradientText
                colors={['#2C93FF', '#003296', '#2C93FF']}
                animationSpeed={6}
                className="opacity-40"
              >
                {step}
              </GradientText>
            </motion.div>
          )}
          <h3 className="text-lg font-semibold text-cloud-mist mb-2">{title}</h3>
          <p className="text-sm text-cloud-mist/70 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
