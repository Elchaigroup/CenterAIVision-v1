'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  rotateAmplitude?: number
  scaleOnHover?: number
  perspective?: number
}

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

export function TiltCard({
  children,
  className = '',
  rotateAmplitude = 10,
  scaleOnHover = 1.02,
  perspective = 800
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)
  const scale = useSpring(1, springConfig)

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
  }

  function handleMouseLeave() {
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d'
      }}
      className={cn('tilt-card', className)}
    >
      {children}
    </motion.div>
  )
}
