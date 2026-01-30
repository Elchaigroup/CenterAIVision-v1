'use client'

import { useState } from 'react'
import { FadeIn, Reveal } from '@/components/ui/animations'
import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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
      <Card hover={false}>
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

      {/* Results */}
      <Card hover={false}>
        <CardContent>
          <h3 className="text-xl font-semibold text-cloud-mist mb-6">
            Projected Returns
          </h3>
          {results ? (
            <div className="space-y-6">
              <div className="p-4 bg-midnight-slate/50 rounded-lg border border-card-border">
                <div className="text-sm text-cloud-mist/60 mb-1">Total Return</div>
                <div className="text-3xl font-bold text-positive">
                  {formatCurrency(results.totalReturn)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-midnight-slate/50 rounded-lg border border-card-border">
                  <div className="text-sm text-cloud-mist/60 mb-1">Total ROI</div>
                  <div className="text-xl font-semibold text-cloud-mist">
                    {results.totalROI.toFixed(1)}%
                  </div>
                </div>
                <div className="p-4 bg-midnight-slate/50 rounded-lg border border-card-border">
                  <div className="text-sm text-cloud-mist/60 mb-1">Annual ROI</div>
                  <div className="text-xl font-semibold text-cloud-mist">
                    {results.annualROI.toFixed(1)}%
                  </div>
                </div>
              </div>
              <div className="p-4 bg-midnight-slate/50 rounded-lg border border-card-border">
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
            </div>
          ) : (
            <div className="text-center py-12 text-cloud-mist/50">
              Enter your investment parameters and click Calculate to see projected returns.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function PlaceholderCalculator({ title }: { title: string }) {
  return (
    <Card hover={false} className="max-w-2xl mx-auto">
      <CardContent className="text-center py-16">
        <h3 className="text-2xl font-semibold text-cloud-mist mb-4">
          {title}
        </h3>
        <p className="text-cloud-mist/60">
          This calculator is coming soon. Check back later for detailed calculations
          specific to this investment type.
        </p>
      </CardContent>
    </Card>
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
          <div className="border-b border-card-border mb-8">
            <div className="flex flex-wrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px',
                    activeTab === tab.id
                      ? 'text-electric-azure border-electric-azure'
                      : 'text-cloud-mist/60 border-transparent hover:text-cloud-mist'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Content */}
          <FadeIn key={activeTab}>
            {activeTab === 'roi' && <ROICalculator />}
            {activeTab === 'mining' && <PlaceholderCalculator title="Mining Profitability Calculator" />}
            {activeTab === 'gpu' && <PlaceholderCalculator title="GPU Investment Calculator" />}
            {activeTab === 'portfolio' && <PlaceholderCalculator title="Portfolio Allocation Calculator" />}
          </FadeIn>
        </div>
      </section>
    </>
  )
}
