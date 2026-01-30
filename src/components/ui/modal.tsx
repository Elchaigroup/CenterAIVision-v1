'use client'

import { ReactNode, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { FadeIn, SlideIn } from './animations'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

export function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <FadeIn duration={200}>
        <div
          className="absolute inset-0 bg-midnight-slate/80 backdrop-blur-sm"
          onClick={onClose}
        />
      </FadeIn>
      <SlideIn direction="up" duration={300}>
        <div
          className={cn(
            'relative bg-card-bg border border-card-border rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl',
            className
          )}
        >
          <div className="flex items-center justify-between mb-6">
            {title && (
              <h2 className="text-xl font-semibold text-cloud-mist">{title}</h2>
            )}
            <button
              onClick={onClose}
              className="text-cloud-mist/60 hover:text-cloud-mist text-2xl leading-none transition-colors ml-auto"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          {children}
        </div>
      </SlideIn>
    </div>
  )
}
