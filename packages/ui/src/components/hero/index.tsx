import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Hyperlink } from '@/components/hyperlink'
import { Icon } from '@iconify/react'

export const Hero: FC = () => {
  return (
    <section className="flex min-h-screen items-center">
      <div className="space-y-4">
        <p className="text-4xl text-emerald-400 md:text-4xl">
          Hi, my name is -
        </p>
        <h1 className="scroll-m-20 text-9xl font-bold tracking-tight text-white md:text-6xl lg:text-9xl">
          James Dumbell.
        </h1>
        <p className="scroll-m-20 pb-8 text-3xl font-semibold text-gray-500 dark:text-slate-100 md:text-4xl lg:text-5xl">
          {`I'm a software engineer.`}
        </p>
        <p className="scroll-m-20 text-lg text-gray-500 md:text-4xl lg:text-2xl">
          {`💼 Currently working for `}
          <Hyperlink href="https://www.grafana.com" title="Grafana Labs" />
          {'.'}
        </p>
        <p className="scroll-m-20 text-lg text-gray-500 md:text-4xl lg:text-2xl">
          {'🏠 Based in London, UK.'}
        </p>
        <div className={'pt-6'}>
          <a
            href={'https://www.github.com/j-dumbell'}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" size="lg" className={'mr-5'}>
              <Icon
                icon="mingcute:github-line"
                className="mr-2 size-7 text-white"
              />
              {'GitHub'}
            </Button>
          </a>
          <a
            href={'https://www.linkedin.com/in/james-dumbell'}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" size="lg">
              <Icon icon="mdi:linkedin" className="mr-2 size-7 text-white" />
              {'LinkedIn'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
