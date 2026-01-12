import { Hero } from 'src/components/hero'
import { Skills } from 'src/components/skills'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { FC, useRef } from 'react'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'

const App: FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className={'mx-auto max-w-screen-xl px-4'}>
      <Hero />
      {/*<SocialNav footerRef={footerRef} />*/}
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/*<Contact />*/}
      <div ref={footerRef}></div>
      <Footer />
    </main>
  )
}

export default App
