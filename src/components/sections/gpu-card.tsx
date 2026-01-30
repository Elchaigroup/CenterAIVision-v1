'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { GPUCompute, GPUHardware } from '@/data/gpu-products'

interface GPUComputeCardProps {
  gpu: GPUCompute
}

export function GPUComputeCard({ gpu }: GPUComputeCardProps) {
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
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{gpu.name}</CardTitle>
          {gpu.badge && (
            <Badge variant={getBadgeVariant(gpu.badge)}>
              {gpu.badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-1 text-sm text-cloud-mist/70 mb-6">
          {gpu.specs.memory && <div>{gpu.specs.memory}</div>}
          {gpu.specs.performance && <div>{gpu.specs.performance}</div>}
          {gpu.specs.gpuCount && <div>{gpu.specs.gpuCount}</div>}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-cloud-mist/60 text-sm">Hourly</span>
            <span className="text-xl font-semibold text-cloud-mist">
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
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Deploy Now
        </Button>
      </CardFooter>
    </Card>
  )
}

interface GPUHardwareCardProps {
  gpu: GPUHardware
}

export function GPUHardwareCard({ gpu }: GPUHardwareCardProps) {
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
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{gpu.name}</CardTitle>
          {gpu.badge && (
            <Badge variant={getBadgeVariant(gpu.badge)}>
              {gpu.badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-3xl font-bold text-cloud-mist mb-4">
          {formatCurrency(gpu.price, { compact: true })}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-cloud-mist/60">Monthly Profit</span>
            <span className="text-positive font-medium">
              {formatCurrency(gpu.monthlyProfit, { compact: true })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-cloud-mist/60">ROI Timeline</span>
            <span className="text-cloud-mist">{gpu.roiMonths} months</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-card-border mt-2">
            <span className="text-cloud-mist/60">Annual ROI</span>
            <span className="text-positive font-semibold">
              {gpu.annualROI}%
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Invest Now
        </Button>
      </CardFooter>
    </Card>
  )
}
