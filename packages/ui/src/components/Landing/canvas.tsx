import React, { useEffect, useRef } from 'react'

const randomNumber = (min: number, max: number): number =>
  Math.random() * (max - min) + min

const randomColour = (): string => {
  const r = Math.floor(randomNumber(200, 255))
  const g = Math.floor(randomNumber(200, 255))
  const b = Math.floor(randomNumber(200, 255))
  return `rgb(${r},${g},${b})`
}

abstract class Shape {
  constructor(
    public canvasWidth: number,
    public canvasHeight: number,
    public x: number,
    public y: number,
    public vx: number,
    public vy: number
  ) {}

  updatePosition(): void {
    this.x += this.vx
    this.y += this.vy
  }

  isOutside(): boolean {
    return this.x > this.canvasWidth || this.y > this.canvasHeight
  }

  abstract draw(ctx: CanvasRenderingContext2D): void
}

class Circle extends Shape {
  public radius: number
  public colour: string

  constructor(canvasWidth: number, canvasHeight: number) {
    super(
      canvasWidth,
      canvasHeight,
      randomNumber(-canvasWidth / 2, 0),
      randomNumber(-canvasHeight / 2, 0),
      randomNumber(1, 5),
      randomNumber(1, 5)
    )
    this.radius = randomNumber(5, 20)
    this.colour = randomColour()
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.colour
    ctx.fill()
  }
}

type CanvasProps = { className: string }

export const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circles: Circle[] = []

    const createCircleWithDelay = (): void => {
      const circle = new Circle(canvas.width, canvas.height)
      circles.push(circle)

      setTimeout(createCircleWithDelay, Math.random() * 2000)
    }

    createCircleWithDelay()

    const animate = (): void => {
      requestAnimationFrame(animate)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < circles.length; i++) {
        if (circles[i].isOutside()) {
          circles.splice(i, 1)
          i--
        } else {
          circles[i].updatePosition()
          circles[i].draw(ctx)
        }
      }
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className={props.className} />
}
