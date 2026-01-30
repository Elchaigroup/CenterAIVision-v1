'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SpotlightCard } from './spotlight-card'
import { TiltCard } from './tilt-card'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  tilt?: boolean
  spotlight?: boolean
  spotlightColor?: string
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  tilt = false,
  spotlight = true,
  spotlightColor
}: CardProps) {
  const cardContent = (
    <div
      className={cn(
        'bg-card-bg border border-card-border rounded-xl p-6 h-full',
        glow && 'glow-effect',
        hover && !tilt && 'card-hover',
        className
      )}
    >
      {children}
    </div>
  )

  // Apply tilt effect if enabled
  if (tilt) {
    return (
      <TiltCard className="h-full" rotateAmplitude={8} scaleOnHover={1.02}>
        {spotlight ? (
          <SpotlightCard className="h-full" spotlightColor={spotlightColor}>
            {cardContent}
          </SpotlightCard>
        ) : (
          cardContent
        )}
      </TiltCard>
    )
  }

  // Apply spotlight effect if enabled
  if (spotlight) {
    return (
      <SpotlightCard className="h-full" spotlightColor={spotlightColor}>
        {cardContent}
      </SpotlightCard>
    )
  }

  return cardContent
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
