'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { GPUCompute, GPUHardware } from '@/data/gpu-products'
import { GradientText } from '@/components/ui/gradient-text'
import { ShinyText } from '@/components/ui/shiny-text'

interface GPUComputeCardProps {
  gpu: GPUCompute
  index?: number
}

export function GPUComputeCard({ gpu, index = 0 }: GPUComputeCardProps) {
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
              <ShinyText text={gpu.name} speed={3} className="font-semibold" />
            </CardTitle>
            {gpu.badge ? (
              <Badge variant={getBadgeVariant(gpu.badge)} className="shrink-0">
                {gpu.badge}
              </Badge>
            ) : (
              <div className="w-16 shrink-0" />
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="space-y-1 text-sm text-cloud-mist/70 mb-6 min-h-[72px]">
            {gpu.specs.memory && <div>{gpu.specs.memory}</div>}
            {gpu.specs.performance && <div>{gpu.specs.performance}</div>}
            {gpu.specs.gpuCount && <div>{gpu.specs.gpuCount}</div>}
          </div>
          <div className="space-y-3 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60 text-sm">Hourly</span>
              <span className="text-xl font-semibold">
                <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
                  {formatCurrency(gpu.hourlyPrice)}/hr
                </GradientText>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60 text-sm">Monthly</span>
              <span className="text-lg text-cloud-mist/80 font-medium">
                {formatCurrency(gpu.monthlyPrice, { compact: true })}/mo
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Link href="/waitlist" className="w-full">
            <Button variant="primary" className="w-full">
              Deploy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

interface GPUHardwareCardProps {
  gpu: GPUHardware
  index?: number
}

export function GPUHardwareCard({ gpu, index = 0 }: GPUHardwareCardProps) {
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
              <ShinyText text={gpu.name} speed={3} className="font-semibold" />
            </CardTitle>
            {gpu.badge ? (
              <Badge variant={getBadgeVariant(gpu.badge)} className="shrink-0">
                {gpu.badge}
              </Badge>
            ) : (
              <div className="w-16 shrink-0" />
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="text-3xl font-bold mb-6">
            <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
              {formatCurrency(gpu.price, { compact: true })}
            </GradientText>
          </div>
          <div className="space-y-3 text-sm mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">Monthly Profit</span>
              <span className="text-positive font-medium">
                {formatCurrency(gpu.monthlyProfit, { compact: true })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cloud-mist/60">ROI Timeline</span>
              <span className="text-cloud-mist font-medium">{gpu.roiMonths} months</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-card-border mt-3">
              <span className="text-cloud-mist/60">Annual ROI</span>
              <span className="text-positive font-semibold">
                {gpu.annualROI}%
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Link href={`/hardware/gpus/${gpu.id.replace('-hw', '')}`} className="w-full">
            <Button variant="primary" className="w-full">
              Invest Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
