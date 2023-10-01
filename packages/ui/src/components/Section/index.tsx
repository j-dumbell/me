import React, { PropsWithChildren } from 'react'

// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const prefixClasses = {
  1: "before:content-['01.']",
  2: "before:content-['02.']",
  3: "before:content-['03.']",
  4: "before:content-['04.']",
  5: "before:content-['05.']"
} as const

export type SectionProps = {
  num: keyof typeof prefixClasses
  title: string
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = (
  props: PropsWithChildren<SectionProps>
) => (
  <section className="mx-auto my-20 max-w-screen-lg">
    <h2
      className={`before:bottom-1 before:mr-3 before:text-lg before:text-cyan-500 ${
        prefixClasses[props.num]
      } my-7 text-2xl font-semibold text-slate-200 flex after:ml-5 after:h-px after:w-60 after:bg-slate-500 after:content-[""] after:block after:relative`}
    >
      {props.title}
    </h2>
    {props.children}
  </section>
)
