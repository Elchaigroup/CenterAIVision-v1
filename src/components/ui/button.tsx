'use client'

import { ReactNode, MouseEventHandler } from 'react'
import { motion, HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  animated?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  animated = true,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric-azure focus:ring-offset-2 focus:ring-offset-midnight-slate disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-electric-azure text-white hover:bg-electric-azure/90',
    secondary:
      'bg-card-bg text-cloud-mist border border-card-border hover:border-electric-azure',
    outline:
      'bg-transparent text-cloud-mist border border-card-border hover:border-electric-azure hover:text-electric-azure',
    ghost: 'bg-transparent text-cloud-mist hover:bg-card-bg hover:text-electric-azure',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-5 py-2.5 text-sm rounded-md',
    lg: 'px-8 py-3 text-base rounded-lg',
  }

  if (animated && !disabled) {
    return (
      <motion.button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        type={type}
        onClick={onClick}
        whileHover={{
          scale: 1.02,
          y: -2,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
