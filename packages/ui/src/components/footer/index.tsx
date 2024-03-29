import { FC } from 'react'
import { Icon } from '@iconify/react'

export const Footer: FC = () => {
  return (
    <section className="w-full bg-zinc-900 py-10 dark:bg-zinc-100">
      <div className="container flex flex-col items-center px-4 text-center md:px-6">
        <div className="flex justify-center space-x-4">
          <a
            aria-label="Github profile"
            href="https://github.com/j-dumbell"
            className="text-white hover:text-yellow-400"
          >
            <Icon
              icon="mingcute:github-line"
              className="size-7 text-white hover:text-indigo-600"
            />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="text-white hover:text-yellow-400"
            href="https://uk.linkedin.com/in/james-dumbell"
          >
            <Icon
              icon="mdi:linkedin"
              className="size-7 text-white hover:text-indigo-600"
            />
          </a>
          <a
            aria-label="Instagram profile"
            className="text-white hover:text-yellow-400"
            href="https://www.instagram.com/james_dumbell/"
          >
            <Icon
              icon="mdi:instagram"
              className="size-7 text-white hover:text-indigo-600"
            />
          </a>
        </div>
      </div>
      <p className="text-center text-sm leading-7 text-white [&:not(:first-child)]:mt-2">
        Created by yours truly using React, Typescript and TailwindCSS.
      </p>
    </section>
  )
}
