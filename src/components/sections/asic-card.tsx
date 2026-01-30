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
    >
      <Card tilt className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">
              <ShinyText text={miner.name} speed={3} className="font-semibold" />
            </CardTitle>
            {miner.badge && (
              <Badge variant={getBadgeVariant(miner.badge)}>
                {miner.badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="text-3xl font-bold mb-4">
            <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
              {formatCurrency(miner.price)}
            </GradientText>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-cloud-mist/60">Hashrate</span>
              <span className="text-electric-azure font-medium">{miner.hashrate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cloud-mist/60">Power</span>
              <span className="text-cloud-mist">{miner.power}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cloud-mist/60">Efficiency</span>
              <span className="text-cloud-mist">{miner.efficiency}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`/hardware/miners/${miner.id}`} className="w-full">
            <Button variant="primary" className="w-full">
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
