'use client'

import { motion } from 'motion/react'
import { useMarket } from '@/lib/market-context'
import { formatPrice, formatChange } from '@/lib/yahoo-finance'
import { cn } from '@/lib/utils'

interface TickerItemProps {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  isLoading?: boolean
}

function TickerItem({ symbol, name, price, change, changePercent, isLoading }: TickerItemProps) {
  const isPositive = change >= 0

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 px-4 py-2 animate-pulse">
        <div className="h-4 w-16 bg-cloud-mist/20 rounded" />
        <div className="h-4 w-20 bg-cloud-mist/20 rounded" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 px-4 py-2 border-r border-electric-azure/10 last:border-r-0">
      <span className="text-sm font-medium text-electric-azure">{symbol}</span>
      <span className="text-sm font-semibold text-cloud-mist">
        {formatPrice(price, symbol)}
      </span>
      <span className={cn(
        'text-xs font-medium',
        isPositive ? 'text-positive' : 'text-negative'
      )}>
        {formatChange(change, changePercent)}
      </span>
    </div>
  )
}

export function MarketTicker() {
  const { btc, eth, stock, sp500, nasdaq, isLoading, lastUpdated } = useMarket()

  const tickerItems = [
    { symbol: 'BTC', name: 'Bitcoin', data: btc },
    { symbol: 'ETH', name: 'Ethereum', data: eth },
    { symbol: 'MARA', name: 'Marathon Digital', data: stock },
    { symbol: 'S&P 500', name: 'S&P 500', data: sp500 },
    { symbol: 'NASDAQ', name: 'NASDAQ', data: nasdaq },
  ]

  return (
    <div className="bg-card-bg/80 backdrop-blur-sm border-y border-electric-azure/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {tickerItems.map((item) => (
              <TickerItem
                key={item.symbol}
                symbol={item.symbol}
                name={item.name}
                price={item.data?.regularMarketPrice || 0}
                change={item.data?.regularMarketChange || 0}
                changePercent={item.data?.regularMarketChangePercent || 0}
                isLoading={isLoading}
              />
            ))}
          </div>
          {lastUpdated && (
            <div className="hidden md:flex items-center gap-2 text-xs text-cloud-mist/50 pl-4 shrink-0">
              <span className="w-2 h-2 bg-positive rounded-full animate-pulse" />
              Live
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function MarketTickerCompact() {
  const { btc, eth, isLoading } = useMarket()

  return (
    <div className="flex items-center gap-4">
      {btc && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-cloud-mist/60">BTC</span>
          <span className="text-sm font-semibold text-cloud-mist">
            ${btc.regularMarketPrice.toLocaleString()}
          </span>
          <span className={cn(
            'text-xs',
            btc.regularMarketChange >= 0 ? 'text-positive' : 'text-negative'
          )}>
            {btc.regularMarketChange >= 0 ? '+' : ''}{btc.regularMarketChangePercent.toFixed(2)}%
          </span>
        </div>
      )}
      {eth && (
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-xs text-cloud-mist/60">ETH</span>
          <span className="text-sm font-semibold text-cloud-mist">
            ${eth.regularMarketPrice.toLocaleString()}
          </span>
          <span className={cn(
            'text-xs',
            eth.regularMarketChange >= 0 ? 'text-positive' : 'text-negative'
          )}>
            {eth.regularMarketChange >= 0 ? '+' : ''}{eth.regularMarketChangePercent.toFixed(2)}%
          </span>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center gap-2 animate-pulse">
          <div className="h-4 w-20 bg-cloud-mist/20 rounded" />
        </div>
      )}
    </div>
  )
}
