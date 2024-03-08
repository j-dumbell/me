import React from 'react'
import { Landing } from 'src/components/hero'
import { About } from 'src/components/about'
import { Footer } from '@/components/footer'
import { ContactDrawer } from '@/components/contact'
import { Projects } from '@/components/projects'

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <ContactDrawer />
      <Footer />
    </>
  )
}

export default App
