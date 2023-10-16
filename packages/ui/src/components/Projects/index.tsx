import React from 'react'
import SnowBuilder from '../../assets/images/snow-builder.png'
import Splendid from '../../assets/images/splendid.jpeg'
import Website from '../../assets/images/website.png'
import { Section } from '../Section'

const Folder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_iconCarrier">
      <path
        className="stroke-cyan-500"
        d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
        stroke="#000000"
        strokeWidth="0.8160000000000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)

const NPM: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={`${props.className} group/npm`}
  >
    <g>
      <rect
        className="stroke-current group-hover/npm:stroke-cyan-500"
        x="21.6"
        y="19.9"
        width="2.4"
        height="4.84"
        fill="none"
      />
      <path
        className="fill-current group-hover/npm:fill-cyan-500"
        d="M2,15V29.7H14.2v2.5H24V29.7H46V15ZM14.2,27.2H11.8V19.9H9.3v7.3H4.5V17.5h9.7Zm12.3,0H21.6v2.5H16.7V17.5h9.8Zm17.1,0H41.2V19.9H38.7v7.3H36.2V19.9H33.8v7.3H28.9V17.5H43.6Z"
      />
    </g>
  </svg>
)

const Github: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    className={`${props.className} group/github`}
    viewBox="0 0 24 24"
    fill="none"
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
        className="stroke-current group-hover/github:stroke-cyan-500"
        d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-current group-hover/github:stroke-cyan-500"
        d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)

type Project = {
  imgSrc: string
  title: string
  description: string
  destination: string
  github: string
  npm?: string
  dockerHub?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Snow Builder',
    description:
      'Type-safe query builder library for Snowflake with smart return type inference.',
    imgSrc: SnowBuilder,
    destination: 'https://github.com/j-dumbell/snow-builder',
    github: 'https://github.com/j-dumbell/snow-builder',
    npm: 'https://www.npmjs.com/package/snow-builder',
    technologies: ['Typescript', 'Snowflake']
  },
  {
    title: 'Splendid',
    description: 'A browser-based board game inspired by Splendor.',
    imgSrc: Splendid,
    destination: 'https://github.com/j-dumbell/splendid',
    github: 'https://github.com/j-dumbell/splendid',
    technologies: [
      'Golang',
      'Typescript',
      'React',
      'Terraform',
      'Websockets',
      'AWS',
      'Docker'
    ]
  },
  {
    title: 'dumbell.dev',
    description: 'This website!  Portfolio website for James Dumbell.',
    imgSrc: Website,
    destination: 'https://github.com/j-dumbell/me',
    github: 'https://github.com/j-dumbell/me',
    technologies: ['Typescript', 'React', 'Tailwind CSS', 'AWS', 'CDK']
  }
]

type TagProps = {
  name: string
}

const Tag: React.FC<TagProps> = ({ name }: TagProps) => (
  <li className="mx-0.5 inline-block rounded-2xl bg-cyan-500 px-3 py-1 my-1">
    {name}
  </li>
)

type ProjectContainerProps = {
  project: Project
}

// bg-[url('/src/assets/images/splendid.jpeg')]
// bg-[url('/src/assets/images/snow-builder.png')]
// bg-[url('/src/assets/images/website.png')]
const ProjectContainer: React.FC<ProjectContainerProps> = ({
  project
}: ProjectContainerProps) => {
  return (
    <a href={project.destination} target="_blank" rel="noreferrer">
      <div
        key={project.title}
        className="max-w-96 group relative h-96 max-h-96 w-96"
      >
        <div className="relative z-10 h-full w-full bg-slate-600 text-slate-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-4 py-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <Folder className="h-20 w-20 stroke-cyan-400" />
            <div>
              <a
                className="inline-block"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-10 w-10" />
              </a>
              {project.npm && (
                <a
                  className="inline-block"
                  href={project.npm}
                  target="_blank"
                  rel="noreferrer"
                >
                  <NPM className="h-10 w-10" />
                </a>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-2xl text-white pb-4">
              {project.title}
            </h4>
            <p>{project.description}</p>
          </div>

          <ul>
            {project.technologies.map((tech) => (
              <Tag key={tech} name={tech} />
            ))}
          </ul>
        </div>

        <div
          className={`absolute top-0 z-0 h-full w-full bg-cover bg-[url('${project.imgSrc}')]`}
        />
      </div>
    </a>
  )
}

export const Projects: React.FC = () => {
  return (
    <Section
      verticallyCenter={true}
      title="Projects"
      backgroundColour="slate-300"
      titleColour="slate-700"
    >
      <div className="mx-20 flex justify-center">
        {projects.map((proj) => (
          <ProjectContainer key={proj.title} project={proj} />
        ))}
      </div>
    </Section>
  )
}
