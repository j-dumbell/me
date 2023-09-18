import React from 'react'
import Logo from '../Logo'
import { Button } from '../Button'

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
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Logo />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
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
