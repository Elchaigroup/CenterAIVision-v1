'use client'

import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  className?: string
  animated?: boolean
}

export function Badge({ children, variant = 'default', className, animated = true }: BadgeProps) {
  const variants = {
    default: 'bg-electric-azure/20 text-electric-azure border-electric-azure/30',
    success: 'bg-positive/20 text-positive border-positive/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    info: 'bg-core-blue/30 text-cloud-mist border-core-blue/50',
  }

  if (animated) {
    return (
      <motion.span
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border',
          variants[variant],
          className
        )}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}
      >
        {children}
      </motion.span>
    )
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
