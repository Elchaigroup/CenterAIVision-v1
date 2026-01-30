'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-electric-azure/20 text-electric-azure border-electric-azure/30',
    success: 'bg-positive/20 text-positive border-positive/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    info: 'bg-core-blue/30 text-cloud-mist border-core-blue/50',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
