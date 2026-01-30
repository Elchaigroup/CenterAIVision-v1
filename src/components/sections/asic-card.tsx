'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { ASICMiner } from '@/data/gpu-products'

interface ASICCardProps {
  miner: ASICMiner
}

export function ASICCard({ miner }: ASICCardProps) {
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
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{miner.name}</CardTitle>
          {miner.badge && (
            <Badge variant={getBadgeVariant(miner.badge)}>
              {miner.badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-3xl font-bold text-cloud-mist mb-4">
          {formatCurrency(miner.price)}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-cloud-mist/60">Hashrate</span>
            <span className="text-cloud-mist font-medium">{miner.hashrate}</span>
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
        <Button variant="primary" className="w-full">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
