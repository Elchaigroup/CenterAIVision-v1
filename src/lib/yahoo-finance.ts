'use client'

// Yahoo Finance API types
export interface QuoteData {
  symbol: string
  shortName: string
  regularMarketPrice: number
  regularMarketChange: number
  regularMarketChangePercent: number
  regularMarketPreviousClose: number
  regularMarketOpen: number
  regularMarketDayHigh: number
  regularMarketDayLow: number
  regularMarketVolume: number
  marketCap?: number
  fiftyTwoWeekHigh?: number
  fiftyTwoWeekLow?: number
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

// Symbols to track
const SYMBOLS = {
  BTC: 'BTC-USD',
  ETH: 'ETH-USD',
  STOCK: 'MARA',  // Marathon Digital as proxy for mining stocks (CAIV is fictional)
  SP500: '^GSPC',
  NASDAQ: '^IXIC',
}

// Fetch quote data from Yahoo Finance
async function fetchQuote(symbol: string): Promise<QuoteData | null> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch ${symbol}`)
    }

    const data = await response.json()
    const quote = data.quoteResponse?.result?.[0]

    if (!quote) {
      return null
    }

    return {
      symbol: quote.symbol,
      shortName: quote.shortName || quote.symbol,
      regularMarketPrice: quote.regularMarketPrice || 0,
      regularMarketChange: quote.regularMarketChange || 0,
      regularMarketChangePercent: quote.regularMarketChangePercent || 0,
      regularMarketPreviousClose: quote.regularMarketPreviousClose || 0,
      regularMarketOpen: quote.regularMarketOpen || 0,
      regularMarketDayHigh: quote.regularMarketDayHigh || 0,
      regularMarketDayLow: quote.regularMarketDayLow || 0,
      regularMarketVolume: quote.regularMarketVolume || 0,
      marketCap: quote.marketCap,
      fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh,
      fiftyTwoWeekLow: quote.fiftyTwoWeekLow,
    }
  } catch (error) {
    console.error(`Error fetching ${symbol}:`, error)
    return null
  }
}

// Fetch all market data
export async function fetchMarketData(): Promise<Omit<MarketData, 'isLoading'>> {
  try {
    const [btc, eth, stock, sp500, nasdaq] = await Promise.all([
      fetchQuote(SYMBOLS.BTC),
      fetchQuote(SYMBOLS.ETH),
      fetchQuote(SYMBOLS.STOCK),
      fetchQuote(SYMBOLS.SP500),
      fetchQuote(SYMBOLS.NASDAQ),
    ])

    return {
      btc,
      eth,
      stock,
      sp500,
      nasdaq,
      lastUpdated: new Date(),
      error: null,
    }
  } catch (error) {
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
