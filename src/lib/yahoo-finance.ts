'use client'

// Market data types
export interface QuoteData {
  symbol: string
  shortName: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
}

export interface MarketData {
  btc: QuoteData | null
  eth: QuoteData | null
  stock: QuoteData | null
  sp500: QuoteData | null
  nasdaq: QuoteData | null
  lastUpdated: Date | null
  isLoading: boolean
  error: string | null
}

// Fetch all market data from our API route
export async function fetchMarketData(): Promise<Omit<MarketData, 'isLoading'>> {
  try {
    const response = await fetch('/api/market', {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch market data')
    }

    const data = await response.json()

    return {
      btc: data.btc,
      eth: data.eth,
      stock: data.stock,
      sp500: data.sp500,
      nasdaq: data.nasdaq,
      lastUpdated: data.lastUpdated ? new Date(data.lastUpdated) : new Date(),
      error: data.error || null,
    }
  } catch (error) {
    console.error('Error fetching market data:', error)
    return {
      btc: null,
      eth: null,
      stock: null,
      sp500: null,
      nasdaq: null,
      lastUpdated: null,
      error: 'Failed to fetch market data',
    }
  }
}

// Format price with appropriate decimals
export function formatPrice(price: number, symbol?: string): string {
  if (symbol?.includes('BTC') || symbol?.includes('ETH')) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  if (price >= 1000) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  })
}

// Format percentage change
export function formatChange(change: number, percent: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)} (${sign}${percent.toFixed(2)}%)`
}

// Format large numbers (market cap, volume)
export function formatLargeNumber(num: number): string {
  if (num >= 1e12) {
    return `$${(num / 1e12).toFixed(2)}T`
  }
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`
  }
  return `$${num.toLocaleString()}`
}
