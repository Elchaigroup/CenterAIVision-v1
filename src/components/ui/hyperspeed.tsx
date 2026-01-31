'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HyperspeedProps {
  className?: string
}

export function Hyperspeed({ className = '' }: HyperspeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0a0f1c, 10, 400)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      90,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 8, -5)
    camera.lookAt(0, 6, 30)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0a0f1c, 1)
    container.appendChild(renderer.domElement)

    // Center AI Vision brand colors
    const colors = [
      0x2C93FF, // electric-azure
      0x06b6d4, // cyan
      0x8b5cf6, // purple
      0xa855f7, // violet
      0x60B5FF, // light blue
      0xec4899, // pink
    ]

    // Light trails (car lights effect)
    interface LightTrail {
      mesh: THREE.Mesh
      speed: number
      lane: number
      side: 'left' | 'right'
    }

    const trails: LightTrail[] = []
    const trailGeometry = new THREE.BoxGeometry(0.15, 0.08, 8)

    function createTrail(side: 'left' | 'right', z: number = 0) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.9,
      })

      const mesh = new THREE.Mesh(trailGeometry, material)

      // Position based on side
      const laneOffset = 3 + Math.random() * 12
      mesh.position.x = side === 'left' ? -laneOffset : laneOffset
      mesh.position.y = 0.5 + Math.random() * 2
      mesh.position.z = z || 200 + Math.random() * 200

      // Add glow sprite
      const glowTexture = createGlowTexture(color)
      const glowMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })
      const glow = new THREE.Sprite(glowMaterial)
      glow.scale.set(4, 4, 1)
      glow.position.z = 4
      mesh.add(glow)

      scene.add(mesh)

      return {
        mesh,
        speed: 1.5 + Math.random() * 2,
        lane: laneOffset,
        side,
      }
    }

    function createGlowTexture(color: number) {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')!

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      const colorStr = '#' + color.toString(16).padStart(6, '0')
      gradient.addColorStop(0, colorStr)
      gradient.addColorStop(0.3, colorStr + '80')
      gradient.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 64, 64)

      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }

    // Create initial trails
    for (let i = 0; i < 50; i++) {
      const side = Math.random() > 0.5 ? 'left' : 'right'
      trails.push(createTrail(side, Math.random() * 400))
    }

    // Road lines
    const roadLineGeometry = new THREE.BoxGeometry(0.1, 0.02, 400)
    const roadLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x2C93FF,
      transparent: true,
      opacity: 0.3,
    })

    // Center lines
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue
      const line = new THREE.Mesh(roadLineGeometry, roadLineMaterial)
      line.position.set(i * 0.5, 0.01, 200)
      scene.add(line)
    }

    // Side lines
    const sideLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4,
    })
    for (let i = 0; i < 10; i++) {
      const leftLine = new THREE.Mesh(roadLineGeometry, sideLineMaterial)
      leftLine.position.set(-5 - i * 2, 0.01, 200)
      scene.add(leftLine)

      const rightLine = new THREE.Mesh(roadLineGeometry, sideLineMaterial)
      rightLine.position.set(5 + i * 2, 0.01, 200)
      scene.add(rightLine)
    }

    // Add curved tunnel lines
    const curvePoints = []
    for (let i = 0; i <= 100; i++) {
      const t = i / 100
      const z = t * 400
      const curve = Math.sin(t * Math.PI) * 10
      curvePoints.push(new THREE.Vector3(0, curve + 8, z))
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints)
    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, false)

    // Multiple curved lines
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 20 + Math.random() * 10
      const material = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.3,
      })

      const curvedPoints: THREE.Vector3[] = []
      for (let j = 0; j <= 50; j++) {
        const t = j / 50
        const z = t * 400
        const x = Math.cos(angle) * radius * (1 - t * 0.5)
        const y = Math.sin(angle) * radius * (1 - t * 0.5) + 8
        curvedPoints.push(new THREE.Vector3(x, Math.abs(y), z))
      }

      const lineCurve = new THREE.CatmullRomCurve3(curvedPoints)
      const lineGeometry = new THREE.TubeGeometry(lineCurve, 50, 0.08, 4, false)
      const lineMesh = new THREE.Mesh(lineGeometry, material)
      scene.add(lineMesh)
    }

    // Animation
    let animationId: number
    const clock = new THREE.Clock()

    function animate() {
      const delta = clock.getDelta()

      // Move trails towards camera
      trails.forEach((trail, index) => {
        trail.mesh.position.z -= trail.speed * 60 * delta

        // Curve effect - trails curve outward as they approach
        const progress = 1 - trail.mesh.position.z / 400
        const curveAmount = progress * progress * 15
        if (trail.side === 'left') {
          trail.mesh.position.x = -trail.lane - curveAmount
        } else {
          trail.mesh.position.x = trail.lane + curveAmount
        }

        // Scale up as it approaches
        const scale = 1 + progress * 2
        trail.mesh.scale.set(scale, scale, 1 + progress * 3)

        // Reset when past camera
        if (trail.mesh.position.z < -20) {
          trail.mesh.position.z = 300 + Math.random() * 100
          trail.mesh.position.x = trail.side === 'left' ? -trail.lane : trail.lane
          trail.mesh.scale.set(1, 1, 1)
          trail.speed = 1.5 + Math.random() * 2
        }
      })

      // Subtle camera movement
      camera.position.x = Math.sin(clock.elapsedTime * 0.1) * 0.5
      camera.position.y = 8 + Math.sin(clock.elapsedTime * 0.15) * 0.3

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    function handleResize() {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)

      trails.forEach((trail) => {
        scene.remove(trail.mesh)
        trail.mesh.geometry.dispose()
        ;(trail.mesh.material as THREE.Material).dispose()
      })

      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ background: '#0a0f1c' }}
    />
  )
}
