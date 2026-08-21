import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has scrolled into the viewport. Once it has,
 * the observer is disconnected - the returned flag never flips back to
 * false, so consumers can use it to trigger a one-off "reveal" animation.
 */
export const useInView = <T extends Element>(threshold = 0.15) => {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
