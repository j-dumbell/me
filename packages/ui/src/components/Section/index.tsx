import React, { PropsWithChildren } from 'react'

export type SectionProps = {
  id?: string
  title?: string
  backgroundColour?: string
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = (
  props: PropsWithChildren<SectionProps>
) => (
  <section
    id={props.id}
    className={`relative mx-auto h-screen ${props.backgroundColour}`}
  >
    <div className="absolute top-1/2 -translate-y-1/2 px-20">
      {props.title && (
        <>
          <h2 className={`my-3 text-3xl font-semibold text-black text-center`}>
            {props.title}
          </h2>
          <div className="my-2 bg-black w-20 h-1 mx-auto"></div>
        </>
      )}

      {props.children}
    </div>
  </section>
)
