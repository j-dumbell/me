import { Hero } from 'src/components/hero'
import { About } from 'src/components/about'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { FC, useRef } from 'react'
import { Experience } from '@/components/experience'

const App: FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Hero aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
