import { Hero } from 'src/components/hero'
import { About } from 'src/components/about'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { FC } from 'react'
import { Experience } from '@/components/experience'

const App: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
