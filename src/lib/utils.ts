export function formatCurrency(value: number, options?: { compact?: boolean }): string {
  if (options?.compact && value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (options?.compact && value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value < 10 ? 2 : 0,
    maximumFractionDigits: value < 10 ? 2 : 0,
  }).format(value)
}

export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function calculateROI(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  annualReturn: number = 0.12
): {
  totalInvested: number
  totalReturn: number
  totalROI: number
  annualROI: number
  breakEvenMonths: number
} {
  const months = years * 12
  let totalValue = initialInvestment
  const totalInvested = initialInvestment + monthlyContribution * months

  for (let i = 0; i < months; i++) {
    totalValue = totalValue * (1 + annualReturn / 12) + monthlyContribution
  }

  const totalReturn = totalValue - totalInvested
  const totalROI = (totalReturn / totalInvested) * 100
  const annualROI = totalROI / years
  const breakEvenMonths = totalInvested / (totalReturn / months)

  return {
    totalInvested,
    totalReturn,
    totalROI,
    annualROI,
    breakEvenMonths,
  }
}
