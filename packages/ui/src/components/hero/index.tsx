import { FC, MutableRefObject } from 'react'
import { Button } from '@/components/ui/button'
import { CaretDownIcon } from '@radix-ui/react-icons'
const HeroImg = '/hero.png'

type HeroProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>
}

export const Hero: FC<HeroProps> = (props) => {
  return (
    <section className="flex min-h-screen">
      <div className="container m-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left max-w-2xl">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
              Hi, my name is
            </p>
            <h1 className="scroll-m-20 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-indigo-600">
              James Dumbell.
            </h1>
            <p className="scroll-m-20 pb-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {`I'm a software engineer.`}
            </p>
            <Button
              variant="jd"
              size="lg"
              className="text-lg px-8 py-3"
              onClick={() =>
                props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {`Let's go!`}
              <CaretDownIcon className="ml-2 size-5" />
            </Button>
          </div>
        </div>
        <img
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]"
          src={HeroImg}
          alt="desk image"
        />
      </div>
    </section>
  )
}
