'use client'

import { useState, useEffect, useCallback } from 'react'
import { MarketData, fetchMarketData } from '@/lib/yahoo-finance'

const REFRESH_INTERVAL = 60000 // Refresh every 60 seconds

export function useMarketData() {
  const [data, setData] = useState<MarketData>({
    btc: null,
    eth: null,
    nvda: null,
    stock: null,
    sp500: null,
    nasdaq: null,
    lastUpdated: null,
    isLoading: true,
    error: null,
  })

  const refresh = useCallback(async () => {
    try {
      const marketData = await fetchMarketData()
      setData({
        ...marketData,
        isLoading: false,
      })
    } catch (error) {
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to fetch market data',
      }))
    }
  }, [])

  useEffect(() => {
    // Initial fetch
    refresh()

    // Set up interval for auto-refresh
    const interval = setInterval(refresh, REFRESH_INTERVAL)

    return () => clearInterval(interval)
  }, [refresh])

  return { ...data, refresh }
}
