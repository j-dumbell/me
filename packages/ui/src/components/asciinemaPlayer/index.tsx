import { useEffect, useRef, FC, useState } from 'react'
// @ts-expect-error no TS def
import * as Player from 'asciinema-player'
import 'asciinema-player/dist/bundle/asciinema-player.css'

type PlayerTheme =
  | 'asciinema'
  | 'tango'
  | 'solarized-dark'
  | 'solarized-light'
  | 'monokai'

type AsciinemaPlayerProps = {
  src: string
  autoPlay?: boolean
  loop?: boolean
  theme?: PlayerTheme
  className?: string
}

// asciinema-player has no TS definitions - a minimal shape for the instance
// returned by Player.create is enough for how we use it here.
type PlayerInstance = {
  dispose: () => void
}

export const AsciinemaPlayer: FC<AsciinemaPlayerProps> = ({
  src,
  autoPlay = false,
  loop = false,
  theme = 'monokai',
  className = ''
}) => {
  const playerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [playerInstance, setPlayerInstance] = useState<PlayerInstance | null>(
    null
  )

  // Intersection Observer to detect when the player becomes visible
  useEffect(() => {
    const element = playerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Initialize player when visible
  useEffect(() => {
    if (playerRef.current && isVisible && !playerInstance) {
      const instance: PlayerInstance = Player.create(src, playerRef.current, {
        autoPlay,
        loop,
        startAt: 0,
        speed: 1,
        idleTimeLimit: 2,
        theme,
        poster: 'npt:0:21',
        fit: 'width',
        fontSize: 'small',
        preload: true,
        terminalFontFamily:
          'Consolas, Menlo, "Bitstream Vera Sans Mono", monospace, "Powerline Symbols"'
      })
      setPlayerInstance(instance)
    }
  }, [src, autoPlay, loop, theme, isVisible, playerInstance])

  // Cleanup player when component unmounts
  useEffect(() => {
    return () => {
      if (playerInstance) {
        try {
          playerInstance.dispose()
        } catch (error) {
          console.warn('Error disposing asciinema player:', error)
        }
      }
    }
  }, [playerInstance])

  return (
    <div ref={playerRef} className={`asciinema-player w-full ${className}`} />
  )
}
