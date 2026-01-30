'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { CardLift } from './animations'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  const content = (
    <div
      className={cn(
        'bg-card-bg border border-card-border rounded-xl p-6',
        glow && 'glow-effect',
        className
      )}
    >
      {children}
    </div>
  )

  if (hover) {
    return <CardLift className="h-full">{content}</CardLift>
  }

  return content
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-semibold text-cloud-mist', className)}>{children}</h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-sm text-cloud-mist/70 mt-1', className)}>{children}</p>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-4 pt-4 border-t border-card-border', className)}>{children}</div>
}
