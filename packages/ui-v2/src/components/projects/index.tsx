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

type ProjectDetails = {
  name: string
  description: string
  technologies: string[]
}

const projects: ProjectDetails[] = [
  {
    name: 'Snowbuilder',
    description:
      'Typesafe query builder library for Snowflake, with smart return type inference',
    technologies: ['Typescript', 'NodeJS', 'Snowflake']
  },
  {
    name: 'CacheMem',
    description:
      'A concurrency safe, strongly typed in memory cache for Golang',
    technologies: ['Golang']
  },
  {
    name: 'Go-FP',
    description: 'Functional programming utilities for Golang',
    technologies: ['Golang']
  }
]

const Project: FC<ProjectDetails> = ({ name, description, technologies }) => {
  return (
    <Card className="size-[400px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

export const Projects: FC = () => {
  return (
    <div className="flex">
      {projects.map((proj) => (
        <Project key={proj.name} {...proj} />
      ))}
    </div>
  )
}
