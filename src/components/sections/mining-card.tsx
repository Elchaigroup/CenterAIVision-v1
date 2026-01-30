'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { MiningPlan } from '@/data/mining-plans'
import { cn } from '@/lib/utils'

interface MiningCardProps {
  plan: MiningPlan
}

export function MiningCard({ plan }: MiningCardProps) {
  const isPositiveROI = plan.roi > 0

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{plan.name}</CardTitle>
          {plan.badge && (
            <Badge variant={plan.badge === 'POPULAR' ? 'success' : 'default'}>
              {plan.badge}
            </Badge>
          )}
        </div>
        <div className="text-sm text-cloud-mist/60 mt-2">
          {plan.duration} | {plan.hashrate}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-3xl font-bold text-cloud-mist mb-4">
          {formatCurrency(plan.price)}
        </div>
        <div className="space-y-2 text-sm">
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
        <Button variant="primary" className="w-full">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
