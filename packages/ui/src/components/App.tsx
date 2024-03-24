import { Hero } from 'src/components/hero'
import { Skills } from 'src/components/skills'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { FC, useRef } from 'react'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'

const App: FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Hero aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
