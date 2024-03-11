import { FC, MutableRefObject } from 'react'
import { Button } from '@/components/ui/button'
import { CaretDownIcon } from '@radix-ui/react-icons'
import HeroImg from '../../assets/hero.png'
import { Hyperlink } from '@/components/hyperlink'

type HeroProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>
}

export const Hero: FC<HeroProps> = (props) => {
  return (
    <section className="flex h-screen">
      <div className="container m-auto flex flex-wrap items-center justify-around md:px-6">
        <div className="flex flex-col items-center space-y-4 text-left">
          <div className="space-y-2">
            <p className="text3xl mx-auto max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl">
              Hi, I'm
            </p>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl">
              James Dumbell.
            </h1>
            <p className="mx-auto max-w-[500px] pb-8 text-xl text-gray-500 dark:text-gray-400 md:text-xl">
              I'm a software engineer based in London where I'm currently
              building things for{' '}
              <Hyperlink href="https://www.grafana.com" title="Grafana Labs" />,
              helping companies monitor their mission critical applications.
            </p>
            <Button
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
        <img className="size-[500px]" src={HeroImg} alt="desk image" />
      </div>
    </section>
  )
}
