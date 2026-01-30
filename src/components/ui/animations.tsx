'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion, useInView, useAnimation, Variants } from 'motion/react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const fadeInVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  direction = 'up'
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInVariants[direction]}
      transition={{
        duration,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export function Reveal({ children, className = '', threshold = 0.1, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

interface CounterUpProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CounterUp({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: CounterUpProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (end - startValue) * easeOut

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [hasStarted, end, duration])

  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}

interface CardLiftProps {
  children: ReactNode
  className?: string
}

export function CardLift({ children, className = '' }: CardLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  )
}

interface HoverGlowProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function HoverGlow({
  children,
  className = '',
  glowColor = 'rgba(44, 147, 255, 0.3)',
}: HoverGlowProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: `0 0 40px ${glowColor}`,
        transition: { duration: 0.3 }
      }}
      initial={{ boxShadow: 'none' }}
    >
      {children}
    </motion.div>
  )
}

interface SlideInProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.3,
  className = '',
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const variants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{
        duration,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({ children, staggerDelay = 0.1, className = '' }: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

interface ScaleOnHoverProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function ScaleOnHover({ children, className = '', scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
    >
      {children}
    </motion.div>
  )
}
