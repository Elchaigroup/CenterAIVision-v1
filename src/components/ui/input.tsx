'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-cloud-mist mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2.5 bg-midnight-slate border border-card-border rounded-lg',
            'text-cloud-mist placeholder:text-cloud-mist/40',
            'focus:outline-none focus:ring-2 focus:ring-electric-azure focus:border-transparent',
            'transition-all duration-200',
            error && 'border-negative focus:ring-negative',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-negative">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
