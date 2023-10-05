import React from 'react'
import { ReactComponent as LinkedIn } from '../../assets/svgs/linkedin.svg'
import { ReactComponent as Github } from '../../assets/svgs/github.svg'
import { ReactComponent as Chevron } from '../../assets/svgs/chevron.svg'

const Instagram: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    id="meteor-icon-kit__solid-instagram"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        className="fill-white group-hover:fill-slate-800"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
      />
    </g>
  </svg>
)

const TopLink: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a
      className="h-14 w-14 block mx-auto group bg-pink-600 hover:bg-pink-400 -translate-y-1/2"
      onClick={scrollToTop}
    >
      <Chevron className="block h-6 w-6 m-auto translate-y-1/2 group-hover:fill-slate-800" />
    </a>
  )
}

type SocialLink = {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  destination: string
}

const socialLinks: SocialLink[] = [
  { Svg: LinkedIn, destination: 'https://www.linkedin.com/in/james-dumbell/' },
  { Svg: Github, destination: 'https://www.linkedin.com/in/james-dumbell/' },
  { Svg: Instagram, destination: 'https://www.instagram.com/james_dumbell/' }
]

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-center">
      <TopLink />
      <div className="py-5">
        <div className="pb-6 flex justify-center">
          {socialLinks.map(({ Svg, destination }) => (
            <a
              key={destination}
              className="rounded-full h-14 w-14 block border-white border-2 mx-2 group hover:bg-white"
              href={destination}
              target="_blank"
              rel="noreferrer"
            >
              <Svg className="block h-6 w-6 m-auto translate-y-1/2 group-hover:fill-slate-800" />
            </a>
          ))}
        </div>
        <p className="text-sm text-white">
          Handcrafted by yours truly using Typescript, React and Tailwind CSS.
        </p>
        <p className="text-sm text-white">Deployed on AWS.</p>
      </div>
    </footer>
  )
}
