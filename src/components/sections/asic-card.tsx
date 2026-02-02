'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { ASICMiner } from '@/data/gpu-products'
import { GradientText } from '@/components/ui/gradient-text'
import { ShinyText } from '@/components/ui/shiny-text'

interface ASICCardProps {
  miner: ASICMiner
  index?: number
}

export function ASICCard({ miner, index = 0 }: ASICCardProps) {
  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'NEWEST':
        return 'success'
      case 'POPULAR':
        return 'warning'
      case 'BEST VALUE':
      case 'BEST EFFICIENCY':
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
        <CardHeader className="min-h-[72px]">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg leading-tight">
              <ShinyText text={miner.name} speed={3} className="font-semibold" />
            </CardTitle>
            {miner.badge && (
              <Badge variant={getBadgeVariant(miner.badge)} className="shrink-0">
                {miner.badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="text-3xl font-bold mb-4">
            <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
              {formatCurrency(miner.price)}
            </GradientText>
          </div>

          {/* Specs row */}
          <div className="grid grid-cols-2 gap-2 text-xs text-cloud-mist/60 mb-4 pb-4 border-b border-card-border">
            <div>
              <span className="block text-cloud-mist font-medium">{miner.hashrate}</span>
              Hashrate
            </div>
            <div>
              <span className="block text-cloud-mist font-medium">{miner.efficiency}</span>
              Efficiency
            </div>
          </div>

          {/* Investment metrics */}
          <div className="space-y-3 text-sm mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">Monthly Profit</span>
              <span className="text-positive font-medium">
                {formatCurrency(miner.monthlyProfit)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">ROI Timeline</span>
              <span className="text-cloud-mist font-medium">{miner.roiMonths} months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">Location</span>
              <span className="text-cloud-mist/80 text-xs">{miner.location}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-card-border mt-3">
              <span className="text-cloud-mist/60">Annual ROI</span>
              <span className="text-positive font-semibold">
                {miner.annualROI}%
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Link href={`/hardware/miners/${miner.id}`} className="w-full">
            <Button variant="primary" className="w-full">
              Invest Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
