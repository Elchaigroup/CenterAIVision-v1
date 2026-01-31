'use client'

import { useEffect, useRef } from 'react'

interface HyperspeedProps {
  className?: string
}

export function Hyperspeed({ className = '' }: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    interface LightTrail {
      startX: number
      startY: number
      controlX1: number
      controlY1: number
      controlX2: number
      controlY2: number
      endX: number
      endY: number
      progress: number
      speed: number
      color: string
      width: number
      glowColor: string
    }

    let trails: LightTrail[] = []

    // Center AI Vision brand colors
    const colors = [
      { stroke: '#2C93FF', glow: 'rgba(44, 147, 255, 0.8)' },   // electric-azure
      { stroke: '#60B5FF', glow: 'rgba(96, 181, 255, 0.8)' },   // light blue
      { stroke: '#06b6d4', glow: 'rgba(6, 182, 212, 0.8)' },    // cyan
      { stroke: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.8)' },   // purple
      { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.8)' },   // violet
      { stroke: '#06b6d4', glow: 'rgba(6, 182, 212, 0.8)' },    // cyan (more weight)
      { stroke: '#2C93FF', glow: 'rgba(44, 147, 255, 0.8)' },   // electric-azure (more weight)
    ]

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createTrail(): LightTrail {
      if (!canvas) return {} as LightTrail

      const side = Math.random() > 0.5 ? 'left' : 'right'
      const colorSet = colors[Math.floor(Math.random() * colors.length)]

      // Horizon point (vanishing point)
      const horizonX = canvas.width * 0.5
      const horizonY = canvas.height * 0.35

      // Start from horizon area
      const startX = horizonX + (Math.random() - 0.5) * 100
      const startY = horizonY + Math.random() * 50

      // End at bottom of screen, spread out
      const spreadFactor = side === 'left' ? -1 : 1
      const endX = horizonX + spreadFactor * (canvas.width * 0.3 + Math.random() * canvas.width * 0.4)
      const endY = canvas.height + 100

      // Control points for smooth curve
      const midY = (startY + endY) / 2
      const curvature = spreadFactor * (100 + Math.random() * 200)

      return {
        startX,
        startY,
        controlX1: startX + curvature * 0.3,
        controlY1: startY + (midY - startY) * 0.5,
        controlX2: endX - curvature * 0.5,
        controlY2: midY + (endY - midY) * 0.3,
        endX,
        endY,
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        color: colorSet.stroke,
        width: 1.5 + Math.random() * 2.5,
        glowColor: colorSet.glow,
      }
    }

    function initTrails() {
      trails = []
      const numTrails = 25
      for (let i = 0; i < numTrails; i++) {
        const trail = createTrail()
        trail.progress = Math.random() // Stagger initial positions
        trails.push(trail)
      }
    }

    function getPointOnCurve(trail: LightTrail, t: number) {
      const t1 = 1 - t
      const t2 = t1 * t1
      const t3 = t2 * t1
      const tt = t * t
      const ttt = tt * t

      return {
        x: t3 * trail.startX + 3 * t2 * t * trail.controlX1 + 3 * t1 * tt * trail.controlX2 + ttt * trail.endX,
        y: t3 * trail.startY + 3 * t2 * t * trail.controlY1 + 3 * t1 * tt * trail.controlY2 + ttt * trail.endY,
      }
    }

    function drawTrail(trail: LightTrail) {
      if (!ctx || !canvas) return

      const trailLength = 0.15 // Length of visible trail
      const startT = Math.max(0, trail.progress - trailLength)
      const endT = trail.progress

      if (startT >= 1) return

      // Draw the glowing trail
      ctx.beginPath()

      const segments = 30
      let firstPoint = true

      for (let i = 0; i <= segments; i++) {
        const t = startT + (endT - startT) * (i / segments)
        if (t > 1) break

        const point = getPointOnCurve(trail, t)

        if (firstPoint) {
          ctx.moveTo(point.x, point.y)
          firstPoint = false
        } else {
          ctx.lineTo(point.x, point.y)
        }
      }

      // Create gradient along the trail for fade effect
      const startPoint = getPointOnCurve(trail, startT)
      const endPoint = getPointOnCurve(trail, Math.min(endT, 1))

      const gradient = ctx.createLinearGradient(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.3, trail.color)
      gradient.addColorStop(1, trail.color)

      // Draw main line
      ctx.strokeStyle = gradient
      ctx.lineWidth = trail.width * (0.5 + trail.progress * 1.5) // Thicker as it comes closer
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()

      // Draw glow
      ctx.shadowBlur = 20
      ctx.shadowColor = trail.glowColor
      ctx.strokeStyle = gradient
      ctx.lineWidth = trail.width * 0.5 * (0.5 + trail.progress * 1.5)
      ctx.stroke()
      ctx.shadowBlur = 0

      // Draw bright head
      if (endT <= 1) {
        const headPoint = getPointOnCurve(trail, Math.min(endT, 1))
        const headSize = trail.width * (1 + trail.progress * 2)

        ctx.beginPath()
        ctx.arc(headPoint.x, headPoint.y, headSize, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.shadowBlur = 15
        ctx.shadowColor = trail.glowColor
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    function animate() {
      if (!ctx || !canvas) return

      // Clear with slight fade for motion blur effect
      ctx.fillStyle = 'rgba(10, 15, 28, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw trails
      for (let i = 0; i < trails.length; i++) {
        const trail = trails[i]

        trail.progress += trail.speed

        // Reset trail when complete
        if (trail.progress > 1.2) {
          trails[i] = createTrail()
        }

        drawTrail(trail)
      }

      // Add subtle horizon glow
      const horizonGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.35, 0,
        canvas.width / 2, canvas.height * 0.35, canvas.width * 0.4
      )
      horizonGlow.addColorStop(0, 'rgba(44, 147, 255, 0.08)')
      horizonGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)')
      horizonGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = horizonGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initTrails()
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
      style={{ background: 'linear-gradient(180deg, #0a0f1c 0%, #0d1220 40%, #0a0f1c 100%)' }}
    />
  )
}
