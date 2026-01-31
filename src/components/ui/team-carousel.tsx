'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useAnimationControls, useMotionValue } from 'motion/react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TeamMember {
  name: string
  role: string
  responsibility: string
  image: string
  tag?: 'UAE' | 'EU'
}

interface TeamCarouselProps {
  members: TeamMember[]
  className?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function MemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex-shrink-0 w-[280px] mx-3 group">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card-bg via-card-bg to-[#1a2535] border border-card-border/50 shadow-lg shadow-black/20 transition-all duration-300 hover:border-electric-azure/40 hover:shadow-electric-azure/10 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container */}
        <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-electric-azure/5 to-core-blue/10">
          {!imageError ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-electric-azure/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-electric-azure">
                  {getInitials(member.name)}
                </span>
              </div>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-night-ink via-night-ink/20 to-transparent" />

          {/* Tag badge */}
          {member.tag && (
            <div className="absolute top-3 right-3">
              <span className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
                member.tag === 'UAE' && "bg-amber-500/20 text-amber-400 border border-amber-500/30",
                member.tag === 'EU' && "bg-blue-500/20 text-blue-400 border border-blue-500/30"
              )}>
                {member.tag}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 relative -mt-12 z-10">
          <div className="bg-card-bg/95 backdrop-blur-md rounded-xl p-4 border border-card-border/50 shadow-lg">
            <h3 className="font-semibold text-cloud-mist text-base mb-1">
              {member.name}
            </h3>
            <p className="text-electric-azure font-medium text-sm mb-2">
              {member.role}
            </p>
            <p className="text-cloud-mist/60 text-xs leading-relaxed line-clamp-2">
              {member.responsibility}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TeamCarousel({ members, className }: TeamCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const controls = useAnimationControls()

  // Duplicate members for infinite scroll effect
  const duplicatedMembers = [...members, ...members, ...members]

  const cardWidth = 280 + 24 // card width + margin
  const totalWidth = members.length * cardWidth

  const startAnimation = useCallback(() => {
    if (isPaused || isDragging) return

    const currentX = x.get()
    const remainingDistance = -totalWidth - currentX
    const duration = Math.abs(remainingDistance) / 50 // Adjust speed here

    controls.start({
      x: -totalWidth,
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }
    })
  }, [controls, isPaused, isDragging, totalWidth, x])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  const handleMouseEnter = () => {
    setIsPaused(true)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  useEffect(() => {
    if (!isPaused && !isDragging) {
      startAnimation()
    }
  }, [isPaused, isDragging, startAnimation])

  const handleDragStart = () => {
    setIsDragging(true)
    controls.stop()
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    // Normalize position to prevent going too far
    const currentX = x.get()
    const normalizedX = ((currentX % totalWidth) + totalWidth) % totalWidth - totalWidth
    x.set(normalizedX)
  }

  const scroll = (direction: 'left' | 'right') => {
    const currentX = x.get()
    const newX = direction === 'left'
      ? currentX + cardWidth
      : currentX - cardWidth

    controls.start({
      x: newX,
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
    }).then(() => {
      // Normalize after scroll
      const finalX = x.get()
      if (finalX > 0) {
        x.set(finalX - totalWidth)
      } else if (finalX < -totalWidth * 2) {
        x.set(finalX + totalWidth)
      }
    })
  }

  return (
    <div className={cn("relative", className)}>
      {/* Navigation Buttons */}
      <div className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll('left')}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card-bg/90 backdrop-blur-sm border border-card-border hover:border-electric-azure/50 flex items-center justify-center text-cloud-mist/70 hover:text-electric-azure transition-all duration-200 shadow-lg hover:shadow-electric-azure/20 focus:outline-none focus:ring-2 focus:ring-electric-azure focus:ring-offset-2 focus:ring-offset-night-ink"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll('right')}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card-bg/90 backdrop-blur-sm border border-card-border hover:border-electric-azure/50 flex items-center justify-center text-cloud-mist/70 hover:text-electric-azure transition-all duration-200 shadow-lg hover:shadow-electric-azure/20 focus:outline-none focus:ring-2 focus:ring-electric-azure focus:ring-offset-2 focus:ring-offset-night-ink"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-night-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-night-ink to-transparent z-10 pointer-events-none" />

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="overflow-hidden mx-8 md:mx-16"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex py-4"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {duplicatedMembers.map((member, index) => (
            <MemberCard key={`${member.name}-${index}`} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
