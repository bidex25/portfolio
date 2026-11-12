import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  baseVx: number; baseVy: number
  size: number
  colorR: number; colorG: number; colorB: number
  opacity: number
  pulsePhase: number
  pulseSpeed: number
}

// Brand palette split into RGB so we can reuse in fillStyle/strokeStyle
const PALETTE = [
  { r: 212, g: 175, b: 55  }, // gold
  { r: 212, g: 175, b: 55  }, // gold (double weight)
  { r: 212, g: 175, b: 55  }, // gold (triple weight)
  { r: 180, g: 130, b: 20  }, // dark gold
  { r: 140, g: 60,  b: 220 }, // purple
  { r: 255, g: 255, b: 255 }, // white
]

function pick() { return PALETTE[Math.floor(Math.random() * PALETTE.length)] }

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let raf: number
    let rect = canvas.getBoundingClientRect()
    const CONNECTION = 145
    const MOUSE_R = 140

    function countFromSize() {
      const area = canvas!.offsetWidth * canvas!.offsetHeight
      return Math.min(Math.round(area / 7800), isTouch ? 50 : 110)
    }

    function init() {
      canvas!.width  = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      rect = canvas!.getBoundingClientRect()
      const n = countFromSize()
      const c = canvas!
      particles = Array.from({ length: n }, () => {
        const col = pick()
        const spd = Math.random() * 0.35 + 0.08
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          baseVx: Math.cos(angle) * spd,
          baseVy: Math.sin(angle) * spd,
          size: Math.random() * 1.8 + 0.4,
          colorR: col.r, colorG: col.g, colorB: col.b,
          opacity: Math.random() * 0.55 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.025 + 0.008,
        }
      })
    }

    function draw() {
      raf = requestAnimationFrame(draw)
      const w = canvas!.width, h = canvas!.height
      ctx!.clearRect(0, 0, w, h)

      const mx = mouse.current.x, my = mouse.current.y

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repulsion
        const dx = p.x - mx, dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_R && dist > 0) {
          const force = ((MOUSE_R - dist) / MOUSE_R) * 0.55
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Drift back toward base velocity
        p.vx += (p.baseVx - p.vx) * 0.012
        p.vy += (p.baseVy - p.vy) * 0.012

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 2.2) { p.vx = (p.vx / spd) * 2.2; p.vy = (p.vy / spd) * 2.2 }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -4) p.x = w + 4
        else if (p.x > w + 4) p.x = -4
        if (p.y < -4) p.y = h + 4
        else if (p.y > h + 4) p.y = -4

        // Pulse
        p.pulsePhase += p.pulseSpeed
        const r = p.size + Math.sin(p.pulsePhase) * 0.6

        // Particle dot
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, Math.max(r, 0.3), 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${p.colorR},${p.colorG},${p.colorB},${p.opacity})`
        ctx!.fill()

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ex = p.x - q.x, ey = p.y - q.y
          const d = Math.sqrt(ex * ex + ey * ey)
          if (d < CONNECTION) {
            const alpha = (1 - d / CONNECTION) * 0.38
            const gr = ctx!.createLinearGradient(p.x, p.y, q.x, q.y)
            gr.addColorStop(0, `rgba(${p.colorR},${p.colorG},${p.colorB},${alpha})`)
            gr.addColorStop(1, `rgba(${q.colorR},${q.colorG},${q.colorB},${alpha * 0.5})`)
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = gr
            ctx!.lineWidth = 0.65
            ctx!.stroke()
          }
        }
      }
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }
    const onResize = () => init()
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)

    if (!isTouch) {
      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseleave', onLeave)
    }
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelAnimationFrame(raf)
      if (!isTouch) {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseleave', onLeave)
      }
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [isTouch])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.75 }}
      aria-hidden="true"
    />
  )
}
