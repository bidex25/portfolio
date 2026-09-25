import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]()=+-*&^%$#@!;:|αβγδεζηθ'
    const fontSize = 14
    let columns: number[] = []
    let animFrame: number
    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    function resize() {
      canvas!.width  = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      const cols = Math.floor(canvas!.width / fontSize)
      columns = Array.from({ length: cols }, () => Math.random() * canvas!.height)
    }

    function draw(now: number) {
      animFrame = requestAnimationFrame(draw)
      if (now - lastTime < interval) return
      lastTime = now

      ctx!.fillStyle = 'rgba(5,5,5,0.05)'
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)
      ctx!.font = `${fontSize}px monospace`

      columns.forEach((y, i) => {
        const rand = Math.random()
        const color =
          rand < 0.7  ? '#D4AF37' :
          rand < 0.88 ? '#6B21A8' : '#22c55e'
        ctx!.fillStyle = color
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx!.fillText(char, i * fontSize, y)

        if (y > canvas!.height && Math.random() > 0.975) {
          columns[i] = 0
        }
        columns[i] += fontSize
      })
    }

    resize()
    window.addEventListener('resize', resize)
    animFrame = requestAnimationFrame(draw)

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animFrame)
      else animFrame = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 hidden md:block"
      aria-hidden="true"
    />
  )
}
