import React from 'react'
import { Experience } from './Experience'
import { About } from './About'
import { Contact } from './Contact'
import { Landing } from './Landing'
import { Projects } from './Projects'

const App: React.FC = () => (
  <div className="text-black">
    {/*<Navbar />*/}
    <main>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </div>
)

export default App
