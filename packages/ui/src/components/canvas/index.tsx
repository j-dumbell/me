import { FC, useRef, useEffect, useCallback } from 'react'

type Props = {
  width?: number
  height?: number
  nodeCount?: number
}

type Node = {
  id: number
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  glowIntensity: number
  floatOffsetX: number
  floatOffsetY: number
  floatPhase: number
  floatSpeed: number
}

type Edge = {
  from: number
  to: number
  pulseProgress: number
  isActive: boolean
}


export const CanvasDistributedGraph: FC<Props> = ({
  width,
  height,
  nodeCount = 15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const lastPulseTimeRef = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate nodes (no pre-generated edges - they're created dynamically)
  const generateNodes = useCallback(
    (nodeCount: number, canvasWidth: number, canvasHeight: number) => {
      const nodes: Node[] = []
      const padding = 80
      const floatRadius = 20 // Maximum floating distance (increased for more movement)

      // Helper function to check if a position would overlap with existing nodes
      const wouldOverlap = (
        x: number,
        y: number,
        radius: number,
        existingNodes: Node[]
      ): boolean => {
        for (const existingNode of existingNodes) {
          const dx = x - existingNode.baseX
          const dy = y - existingNode.baseY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const minDistance =
            radius + existingNode.radius + floatRadius * 2 + 2 // +2 for small buffer
          if (distance < minDistance) {
            return true
          }
        }
        return false
      }

      // Generate random node positions with collision detection
      for (let i = 0; i < nodeCount; i++) {
        const radius = 6 + Math.random() * 8 // Random radius between 6 and 14
        let baseX: number
        let baseY: number
        let attempts = 0
        const maxAttempts = 100

        // Try to find a non-overlapping position
        do {
          baseX = padding + Math.random() * (canvasWidth - padding * 2)
          baseY = padding + Math.random() * (canvasHeight - padding * 2)
          attempts++
        } while (
          wouldOverlap(baseX, baseY, radius, nodes) &&
          attempts < maxAttempts
        )

        nodes.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          radius,
          glowIntensity: 0,
          floatOffsetX: 0,
          floatOffsetY: 0,
          floatPhase: Math.random() * Math.PI * 2,
          floatSpeed: 0.3 + Math.random() * 0.4,
        })
      }

      return nodes
    },
    []
  )

  // Create a new edge and start a pulse from one node to another
  const startPulseToRandomNode = useCallback((fromNodeId: number) => {
    const nodes = nodesRef.current
    const edges = edgesRef.current

    // Find a random target node (different from the source)
    const availableTargets = nodes.filter((n) => n.id !== fromNodeId)
    if (availableTargets.length === 0) return

    const targetNode =
      availableTargets[Math.floor(Math.random() * availableTargets.length)]

    // Create a new edge
    const newEdge: Edge = {
      from: fromNodeId,
      to: targetNode.id,
      pulseProgress: 0,
      isActive: true,
    }

    edges.push(newEdge)
  }, [])

  // Draw the graph
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nodes = nodesRef.current
    const edges = edgesRef.current

    // Clear canvas with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw edges (pulses only, no lines)
    edges.forEach((edge) => {
      const fromNode = nodes[edge.from]
      const toNode = nodes[edge.to]

      if (!fromNode || !toNode) return

      // Draw pulse along edge
      if (edge.isActive) {
        const pulseX =
          fromNode.x + (toNode.x - fromNode.x) * edge.pulseProgress
        const pulseY =
          fromNode.y + (toNode.y - fromNode.y) * edge.pulseProgress

        // Pulse glow
        const gradient = ctx.createRadialGradient(
          pulseX,
          pulseY,
          0,
          pulseX,
          pulseY,
          15
        )
        gradient.addColorStop(0, `rgba(52, 211, 153, ${1 - edge.pulseProgress})`)
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(pulseX, pulseY, 15, 0, Math.PI * 2)
        ctx.fill()

        // Pulse core
        ctx.fillStyle = `rgba(52, 211, 153, ${1 - edge.pulseProgress * 0.5})`
        ctx.beginPath()
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      const radius = node.radius
      
      // Verify node is within canvas bounds
      if (node.x < 0 || node.x > canvas.width || node.y < 0 || node.y > canvas.height) {
        return // Skip nodes outside canvas
      }

      // Node glow
      if (node.glowIntensity > 0) {
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          radius,
          node.x,
          node.y,
          radius + 10
        )
        glowGradient.addColorStop(
          0,
          `rgba(52, 211, 153, ${node.glowIntensity})`
        )
        glowGradient.addColorStop(1, 'rgba(52, 211, 153, 0)')

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius + 10, 0, Math.PI * 2)
        ctx.fill()
      }

      // Node circle
      ctx.fillStyle = node.glowIntensity > 0.3 ? '#34d399' : '#1f2937' // gray-800
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
      ctx.fill()

      // Node border
      ctx.strokeStyle = node.glowIntensity > 0.3
        ? `rgba(52, 211, 153, ${0.8 + node.glowIntensity * 0.2})`
        : 'rgba(31, 41, 55, 0.6)' // gray-800 border
      ctx.lineWidth = 1.5
      ctx.stroke()
    })
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Get viewport dimensions (canvas should fill viewport)
    const getViewportSize = () => {
      if (width && height) {
        return { width, height }
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    const updateCanvasSize = () => {
      const { width: viewportWidth, height: viewportHeight } = getViewportSize()
      // Set canvas internal resolution (these are the actual pixel dimensions)
      canvas.width = viewportWidth
      canvas.height = viewportHeight
    }

    // Listen to window resize
    const handleWindowResize = () => {
      updateCanvasSize()
      // Regenerate nodes on resize
      const { width: viewportWidth, height: viewportHeight } = getViewportSize()
      const nodes = generateNodes(nodeCount, viewportWidth, viewportHeight)
      nodesRef.current = nodes
      edgesRef.current = []
    }
    window.addEventListener('resize', handleWindowResize)

    // Define animation loop first (before init uses it)
    const animate = (currentTime: number) => {
      const nodes = nodesRef.current
      const edges = edgesRef.current

      // Update floating animation for nodes
      nodes.forEach((node) => {
        node.floatPhase += node.floatSpeed * 0.01
        const floatRadius = 20 // Increased for more movement
        node.floatOffsetX = Math.sin(node.floatPhase) * floatRadius
        node.floatOffsetY = Math.cos(node.floatPhase * 1.3) * floatRadius
        node.x = node.baseX + node.floatOffsetX
        node.y = node.baseY + node.floatOffsetY
      })

      // Update pulse animations
      edges.forEach((edge, index) => {
        if (edge.isActive) {
          edge.pulseProgress += 0.02

          // Update node glow when pulse reaches target
          if (edge.pulseProgress >= 0.95) {
            const toNode = nodes[edge.to]
            if (toNode) {
              toNode.glowIntensity = 1
            }
          }

          // When pulse completes, emit from the target node to a random node
          if (edge.pulseProgress >= 1) {
            const targetNodeId = edge.to

            // Remove the completed edge
            const edgeIndex = edges.indexOf(edge)
            if (edgeIndex > -1) {
              edges.splice(edgeIndex, 1)
            }

            // Start a new pulse from the target node to a random other node
            startPulseToRandomNode(targetNodeId)
          }
        }
      })

      // Fade node glow
      nodes.forEach((node) => {
        if (node.glowIntensity > 0) {
          node.glowIntensity = Math.max(0, node.glowIntensity - 0.05)
        }
      })

      // Start new pulses periodically if no pulses are active
      // This ensures the animation continues
      const hasActivePulses = edges.some((e) => e.isActive)
      if (!hasActivePulses && currentTime - lastPulseTimeRef.current > 1500) {
        // Pick a random node to start a pulse from
        if (nodes.length > 1) {
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
          startPulseToRandomNode(randomNode.id)
          lastPulseTimeRef.current = currentTime
        }
      }

      draw()
      
      // Continue animation loop
      if (animationFrameRef.current !== null) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    // Wait for next frame to ensure DOM is ready
    const init = () => {
      updateCanvasSize()
      
      // Verify canvas has dimensions
      if (canvas.width === 0 || canvas.height === 0) {
        requestAnimationFrame(init)
        return
      }
      
      // Generate initial nodes (no pre-generated edges)
      const { width: viewportWidth, height: viewportHeight } = getViewportSize()
      const nodes = generateNodes(nodeCount, viewportWidth, viewportHeight)
      nodesRef.current = nodes
      edgesRef.current = []
      
      // Verify nodes were generated
      if (nodes.length === 0) {
        return
      }
      
      // Draw initial frame
      draw()
      
      // Start first pulse from a random node
      lastPulseTimeRef.current = performance.now()
      if (nodes.length > 1) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        startPulseToRandomNode(randomNode.id)
      }
      
      // Start animation loop
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    // Use setTimeout to ensure DOM is fully ready
    setTimeout(() => {
      init()
    }, 0)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [width, height, nodeCount, generateNodes, draw, startPulseToRandomNode])

  return (
    <div
      ref={containerRef}
      className="hidden lg:block"
      style={{ 
        pointerEvents: 'none', 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Behind content but visible
        backgroundColor: 'transparent' // No background
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  )
}
