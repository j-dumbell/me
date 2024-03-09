import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { FC } from 'react'
import { Badge } from '@/components/ui/badge'
import { GithubIcon, NPMIcon } from '@/components/icons'
import { Description, Heading } from '@/components/section'

type ProjectDetails = {
  name: string
  description: string
  technologies: string[]
  github: string
  npm?: string
}

const projects: ProjectDetails[] = [
  {
    name: 'Snowbuilder',
    description:
      'Typesafe query builder library for Snowflake, with smart return type inference',
    technologies: ['Typescript', 'NodeJS', 'Snowflake'],
    github: 'https://github.com/j-dumbell/snow-builder',
    npm: 'https://www.npmjs.com/package/snow-builder'
  },
  {
    name: 'CacheMem',
    description:
      'A concurrency safe, strongly typed in memory cache for Golang',
    technologies: ['Golang'],
    github: 'https://github.com/j-dumbell/cachemem'
  },
  {
    name: 'Go-FP',
    description: 'Functional programming utilities for Golang',
    technologies: ['Golang'],
    github: 'https://github.com/j-dumbell/go-fp'
  },
  {
    name: 'Me',
    description: 'Personal portfolio website.  This one!',
    technologies: ['Typescript', 'React', 'TailwindCSS', 'AWS', 'CDK'],
    github: 'https://github.com/j-dumbell/me'
  },
  {
    name: 'Splendid',
    description: 'A bootleg online version of the boardgame Splendid.',
    technologies: [
      'Golang',
      'Typescript',
      'Websockets',
      'React',
      'AWS',
      'Docker'
    ],
    github: 'https://github.com/j-dumbell/splendid'
  }
]

const Project: FC<ProjectDetails> = ({
  name,
  description,
  technologies,
  github,
  npm
}) => {
  return (
    <Card className="m-1 w-80">
      <div className="flex">
        {github && <GithubIcon href={github} className="size-6 text-black" />}
        {npm && <NPMIcon href={npm} className="size-6 text-black" />}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">
          <a href={github}>{name}</a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="mb-1 mr-1">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

export const Projects: FC = () => {
  return (
    <div className="pb-40">
      <Heading text="Projects" />
      <div className="mx-10 flex flex-wrap justify-center">
        {projects.map((proj) => (
          <Project key={proj.name} {...proj} />
        ))}
      </div>
    </div>
  )
}
