import React from 'react'
import { Button } from '@/components/ui/button'
import { CaretDownIcon } from '@radix-ui/react-icons'
import HeroImg from '../../assets/hero.png'

// const scrollToId = (targetId: string): void => {
//   const targetElement = document.getElementById(targetId)
//   if (!targetElement) {
//     console.error('element not found')
//     return
//   }
//   const pixelsToScroll = window.scrollY - targetElement.offsetTop
//   window.scrollTo({ top: -pixelsToScroll, left: 0, behavior: 'smooth' })
// }

export const Hero: React.FC = () => {
  return (
    <section className="flex h-screen">
      <div className="container m-auto flex flex-wrap items-center justify-center px-4 md:px-6">
        <div className="mr-20 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              James Dumbell
            </h1>
            <p className="mx-auto max-w-[700px] text-2xl text-gray-500 dark:text-gray-400 md:text-xl">
              I'm a software engineer.
            </p>
            <Button>
              Let's go!
              <CaretDownIcon className="ml-2 size-4" />
            </Button>
          </div>
        </div>
        <img className="size-[500px]" src={HeroImg} alt="desk image" />
      </div>
    </section>
  )
}
