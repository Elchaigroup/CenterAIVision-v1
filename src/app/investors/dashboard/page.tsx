'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Magnet } from '@/components/ui/magnet'
import { GradientText } from '@/components/ui/gradient-text'
import { useAuth } from '@/lib/auth-context'

export default function InvestorDashboardPage() {
  const { isAuthenticated, user } = useAuth()
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card tilt className="max-w-md mx-auto text-center py-12">
                <CardContent>
                  <h2 className="text-2xl font-semibold mb-4">
                    <GradientText colors={['#E8EDF3', '#2C93FF', '#E8EDF3']} animationSpeed={6}>
                      Authentication Required
                    </GradientText>
                  </h2>
                  <p className="text-cloud-mist/70 mb-8">
                    Please sign in to access your investor dashboard and view your portfolio.
                  </p>
                  <p className="text-sm text-cloud-mist/50">
                    Click the Sign In button in the navigation bar to continue.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card tilt className="max-w-2xl mx-auto text-center py-16">
              <CardContent>
                <h2 className="text-3xl font-semibold mb-4">
                  <GradientText colors={['#E8EDF3', '#2C93FF', '#E8EDF3']} animationSpeed={6}>
                    No Assets Yet
                  </GradientText>
                </h2>
                <p className="text-cloud-mist/70 mb-8 max-w-md mx-auto">
                  Your portfolio is empty. Start investing in Bitcoin mining contracts
                  or AI GPU hardware to see your holdings here.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Magnet padding={30} magnetStrength={4}>
                    <Link href="/compute/mining">
                      <Button variant="primary">
                        Start Mining
                      </Button>
                    </Link>
                  </Magnet>
                  <Magnet padding={30} magnetStrength={4}>
                    <Link href="/hardware/gpus">
                      <Button variant="outline">
                        Explore GPU Investments
                      </Button>
                    </Link>
                  </Magnet>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats (Empty State) */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Invested', value: '$0.00' },
              { label: 'Current Value', value: '$0.00' },
              { label: 'Total Returns', value: '$0.00' },
              { label: 'Active Contracts', value: '0' },
            ].map((stat, index) => (
              <Magnet key={stat.label} padding={50} magnetStrength={5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card tilt>
                    <CardContent className="text-center">
                      <div className="text-sm text-cloud-mist/60 mb-1">{stat.label}</div>
                      <div className="text-2xl font-semibold">
                        <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
                          {stat.value}
                        </GradientText>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Magnet>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
