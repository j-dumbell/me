import React, { FC, MutableRefObject } from 'react'
import { Heading } from '@/components/section'
import MeImg from '../../assets/me.jpeg'
import { Hyperlink } from '@/components/hyperlink'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type AboutProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>
}

export const About: FC<AboutProps> = (props) => {
  return (
    <div className="bg-slate-100 pb-40 pt-20" ref={props.aboutRef}>
      <Heading text="About" />
      <div className="container flex max-w-4xl flex-wrap items-center justify-center">
        <div className="mb-6 mr-8 max-w-lg sm:mr-0">
          <p className="pb-6 text-lg text-gray-500 dark:text-gray-400">
            Nice to meet you! I'm a London-based mathematics graduate turned
            engineer with over 5 years experience across software engineering,
            devOps and data engineering.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400">
            Fast forward to today, and I've had the privilege of working on some
            interesting projects at some great companies. I'm currently building
            things for{' '}
            <Hyperlink href="https://www.grafana.com" title="Grafana Labs" />,
            helping companies monitor their mission critical applications.
          </p>
        </div>
        <img
          // className="size-72 rounded-lg border-b-8 border-r-8 border-[#011173]"
          className="size-72 rounded-lg border-4 border-[#000B60] [box-shadow:10px_10px_0px_#AAD0F6]"
          src={MeImg}
          alt="James Dumbell"
        />
      </div>
    </div>
  )
}
