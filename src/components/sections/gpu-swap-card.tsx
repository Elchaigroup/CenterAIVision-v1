'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { GPUCompute } from '@/data/gpu-products'

interface GPUSwapCardProps {
  gpu: GPUCompute
}

export function GPUSwapCard({ gpu }: GPUSwapCardProps) {
  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'NEWEST':
        return 'success'
      case 'MOST POWERFUL':
        return 'warning'
      case 'BEST VALUE':
        return 'info'
      default:
        return 'default'
    }
  }

  return (
    <div className="h-full w-full bg-card-bg p-6 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-4">
        <h3 className="text-lg font-semibold text-cloud-mist">{gpu.name}</h3>
        {gpu.badge && (
          <Badge variant={getBadgeVariant(gpu.badge)} className="text-xs whitespace-nowrap">
            {gpu.badge}
          </Badge>
        )}
      </div>
      <div className="space-y-1 text-sm text-cloud-mist/70 mb-6">
        {gpu.specs.memory && <div>{gpu.specs.memory}</div>}
        {gpu.specs.performance && <div>{gpu.specs.performance}</div>}
        {gpu.specs.gpuCount && <div>{gpu.specs.gpuCount}</div>}
      </div>
      <div className="space-y-3 flex-1">
        <div className="flex justify-between items-center">
          <span className="text-cloud-mist/60 text-sm">Hourly</span>
          <span className="text-xl font-bold text-electric-azure">
            {formatCurrency(gpu.hourlyPrice)}/hr
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-cloud-mist/60 text-sm">Monthly</span>
          <span className="text-lg text-cloud-mist/80">
            {formatCurrency(gpu.monthlyPrice, { compact: true })}/mo
          </span>
        </div>
      </div>
      <Button variant="primary" className="w-full mt-4">
        Deploy Now
      </Button>
    </div>
  )
}
