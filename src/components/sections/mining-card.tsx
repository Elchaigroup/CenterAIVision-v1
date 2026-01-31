'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { MiningPlan } from '@/data/mining-plans'
import { cn } from '@/lib/utils'
import { GradientText } from '@/components/ui/gradient-text'

interface MiningCardProps {
  plan: MiningPlan
  index?: number
}

export function MiningCard({ plan, index = 0 }: MiningCardProps) {
  const isPositiveROI = plan.roi > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card tilt className="h-full flex flex-col">
        <CardHeader className="min-h-[72px]">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="line-clamp-2">{plan.name}</CardTitle>
            {plan.badge ? (
              <Badge variant={plan.badge === 'POPULAR' ? 'success' : 'default'} className="shrink-0">
                {plan.badge}
              </Badge>
            ) : (
              <div className="w-16 shrink-0" />
            )}
          </div>
          <div className="text-sm text-cloud-mist/60 mt-2">
            {plan.duration} | {plan.hashrate}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="text-3xl font-bold mb-4">
            <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
              {formatCurrency(plan.price)}
            </GradientText>
          </div>
          <div className="space-y-2 text-sm mt-auto">
            <div className="flex justify-between">
              <span className="text-cloud-mist/60">Expected Return</span>
              <span className="text-cloud-mist">{plan.expectedBTC}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cloud-mist/60">Estimated Value</span>
              <span className="text-cloud-mist">{plan.expectedUSD}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-card-border mt-2">
              <span className="text-cloud-mist/60">ROI</span>
              <span className={cn(
                'font-semibold',
                isPositiveROI ? 'text-positive' : 'text-negative'
              )}>
                {isPositiveROI ? '+' : ''}{plan.roi}%
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/waitlist" className="w-full">
            <Button variant="primary" className="w-full">
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
