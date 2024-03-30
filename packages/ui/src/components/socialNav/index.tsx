import { FC, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

type SocialLinkProps = {
  label: string
  href: string
  icon: string
}

const SocialLink: FC<SocialLinkProps> = (props) => (
  <a aria-label={props.label} href={props.href}>
    <Icon
      icon={props.icon}
      className="size-6 text-zinc-900 transition duration-300 hover:-translate-y-1 hover:text-indigo-600"
    />
  </a>
)

export const SocialNav: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const heroHeight = window.innerHeight * 0.7
    if (window.scrollY > heroHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed left-6 top-0 bottom-20 flex h-screen flex-col justify-end items-center space-y-5 pt-4 px-4 invisible md:visible transition-opacity duration-500',
        isVisible ? 'opacity-500' : 'opacity-0'
      )}
    >
      <SocialLink
        label="Github profile"
        href="https://github.com/j-dumbell"
        icon="mingcute:github-line"
      />
      <SocialLink
        label="LinkedIn profile"
        href="https://uk.linkedin.com/in/james-dumbell"
        icon="mdi:linkedin"
      />
      <SocialLink
        label="Instagram profile"
        href="https://www.instagram.com/james_dumbell/"
        icon="mdi:instagram"
      />
      <SocialLink label="CV" href="CV.pdf" icon="tabler:file-cv" />
      <div className="h-44 w-0.5 animate-fadeInBottom bg-zinc-900"></div>
    </div>
  )
}
