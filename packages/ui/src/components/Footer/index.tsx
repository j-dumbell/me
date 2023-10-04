import React from 'react'
import { ReactComponent as LinkedIn } from '../../assets/svgs/linkedin.svg'
import { ReactComponent as Github } from '../../assets/svgs/github.svg'

type SocialLink = {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  destination: string
}

const socialLinks: SocialLink[] = [
  { Svg: LinkedIn, destination: 'https://www.linkedin.com/in/james-dumbell/' },
  { Svg: Github, destination: 'https://www.linkedin.com/in/james-dumbell/' }
]

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-800 text-center">
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
              <Svg className="block h-6 w-6 m-auto translate-y-1/2 group-hover:fill-pink-800" />
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
