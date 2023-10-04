import Navbar from './Navbar'
import React from 'react'
import { Experience } from './Experience'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Landing } from './Landing'

const App: React.FC = () => (
  // <p>wip</p>
  <div className="text-black">
    <Navbar />
    <main>
      <Landing />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  </div>
)

export default App
