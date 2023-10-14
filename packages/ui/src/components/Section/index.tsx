import React, { PropsWithChildren } from 'react'

type Colour = 'slate-700' | 'slate-200' | 'white' | 'black'

export type SectionProps = {
  id?: string
  title?: string
  titleColour?: Colour
  backgroundColour?: Colour
  verticallyCenter: boolean
}

// bg-white bg-slate-700 bg-slate-200 bg-black text-white text-slate-700 text-slate-200 text-black

export const Section: React.FC<PropsWithChildren<SectionProps>> = (
  props: PropsWithChildren<SectionProps>
) => {
  return (
    <section
      id={props.id}
      className={`relative mx-auto h-screen bg-${props.backgroundColour}`}
    >
      {props.title && (
        <>
          <h2
            className={`pb-3 pt-8 text-center text-3xl font-semibold text-${props.titleColour}`}
          >
            {props.title}
          </h2>
          <div
            className={`mx-auto my-2 h-1 w-20 ${
              props.titleColour ? `bg-${props.titleColour}` : 'bg-black'
            }`}
          ></div>
        </>
      )}

      {props.verticallyCenter ? (
        <div className="absolute top-1/2 w-full -translate-y-1/2">
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </section>
  )
}
