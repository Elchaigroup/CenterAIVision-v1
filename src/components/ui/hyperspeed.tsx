'use client'

import { useEffect, useRef } from 'react'

interface HyperspeedProps {
  className?: string
  effectOptions?: {
    onSpeedUp?: () => void
    onSlowDown?: () => void
    distortion?: 'turbulentDistortion' | 'mountainDistortion' | 'xyDistortion' | 'LongRaceDistortion' | 'deepDistortion'
    length?: number
    roadWidth?: number
    islandWidth?: number
    lanesPerRoad?: number
    fov?: number
    fovSpeedUp?: number
    speedUp?: number
    carLightsFade?: number
    totalSideLightSticks?: number
    lightPairsPerRoadWay?: number
    shoulderLinesWidthPercentage?: number
    brokenLinesWidthPercentage?: number
    brokenLinesLengthPercentage?: number
    lightStickWidth?: [number, number]
    lightStickHeight?: [number, number]
    movingAwaySpeed?: [number, number]
    movingCloserSpeed?: [number, number]
    carLightsLength?: [number, number]
    carLightsRadius?: [number, number]
    carWidthPercentage?: [number, number]
    carShiftX?: [number, number]
    carFloorSeparation?: [number, number]
    colors?: {
      roadColor?: number
      islandColor?: number
      background?: number
      shoulderLines?: number
      brokenLines?: number
      leftCars?: [number, number, number]
      rightCars?: [number, number, number]
      sticks?: number
    }
  }
}

export function Hyperspeed({ className = '', effectOptions }: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let stars: Star[] = []
    const numStars = 400
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    let speed = 15

    interface Star {
      x: number
      y: number
      z: number
      pz: number
      color: string
    }

    const colors = [
      '#2C93FF', // electric-azure
      '#60B5FF', // lighter blue
      '#ffffff', // white
      '#a855f7', // purple
      '#06b6d4', // cyan
    ]

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    function initStars() {
      stars = []
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas!.width - canvas!.width / 2,
          y: Math.random() * canvas!.height - canvas!.height / 2,
          z: Math.random() * canvas!.width,
          pz: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    function drawStar(star: Star) {
      if (!ctx || !canvas) return

      const x = (star.x / star.z) * canvas.width + canvas.width / 2
      const y = (star.y / star.z) * canvas.height + canvas.height / 2

      const px = (star.x / star.pz) * canvas.width + canvas.width / 2
      const py = (star.y / star.pz) * canvas.height + canvas.height / 2

      const size = Math.max(0, (1 - star.z / canvas.width) * 4)

      ctx.beginPath()
      ctx.strokeStyle = star.color
      ctx.lineWidth = size
      ctx.lineCap = 'round'
      ctx.moveTo(px, py)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Add glow effect
      ctx.shadowBlur = 10
      ctx.shadowColor = star.color
    }

    function animate() {
      if (!ctx || !canvas) return

      // Create trailing effect
      ctx.fillStyle = 'rgba(10, 15, 30, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.shadowBlur = 0

      for (const star of stars) {
        star.pz = star.z
        star.z -= speed

        if (star.z < 1) {
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.y = Math.random() * canvas.height - canvas.height / 2
          star.z = canvas.width
          star.pz = star.z
          star.color = colors[Math.floor(Math.random() * colors.length)]
        }

        drawStar(star)
      }

      // Add center glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 3
      )
      gradient.addColorStop(0, 'rgba(44, 147, 255, 0.05)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    // Speed variations
    const speedInterval = setInterval(() => {
      speed = 10 + Math.random() * 15
    }, 3000)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      clearInterval(speedInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ background: 'linear-gradient(to bottom, #0a0f1e, #0d1424, #0a0f1e)' }}
    />
  )
}

// Alternative: Road/Highway version
export function HyperspeedRoad({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    interface LightTrail {
      x: number
      y: number
      speed: number
      length: number
      color: string
      side: 'left' | 'right'
    }
    let trails: LightTrail[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initTrails()
    }

    function initTrails() {
      trails = []
      const numTrails = 60
      for (let i = 0; i < numTrails; i++) {
        addTrail()
      }
    }

    function addTrail() {
      if (!canvas) return
      const side = Math.random() > 0.5 ? 'left' : 'right'
      const isOrange = side === 'right'

      trails.push({
        x: side === 'left'
          ? canvas.width * 0.2 + Math.random() * canvas.width * 0.25
          : canvas.width * 0.55 + Math.random() * canvas.width * 0.25,
        y: Math.random() * canvas.height,
        speed: 3 + Math.random() * 8,
        length: 50 + Math.random() * 150,
        color: isOrange
          ? `rgba(251, 146, 60, ${0.3 + Math.random() * 0.5})`
          : `rgba(44, 147, 255, ${0.3 + Math.random() * 0.5})`,
        side,
      })
    }

    function drawRoad() {
      if (!ctx || !canvas) return

      const cx = canvas.width / 2
      const horizon = canvas.height * 0.35

      // Road surface with perspective
      ctx.beginPath()
      ctx.moveTo(cx - 20, horizon)
      ctx.lineTo(0, canvas.height)
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(cx + 20, horizon)
      ctx.closePath()

      const roadGradient = ctx.createLinearGradient(0, horizon, 0, canvas.height)
      roadGradient.addColorStop(0, 'rgba(30, 40, 60, 0.3)')
      roadGradient.addColorStop(1, 'rgba(20, 30, 50, 0.5)')
      ctx.fillStyle = roadGradient
      ctx.fill()

      // Center line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(cx, horizon)
      ctx.lineTo(cx, canvas.height)
      ctx.stroke()
    }

    function animate() {
      if (!ctx || !canvas) return

      // Clear with fade
      ctx.fillStyle = 'rgba(10, 15, 30, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawRoad()

      // Draw and update trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const trail = trails[i]

        // Calculate perspective scale
        const perspectiveY = trail.y / canvas.height
        const scale = 0.1 + perspectiveY * 0.9

        // Draw light trail
        const gradient = ctx.createLinearGradient(
          trail.x, trail.y - trail.length * scale,
          trail.x, trail.y
        )
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(1, trail.color)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2 + scale * 4
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(trail.x, trail.y - trail.length * scale)
        ctx.lineTo(trail.x, trail.y)
        ctx.stroke()

        // Add glow
        ctx.shadowBlur = 15 * scale
        ctx.shadowColor = trail.color

        // Move trail
        trail.y += trail.speed * scale

        // Spread trails as they come closer
        if (trail.side === 'left') {
          trail.x -= trail.speed * 0.3 * scale
        } else {
          trail.x += trail.speed * 0.3 * scale
        }

        // Reset trail
        if (trail.y > canvas.height + trail.length) {
          trails.splice(i, 1)
          addTrail()
        }
      }

      ctx.shadowBlur = 0

      // Horizon glow
      const horizonGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.35, 0,
        canvas.width / 2, canvas.height * 0.35, canvas.width * 0.3
      )
      horizonGlow.addColorStop(0, 'rgba(44, 147, 255, 0.15)')
      horizonGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)')
      horizonGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = horizonGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ background: 'linear-gradient(to bottom, #0a0f1e 0%, #0d1424 50%, #0a0f1e 100%)' }}
    />
  )
}
