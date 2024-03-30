import { FC, MutableRefObject } from 'react'
import { Button } from '@/components/ui/button'
import { CaretDownIcon } from '@radix-ui/react-icons'
import HeroImg from '../../assets/hero.png'

type HeroProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>
}

export const Hero: FC<HeroProps> = (props) => {
  return (
    <section className="flex h-screen">
      <div className="container m-auto flex flex-wrap items-center justify-around md:px-6">
        <div className="flex flex-col items-center space-y-4 text-left">
          <div className="space-y-2">
            <p className="mx-auto max-w-[700px] text-xl text-gray-700 dark:text-gray-400">
              Hi, my name is
            </p>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-indigo-600 lg:text-7xl">
              James Dumbell.
            </h1>
            <p className="scroll-m-20 pb-6 text-2xl font-bold tracking-tight lg:text-5xl">
              I'm a software engineer.
            </p>
            <Button
              className="text-lg font-light hover:bg-indigo-600"
              size="lg"
              onClick={() =>
                props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's go!
              <CaretDownIcon className="ml-2 size-4" />
            </Button>
          </div>
        </div>
        <img className="size-[450px]" src={HeroImg} alt="desk image" />
      </div>
    </section>
  )
}
