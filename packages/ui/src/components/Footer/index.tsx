import React from 'react'
import { ReactComponent as JD } from '../../assets/svgs/jd.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-800 text-center">
      <div className="py-5">
        <div className="pb-6">
          <JD className="mx-auto h-16 w-16 text-white" />
        </div>
        <p className="text-sm">
          Handcrafted by yours truly using Typescript, React and Tailwind CSS.
        </p>
        <p className="text-sm">Deployed on AWS.</p>
      </div>
    </footer>
  )
}
