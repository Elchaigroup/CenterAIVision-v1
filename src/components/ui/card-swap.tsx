'use client'

import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'
import gsap from 'gsap'

interface CardSwapProps {
  children: ReactNode
  width?: number
  height?: number
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
  skewAmount?: number
  easing?: 'elastic' | 'smooth'
  onCardClick?: (index: number) => void
  className?: string
}

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`card-swap-item absolute top-1/2 left-1/2 rounded-xl border border-electric-azure/20 bg-card-bg transform-style-preserve-3d will-change-transform backface-hidden ${className}`}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export function CardSwap({
  children,
  width = 300,
  height = 400,
  cardDistance = 40,
  verticalDistance = 20,
  delay = 4000,
  pauseOnHover = true,
  skewAmount = 4,
  easing = 'smooth',
  onCardClick,
  className = '',
}: CardSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const isPausedRef = useRef(false)
  const childArray = Children.toArray(children)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (cards.length === 0) return

    const totalCards = cards.length

    // Calculate positions for stacked cards
    const getSlotPosition = (slotIndex: number) => {
      const normalizedIndex = slotIndex / (totalCards - 1)
      return {
        x: -width / 2 + normalizedIndex * cardDistance,
        y: -height / 2 - normalizedIndex * verticalDistance,
        z: -normalizedIndex * 50,
        skew: normalizedIndex * skewAmount,
      }
    }

    // Initial card positions
    cards.forEach((card, i) => {
      const pos = getSlotPosition(i)
      gsap.set(card, {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        skewY: pos.skew,
        zIndex: totalCards - i,
      })
    })

    // Animation function
    const animateSwap = () => {
      if (isPausedRef.current) return

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(animateSwap, delay)
        },
      })

      timelineRef.current = tl

      const easingConfig = easing === 'elastic'
        ? 'elastic.out(1, 0.8)'
        : 'power2.inOut'

      // Move front card to back
      const frontCard = cards[0]
      const backPosition = getSlotPosition(totalCards - 1)

      tl.to(frontCard, {
        x: backPosition.x - 100,
        y: backPosition.y - 50,
        z: backPosition.z - 100,
        skewY: backPosition.skew + 10,
        opacity: 0.5,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to(frontCard, {
          x: backPosition.x,
          y: backPosition.y,
          z: backPosition.z,
          skewY: backPosition.skew,
          opacity: 1,
          zIndex: 1,
          duration: 0.4,
          ease: easingConfig,
        })

      // Move all other cards forward
      cards.slice(1).forEach((card, i) => {
        const newPos = getSlotPosition(i)
        tl.to(
          card,
          {
            x: newPos.x,
            y: newPos.y,
            z: newPos.z,
            skewY: newPos.skew,
            zIndex: totalCards - i,
            duration: 0.6,
            ease: easingConfig,
          },
          '<'
        )
      })

      // Reorder array for next iteration
      cards.push(cards.shift()!)
    }

    // Start animation after initial delay
    const initialTimer = setTimeout(animateSwap, delay)

    return () => {
      clearTimeout(initialTimer)
      timelineRef.current?.kill()
    }
  }, [children, width, height, cardDistance, verticalDistance, delay, skewAmount, easing])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isPausedRef.current = true
      timelineRef.current?.pause()
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isPausedRef.current = false
      timelineRef.current?.resume()
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-swap-container relative ${className}`}
      style={{
        width,
        height,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {childArray.map((child, index) => {
        if (!isValidElement(child)) return null
        return (
          <Card
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            className="cursor-pointer transition-shadow hover:shadow-lg hover:shadow-electric-azure/20"
          >
            <div
              onClick={() => onCardClick?.(index)}
              style={{ width, height }}
              className="overflow-hidden rounded-xl"
            >
              {child}
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export { Card as SwapCard }
