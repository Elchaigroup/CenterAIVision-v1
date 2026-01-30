'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { HashratePlan } from '@/data/hashrate-plans'

interface HashrateCardProps {
  plan: HashratePlan
}

export function HashrateCard({ plan }: HashrateCardProps) {
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
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{plan.name}</CardTitle>
          {plan.badge && (
            <Badge variant={getBadgeVariant(plan.badge)}>
              {plan.badge}
            </Badge>
          )}
        </div>
        <div className="text-sm text-cloud-mist/60 mt-2">
          {plan.hashrate} | {plan.duration}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-3xl font-bold text-cloud-mist mb-4">
          {formatCurrency(plan.price)}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-cloud-mist/60">Daily Earnings</span>
            <span className="text-cloud-mist">{plan.expectedDaily}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cloud-mist/60">Monthly Earnings</span>
            <span className="text-cloud-mist">{plan.expectedMonthly}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Buy Hashrate
        </Button>
      </CardFooter>
    </Card>
  )
}
