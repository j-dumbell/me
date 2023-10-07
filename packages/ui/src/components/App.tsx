import Navbar from './Navbar'
import React from 'react'
import { Experience } from './Experience'
import { About } from './About'
import { Contact } from './Contact'
import { Landing } from './Landing'

const App: React.FC = () => (
  <div className="text-black">
    {/*<Navbar />*/}
    <main>
      <Landing />
      <About />
      <Experience />
      <Contact />
    </main>
  </div>
)

export default App
