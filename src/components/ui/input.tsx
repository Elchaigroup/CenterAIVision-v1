'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    return (
      <div className="w-full">
        {label && (
          <motion.label
            className="block text-sm font-medium text-cloud-mist mb-1.5"
            animate={{
              color: isFocused ? 'rgb(44, 147, 255)' : 'rgb(245, 247, 250)'
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        <motion.div
          animate={{
            scale: isFocused ? 1.01 : 1
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25
          }}
        >
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </motion.div>
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-sm text-negative"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

Input.displayName = 'Input'
