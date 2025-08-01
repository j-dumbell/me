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

export const AsciinemaPlayer: FC<AsciinemaPlayerProps> = ({
  src,
  autoPlay = false,
  loop = false,
  theme = 'monokai',
  className = ''
}) => {
  const playerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [playerInstance, setPlayerInstance] = useState<any>(null)

  // Intersection Observer to detect when the player becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (playerRef.current) {
      observer.observe(playerRef.current)
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current)
      }
    }
  }, [])

  // Initialize player when visible
  useEffect(() => {
    if (playerRef.current && isVisible && !playerInstance) {
      const instance = Player.create(src, playerRef.current, {
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
    <div 
      ref={playerRef} 
      className={`w-full asciinema-player ${className}`}
    />
  )
}
