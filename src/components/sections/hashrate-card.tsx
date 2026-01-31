'use client'

import { motion } from 'motion/react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { HashratePlan } from '@/data/hashrate-plans'
import { GradientText } from '@/components/ui/gradient-text'

interface HashrateCardProps {
  plan: HashratePlan
  index?: number
}

export function HashrateCard({ plan, index = 0 }: HashrateCardProps) {
  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'POPULAR':
        return 'success'
      case 'BEST VALUE':
        return 'info'
      default:
        return 'default'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card tilt className="h-full flex flex-col">
        <CardHeader className="min-h-[100px]">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg leading-tight">{plan.name}</CardTitle>
            {plan.badge && (
              <Badge variant={getBadgeVariant(plan.badge)} className="shrink-0">
                {plan.badge}
              </Badge>
            )}
          </div>
          <div className="text-sm text-electric-azure mt-2">
            {plan.hashrate} | {plan.duration}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="text-3xl font-bold mb-6">
            <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
              {formatCurrency(plan.price)}
            </GradientText>
          </div>
          <div className="space-y-3 text-sm mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">Daily Earnings</span>
              <span className="text-positive font-medium">{plan.expectedDaily}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">Monthly Earnings</span>
              <span className="text-positive font-medium">{plan.expectedMonthly}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button variant="primary" className="w-full">
            Buy Hashrate
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
