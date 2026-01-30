'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useMarketData } from '@/hooks/use-market-data'
import { MarketData } from '@/lib/yahoo-finance'

interface MarketContextType extends MarketData {
  refresh: () => Promise<void>
}

const MarketContext = createContext<MarketContextType | null>(null)

export function MarketProvider({ children }: { children: ReactNode }) {
  const marketData = useMarketData()

  return (
    <MarketContext.Provider value={marketData}>
      {children}
    </MarketContext.Provider>
  )
}

export function useMarket() {
  const context = useContext(MarketContext)
  if (!context) {
    throw new Error('useMarket must be used within a MarketProvider')
  }
  return context
}
