'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Magnet } from '@/components/ui/magnet'
import { GradientText } from '@/components/ui/gradient-text'
import { cn, formatCurrency, calculateROI } from '@/lib/utils'

const tabs = [
  { id: 'roi', label: 'ROI Calculator' },
  { id: 'mining', label: 'Mining Calculator' },
  { id: 'gpu', label: 'GPU Calculator' },
  { id: 'portfolio', label: 'Portfolio Calculator' },
]

function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(2500)
  const [years, setYears] = useState(5)
  const [results, setResults] = useState<ReturnType<typeof calculateROI> | null>(null)

  const handleCalculate = () => {
    const result = calculateROI(initialInvestment, monthlyContribution, years)
    setResults(result)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card tilt>
          <CardContent>
            <h3 className="text-xl font-semibold text-cloud-mist mb-6">
              Investment Parameters
            </h3>
            <div className="space-y-6">
              <Input
                label="Initial Investment ($)"
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                min={0}
              />
              <Input
                label="Monthly Contribution ($)"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                min={0}
              />
              <Input
                label="Investment Period (Years)"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                min={1}
                max={30}
              />
              <Button variant="primary" className="w-full" onClick={handleCalculate}>
                Calculate Returns
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card tilt>
          <CardContent>
            <h3 className="text-xl font-semibold text-cloud-mist mb-6">
              Projected Returns
            </h3>
            {results ? (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-midnight-slate/50 rounded-lg border border-electric-azure/20">
                  <div className="text-sm text-cloud-mist/60 mb-1">Total Return</div>
                  <div className="text-3xl font-bold">
                    <GradientText colors={['#22C55E', '#4ADE80', '#22C55E']} animationSpeed={4}>
                      {formatCurrency(results.totalReturn)}
                    </GradientText>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Magnet padding={40} magnetStrength={6}>
                    <div className="p-4 bg-midnight-slate/50 rounded-lg border border-electric-azure/20 hover:border-electric-azure/40 transition-colors">
                      <div className="text-sm text-cloud-mist/60 mb-1">Total ROI</div>
                      <div className="text-xl font-semibold">
                        <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
                          {results.totalROI.toFixed(1)}%
                        </GradientText>
                      </div>
                    </div>
                  </Magnet>
                  <Magnet padding={40} magnetStrength={6}>
                    <div className="p-4 bg-midnight-slate/50 rounded-lg border border-electric-azure/20 hover:border-electric-azure/40 transition-colors">
                      <div className="text-sm text-cloud-mist/60 mb-1">Annual ROI</div>
                      <div className="text-xl font-semibold">
                        <GradientText colors={['#2C93FF', '#60B5FF', '#2C93FF']} animationSpeed={4}>
                          {results.annualROI.toFixed(1)}%
                        </GradientText>
                      </div>
                    </div>
                  </Magnet>
                </div>
                <div className="p-4 bg-midnight-slate/50 rounded-lg border border-electric-azure/20">
                  <div className="text-sm text-cloud-mist/60 mb-1">Break-even Period</div>
                  <div className="text-xl font-semibold text-cloud-mist">
                    {results.breakEvenMonths.toFixed(1)} months
                  </div>
                </div>
                <div className="pt-4 border-t border-card-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-cloud-mist/60">Total Invested</span>
                    <span className="text-cloud-mist">{formatCurrency(results.totalInvested)}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-12 text-cloud-mist/50">
                Enter your investment parameters and click Calculate to see projected returns.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

function PlaceholderCalculator({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card tilt className="max-w-2xl mx-auto">
        <CardContent className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">
            <GradientText colors={['#E8EDF3', '#2C93FF', '#E8EDF3']} animationSpeed={6}>
              {title}
            </GradientText>
          </h3>
          <p className="text-cloud-mist/60">
            This calculator is coming soon. Check back later for detailed calculations
            specific to this investment type.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState('roi')

  return (
    <>
      <PageHeader
        title="Investment Calculators"
        subtitle="Plan your investments with our comprehensive calculation tools."
      />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-electric-azure/20 mb-8">
            <div className="flex flex-wrap gap-1">
              {tabs.map((tab) => (
                <Magnet key={tab.id} padding={30} magnetStrength={4}>
                  <motion.button
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px rounded-t-lg',
                      activeTab === tab.id
                        ? 'text-electric-azure border-electric-azure bg-electric-azure/5'
                        : 'text-cloud-mist/60 border-transparent hover:text-cloud-mist hover:bg-electric-azure/5'
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.label}
                  </motion.button>
                </Magnet>
              ))}
            </div>
          </div>

          {/* Calculator Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'roi' && <ROICalculator />}
            {activeTab === 'mining' && <PlaceholderCalculator title="Mining Profitability Calculator" />}
            {activeTab === 'gpu' && <PlaceholderCalculator title="GPU Investment Calculator" />}
            {activeTab === 'portfolio' && <PlaceholderCalculator title="Portfolio Allocation Calculator" />}
          </motion.div>
        </div>
      </section>
    </>
  )
}
