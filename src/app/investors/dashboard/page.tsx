'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FadeIn } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export default function InvestorDashboardPage() {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check auth status after component mounts (client-side only)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-cloud-mist/60">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <PageHeader
          title="Investor Dashboard"
          subtitle="Sign in to access your investment portfolio and analytics."
        />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <Card hover={false} className="max-w-md mx-auto text-center py-12">
                <CardContent>
                  <h2 className="text-2xl font-semibold text-cloud-mist mb-4">
                    Authentication Required
                  </h2>
                  <p className="text-cloud-mist/70 mb-8">
                    Please sign in to access your investor dashboard and view your portfolio.
                  </p>
                  <p className="text-sm text-cloud-mist/50">
                    Click the Sign In button in the navigation bar to continue.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Investor Dashboard"
        subtitle={`Welcome back, ${user?.name || 'Investor'}`}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card hover={false} className="max-w-2xl mx-auto text-center py-16">
              <CardContent>
                <h2 className="text-3xl font-semibold text-cloud-mist mb-4">
                  No Assets Yet
                </h2>
                <p className="text-cloud-mist/70 mb-8 max-w-md mx-auto">
                  Your portfolio is empty. Start investing in Bitcoin mining contracts
                  or AI GPU hardware to see your holdings here.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/compute/mining">
                    <Button variant="primary">
                      Start Mining
                    </Button>
                  </Link>
                  <Link href="/hardware/gpus">
                    <Button variant="outline">
                      Explore GPU Investments
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Quick Stats (Empty State) */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Invested', value: '$0.00' },
              { label: 'Current Value', value: '$0.00' },
              { label: 'Total Returns', value: '$0.00' },
              { label: 'Active Contracts', value: '0' },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <Card hover={false}>
                  <CardContent className="text-center">
                    <div className="text-sm text-cloud-mist/60 mb-1">{stat.label}</div>
                    <div className="text-2xl font-semibold text-cloud-mist">{stat.value}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
