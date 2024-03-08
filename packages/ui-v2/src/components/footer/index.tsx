import React from 'react'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'

export const Footer: React.FC = () => {
  return (
    <section className="w-full bg-zinc-900 py-10 dark:bg-zinc-100">
      <div className="container flex flex-col items-center px-4 text-center md:px-6">
        <div className="flex justify-center space-x-4">
          <a
            aria-label="Github profile"
            className="text-white"
            href="https://github.com/j-dumbell"
          >
            <GitHubLogoIcon className="size-6" />
          </a>
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
    </section>
  )
}
