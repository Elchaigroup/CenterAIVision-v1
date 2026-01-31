'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { MiningPlan } from '@/data/mining-plans'
import { cn } from '@/lib/utils'

interface MiningSwapCardProps {
  plan: MiningPlan
}

export function MiningSwapCard({ plan }: MiningSwapCardProps) {
  const isPositiveROI = plan.roi > 0

  return (
    <div className="h-full w-full bg-card-bg p-6 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold text-cloud-mist">{plan.name}</h3>
        {plan.badge && (
          <Badge variant={plan.badge === 'POPULAR' ? 'success' : 'default'} className="text-xs">
            {plan.badge}
          </Badge>
        )}
      </div>
      <div className="text-sm text-cloud-mist/60 mb-4">
        {plan.duration} | {plan.hashrate}
      </div>
      <div className="text-3xl font-bold text-electric-azure mb-6">
        {formatCurrency(plan.price)}
      </div>
      <div className="space-y-3 text-sm flex-1">
        <div className="flex justify-between">
          <span className="text-cloud-mist/60">Expected Return</span>
          <span className="text-cloud-mist font-medium">{plan.expectedBTC}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-cloud-mist/60">Estimated Value</span>
          <span className="text-cloud-mist font-medium">{plan.expectedUSD}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-card-border">
          <span className="text-cloud-mist/60">ROI</span>
          <span className={cn(
            'font-semibold',
            isPositiveROI ? 'text-positive' : 'text-negative'
          )}>
            {isPositiveROI ? '+' : ''}{plan.roi}%
          </span>
        </div>
      </div>
      <Button variant="primary" className="w-full mt-4">
        Buy Now
      </Button>
    </div>
  )
}
