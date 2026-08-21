import { FC, ReactNode } from 'react'
import { useInView } from '@/lib/useInView'
import useMediaQuery from '@/lib/useMediaQuery'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'left' | 'right'

type Props = {
  children: ReactNode
  className?: string
  direction?: Direction
  delayMs?: number
}

const directionClasses: Record<Direction, string> = {
  up: 'slide-in-from-bottom-8',
  left: 'slide-in-from-left-8',
  right: 'slide-in-from-right-8'
}

/**
 * Fades/slides its children in the first time they scroll into view.
 * Falls back to rendering children plainly when the user prefers reduced
 * motion.
 */
export const Reveal: FC<Props> = ({
  children,
  className,
  direction = 'up',
  delayMs = 0
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={cn(
        !isInView && 'opacity-0',
        isInView &&
          cn(
            'animate-in duration-700 fill-mode-both fade-in',
            directionClasses[direction]
          ),
        className
      )}
      style={isInView ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
