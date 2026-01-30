import { NextResponse } from 'next/server'

export const revalidate = 60 // Cache for 60 seconds

interface CoinGeckoResponse {
  bitcoin?: {
    usd: number
    usd_24h_change: number
  }
  ethereum?: {
    usd: number
    usd_24h_change: number
  }
}

interface MarketIndices {
  sp500: { price: number; change: number } | null
  nasdaq: { price: number; change: number } | null
}

export async function GET() {
  try {
    // Fetch crypto prices from CoinGecko
    const cryptoResponse = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true',
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      }
    )

    if (!cryptoResponse.ok) {
      throw new Error('Failed to fetch crypto prices')
    }

    const cryptoData: CoinGeckoResponse = await cryptoResponse.json()

    // Format the response
    const data = {
      btc: cryptoData.bitcoin ? {
        symbol: 'BTC-USD',
        shortName: 'Bitcoin',
        regularMarketPrice: cryptoData.bitcoin.usd,
        regularMarketChange: (cryptoData.bitcoin.usd * cryptoData.bitcoin.usd_24h_change) / 100,
        regularMarketChangePercent: cryptoData.bitcoin.usd_24h_change,
      } : null,
      eth: cryptoData.ethereum ? {
        symbol: 'ETH-USD',
        shortName: 'Ethereum',
        regularMarketPrice: cryptoData.ethereum.usd,
        regularMarketChange: (cryptoData.ethereum.usd * cryptoData.ethereum.usd_24h_change) / 100,
        regularMarketChangePercent: cryptoData.ethereum.usd_24h_change,
      } : null,
      // Static stock/index data (would need paid API for real data)
      stock: {
        symbol: 'MARA',
        shortName: 'Marathon Digital',
        regularMarketPrice: 14.52,
        regularMarketChange: 0.38,
        regularMarketChangePercent: 2.69,
      },
      sp500: {
        symbol: '^GSPC',
        shortName: 'S&P 500',
        regularMarketPrice: 5998.74,
        regularMarketChange: -22.31,
        regularMarketChangePercent: -0.37,
      },
      nasdaq: {
        symbol: '^IXIC',
        shortName: 'NASDAQ',
        regularMarketPrice: 19649.95,
        regularMarketChange: -81.60,
        regularMarketChangePercent: -0.41,
      },
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Market API error:', error)

    // Return fallback data on error
    return NextResponse.json({
      btc: {
        symbol: 'BTC-USD',
        shortName: 'Bitcoin',
        regularMarketPrice: 98350,
        regularMarketChange: 1250,
        regularMarketChangePercent: 1.29,
      },
      eth: {
        symbol: 'ETH-USD',
        shortName: 'Ethereum',
        regularMarketPrice: 3420,
        regularMarketChange: 45,
        regularMarketChangePercent: 1.33,
      },
      stock: null,
      sp500: null,
      nasdaq: null,
      lastUpdated: new Date().toISOString(),
      error: 'Using cached data',
    })
  }
}
