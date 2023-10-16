import React from 'react'
import { Section } from '../Section'
import { Canvas } from './canvas'

const ChevronDown: React.FC = () => (
  <svg
    className="ml-3 h-4 w-4 translate-y-1/3"
    viewBox="0 -4.5 24 24"
    fill="#000000"
  >
    <g
      className="fill-cyan-500 transition-colors duration-300 ease-in-out group-hover:fill-white"
      transform="translate(-574.000000, -1201.000000)"
    >
      <path d="M597.405,1201.63 C596.576,1200.8 595.23,1200.8 594.401,1201.63 L586.016,1210.88 L577.63,1201.63 C576.801,1200.8 575.455,1200.8 574.626,1201.63 C573.797,1202.46 573.797,1203.81 574.626,1204.64 L584.381,1215.4 C584.83,1215.85 585.429,1216.05 586.016,1216.01 C586.603,1216.05 587.201,1215.85 587.65,1215.4 L597.405,1204.64 C598.234,1203.81 598.234,1202.46 597.405,1201.63"></path>
    </g>
  </svg>
)

const scrollToId = (targetId: string): void => {
  const targetElement = document.getElementById(targetId)
  if (!targetElement) {
    console.error('element not found')
    return
  }
  const pixelsToScroll = window.scrollY - targetElement.offsetTop
  window.scrollTo({ top: -pixelsToScroll, left: 0, behavior: 'smooth' })
}

export const Landing: React.FC = () => {
  return (
    <>
      <Canvas className="absolute" />
      <Section id="landing" verticallyCenter={true}>
        <h1 className="my-3 text-center text-6xl font-bold tracking-wider text-white duration-1000 animate-in fade-in slide-in-from-top">
          Hi, I'm&nbsp;
          <span className="text-pink-600">James Dumbell</span>.
        </h1>
        <h2 className="mb-6 text-center text-5xl font-semibold text-white animate-in fade-in slide-in-from-top duration-2s">
          I'm a software engineer.
        </h2>
        {/*<p className="text-slate-500 my-6 max-w-xl">*/}
        {/*  I'm a senior software engineer with experience across full stack web*/}
        {/*  development, data engineering and devOps. I'm based in London currently,*/}
        {/*  building microservices in Golang for &nbsp;*/}
        {/*  <Hyperlink href="https://grafana.com/" title="Grafana" />.*/}
        {/*</p>*/}

        <button
          className="group mx-auto flex rounded border border-cyan-500 px-8 py-2 text-cyan-500 transition-colors duration-300 ease-in-out hover:bg-cyan-500 hover:text-white animate-in fade-in slide-in-from-bottom duration-2s"
          onClick={() => scrollToId('about')}
        >
          Let's go!
          <ChevronDown />
        </button>
      </Section>
    </>
  )
}
