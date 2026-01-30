'use client'

import { useEffect, useRef } from 'react'

interface TradingViewTickerProps {
  className?: string
}

export function TradingViewTicker({ className = '' }: TradingViewTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ''

    // Create the widget container
    const widgetContainer = document.createElement('div')
    widgetContainer.className = 'tradingview-widget-container__widget'
    containerRef.current.appendChild(widgetContainer)

    // Create and load the script
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: 'Bitcoin', proName: 'BITSTAMP:BTCUSD' },
        { description: 'Ethereum', proName: 'COINBASE:ETHUSD' },
        { description: 'Solana', proName: 'BINANCE:SOLUSD' },
        { description: 'BNB', proName: 'BINANCE:BNBUSD' },
        { description: 'XRP', proName: 'BITSTAMP:XRPUSD' },
        { description: 'S&P 500', proName: 'FOREXCOM:SPXUSD' },
        { description: 'NASDAQ', proName: 'NASDAQ:IXIC' },
        { description: 'Gold', proName: 'TVC:GOLD' },
        { description: 'Silver', proName: 'TVC:SILVER' },
        { description: 'Apple', proName: 'NASDAQ:AAPL' },
        { description: 'NVIDIA', proName: 'NASDAQ:NVDA' },
        { description: 'Tesla', proName: 'NASDAQ:TSLA' },
        { description: 'Microsoft', proName: 'NASDAQ:MSFT' },
        { description: 'Marathon Digital', proName: 'NASDAQ:MARA' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'regular',
      colorTheme: 'dark',
      locale: 'en',
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className={`tradingview-widget-container ${className}`}>
      <div ref={containerRef} />
    </div>
  )
}

export function TradingViewTickerCrypto({ className = '' }: TradingViewTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.innerHTML = ''

    const widgetContainer = document.createElement('div')
    widgetContainer.className = 'tradingview-widget-container__widget'
    containerRef.current.appendChild(widgetContainer)

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: 'Bitcoin', proName: 'BITSTAMP:BTCUSD' },
        { description: 'Ethereum', proName: 'COINBASE:ETHUSD' },
        { description: 'Solana', proName: 'BINANCE:SOLUSD' },
        { description: 'BNB', proName: 'BINANCE:BNBUSD' },
        { description: 'XRP', proName: 'BITSTAMP:XRPUSD' },
        { description: 'Cardano', proName: 'BINANCE:ADAUSD' },
        { description: 'Dogecoin', proName: 'BINANCE:DOGEUSD' },
        { description: 'Avalanche', proName: 'BINANCE:AVAXUSD' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'compact',
      colorTheme: 'dark',
      locale: 'en',
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className={`tradingview-widget-container ${className}`}>
      <div ref={containerRef} />
    </div>
  )
}
