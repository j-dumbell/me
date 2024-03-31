import { Hero } from 'src/components/hero'
import { Skills } from 'src/components/skills'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { FC, useRef } from 'react'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'
import { SocialNav } from '@/components/socialNav'

const App: FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Hero aboutRef={aboutRef} />
      <SocialNav footerRef={footerRef} />
      <div ref={aboutRef}></div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div ref={footerRef}></div>
      <Footer />
    </>
  )
}

export default App
