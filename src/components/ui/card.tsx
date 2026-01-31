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
  variant?: 'default' | 'glass'
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  tilt = false,
  spotlight = true,
  spotlightColor,
  variant = 'default'
}: CardProps) {
  const isGlass = variant === 'glass'

  const cardContent = (
    <div
      className={cn(
        'rounded-xl p-6 h-full relative overflow-hidden',
        isGlass && 'liquid-glass glass-shimmer bg-white/[0.02] backdrop-blur-2xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]',
        !isGlass && 'bg-gradient-to-br from-card-bg via-card-bg to-[#1a2535] border border-card-border',
        glow && 'glow-effect',
        hover && !tilt && !isGlass && 'card-hover',
        className
      )}
    >
      {/* Subtle gradient overlay for non-glass cards */}
      {!isGlass && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric-azure/[0.03] via-transparent to-core-blue/[0.05] pointer-events-none" />
      )}
      {/* Inner glow effect for glass cards */}
      {isGlass && (
        <>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-electric-azure/[0.05] to-transparent pointer-events-none" />
        </>
      )}
      <div className="relative z-10">{children}</div>
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
