import React from 'react'
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { GithubIcon } from '@/components/icons'

export const Footer: React.FC = () => {
  return (
    <section className="w-full bg-zinc-900 py-6 dark:bg-zinc-100">
      <div className="container flex flex-col items-center px-4 text-center md:px-6">
        <div className="flex justify-center space-x-4">
          <GithubIcon
            href="https://github.com/j-dumbell"
            className="size-6 text-white"
          />
          <a
            aria-label="LinkedIn profile"
            className="text-white"
            href="https://uk.linkedin.com/in/james-dumbell"
          >
            <LinkedInLogoIcon className="size-6" />
          </a>
          <a
            aria-label="Instagram profile"
            className="text-white"
            href="https://www.instagram.com/james_dumbell/"
          >
            <InstagramLogoIcon className="size-6" />
          </a>
        </div>
      </div>
      <p className="text-center text-sm leading-7 text-white [&:not(:first-child)]:mt-2">
        Created by yours truly using React, Typescript and TailwindCSS
      </p>
    </section>
  )
}
