import { FC } from 'react'
import { Icon } from '@iconify/react'

export const Footer: FC = () => {
  return (
    <section className="w-full bg-zinc-900 pb-12">
      <div className="container flex flex-col items-center px-4 text-center md:px-6">
        <button
          className={
            'size-10 -translate-y-2/4 rounded bg-indigo-600 hover:bg-[#6962e5]'
          }
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          <Icon
            icon="heroicons-solid:chevron-double-up"
            className={'m-auto block size-8 text-center text-white'}
          />
        </button>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            aria-label="Github profile"
            href="https://github.com/j-dumbell"
            className="text-white hover:text-yellow-400"
          >
            <Icon
              icon="mingcute:github-line"
              className="size-8 text-white hover:text-indigo-600"
            />
          </a>
          <a
            aria-label="LinkedIn profile"
            className="text-white hover:text-yellow-400"
            href="https://uk.linkedin.com/in/james-dumbell"
          >
            <Icon
              icon="mdi:linkedin"
              className="size-8 text-white hover:text-indigo-600"
            />
          </a>
          <a
            aria-label="Instagram profile"
            className="text-white hover:text-yellow-400"
            href="https://www.instagram.com/james_dumbell/"
          >
            <Icon
              icon="mdi:instagram"
              className="size-8 text-white hover:text-indigo-600"
            />
          </a>
          <a
            aria-label="CV"
            className="text-white hover:text-indigo-600"
            href="CV.pdf"
          >
            <Icon
              icon="tabler:file-cv"
              className="size-8 text-white hover:text-indigo-600"
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
