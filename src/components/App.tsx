import Navbar from './Navbar'
import React from 'react'
import { Hyperlink } from './Hyperlink'
import { Experience } from './Experience'
import { About } from './About'
import { Contact } from './Contact'

const App: React.FC = () => (
  <div className="dark:bg-slate-900 text-white pb-10">
    <Navbar />

    <main>
      <section className="max-w-screen-lg  mx-auto">
        <h3 className="text-cyan-500 my-3">Hi, I'm</h3>
        <h1 className="text-slate-100 text-6xl font-bold tracking-wider my-3">
          James Dumbell.
        </h1>
        <h2 className="text-slate-300 text-5xl font-semibold my-3">
          I build things with code.
        </h2>
        <p className="text-slate-500 my-6 max-w-xl">
          I'm a senior software engineer with experience across full stack web
          development, data engineering and devOps. I'm based in London
          currently, building microservices in Golang for &nbsp;
          <Hyperlink href="https://grafana.com/" title="Grafana" />.
        </p>
      </section>

      <About />
      <Experience />
      <Contact />
    </main>
  </div>
)

export default App
