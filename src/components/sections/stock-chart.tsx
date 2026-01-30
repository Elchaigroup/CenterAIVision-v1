'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { stockChartData } from '@/data/stock-data'

export function StockChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={stockChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2C93FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2C93FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#F5F7FA', opacity: 0.6, fontSize: 12 }}
          />
          <YAxis
            domain={['dataMin - 2', 'dataMax + 2']}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#F5F7FA', opacity: 0.6, fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#242E3A',
              border: '1px solid #2D3845',
              borderRadius: '8px',
              color: '#F5F7FA',
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#2C93FF"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
