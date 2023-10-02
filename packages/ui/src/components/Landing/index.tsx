import { Hyperlink } from '../Hyperlink'
import React from 'react'
import { Section } from '../Section'

export const Landing: React.FC = () => (
  <Section>
    <h3 className="text-cyan-500 my-3">Hi, I'm</h3>
    <h1 className="text-slate-100 text-6xl font-bold tracking-wider my-3">
      James Dumbell.
    </h1>
    <h2 className="text-slate-300 text-5xl font-semibold my-3">
      I build things with code.
    </h2>
    <p className="text-slate-500 my-6 max-w-xl">
      I'm a senior software engineer with experience across full stack web
      development, data engineering and devOps. I'm based in London currently,
      building microservices in Golang for &nbsp;
      <Hyperlink href="https://grafana.com/" title="Grafana" />.
    </p>
  </Section>
)
