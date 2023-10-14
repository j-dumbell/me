import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import { ReactComponent as JD } from '../../assets/svgs/jd.svg'

type NavElementProps = {
  title: string
}

const NavElement: React.FC<NavElementProps> = (props: NavElementProps) => (
  <li>
    <a
      href="#"
      className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-cyan-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-cyan-500 font-light"
    >
      {props.title}
    </a>
  </li>
)

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > document.getElementById('about')!.offsetTop) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, visible])

  return (
    <nav
      className={`top-0 right-0 w-full border-gray-200 sticky shadow-lg backdrop-blur-[4px] ease-in-out duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-1">
        <JD className="h-9 w-9 text-white hover:text-cyan-500" />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 bg-inherit">
            <NavElement title="About" />
            <NavElement title="Experience" />
            <NavElement title="Projects" />
            <NavElement title="Contact" />
            <li>
              <Button title="Resume" onClick={() => undefined} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
