import React from 'react'
import SnowBuilder from '../../assets/images/snow-builder.png'
import { Section } from '../Section'

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
    title: 'snow-builder',
    description:
      'Type-safe query builder library for Snowflake with smart return type inference.',
    imgSrc: SnowBuilder,
    destination: 'https://github.com/j-dumbell/snow-builder',
    github: 'https://github.com/j-dumbell/snow-builder',
    npm: 'https://www.npmjs.com/package/snow-builder',
    technologies: ['Typescript', 'Snowflake', 'Github Actions']
  }
]

type TagProps = {
  name: string
}

const Tag: React.FC<TagProps> = ({ name }: TagProps) => (
  <div className="rounded-2xl bg-cyan-500 inline-block px-3 py-1 mx-0.5">
    {name}
  </div>
)

type ProjectContainerProps = {
  project: Project
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  project
}: ProjectContainerProps) => {
  return (
    <div
      key={project.title}
      className="group w-96 max-w-96 h-96 max-h-96 border-black border-2 relative"
    >
      <div className="opacity-0 group-hover:opacity-100 z-10 relative bg-white w-full h-full transition-opacity duration-500">
        <h4 className="font-bold text-center">{project.title}</h4>
        <p className="text-center">{project.description}</p>

        {project.technologies.map((tech) => (
          <Tag key={tech} name={tech} />
        ))}
      </div>

      <div className="w-full h-full absolute top-0 bg-[url('/src/assets/images/snow-builder.png')] z-0" />
    </div>
  )
}

export const Projects: React.FC = () => {
  return (
    <Section verticallyCenter={true} title="Projects" backgroundColour="white">
      <div className="mx-20 flex">
        {projects.map((proj) => (
          <ProjectContainer key={proj.title} project={proj} />
        ))}
      </div>
    </Section>
  )
}
