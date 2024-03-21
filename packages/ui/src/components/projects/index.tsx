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
import { Heading } from '@/components/section'
import PlaceholderImg from '@/assets/placeholder1.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type CardProject = {
  name: string
  description: string
  technologies: string[]
  github: string
  npm?: string
}

type CarouselProject = CardProject & {
  image: string
}

const carouselProjects: CarouselProject[] = [
  {
    name: 'Climate monitor',
    description:
      'Monitor temperature and humidity metrics via Raspberry Pi sensors, exposed via Prometheus and monitored in a Grafana dashboard.',
    technologies: ['Golang', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://www.github.com/j-dumbell/pi',
    image: PlaceholderImg
  },
  {
    name: 'name blah',
    description: 'some desc',
    technologies: ['Typescript', 'Golang'],
    github: 'www.blah.com',
    image: PlaceholderImg
  }
]

const ProjectCard: FC<CardProject> = ({
  name,
  description,
  technologies,
  github,
  npm
}) => {
  return (
    <Card className="m-1 flex h-72 w-80 flex-col justify-between p-5">
      <div>
        <div className="flex justify-end">
          {npm && <NPMIcon href={npm} className="mr-2 size-7 text-black" />}
          <GithubIcon href={github} className="size-7 text-black" />
        </div>
        <CardHeader className="mt-4">
          <CardTitle className="text-2xl">
            <a href={github}>{name}</a>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </div>
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

const contentClassName = (index: number): string => {
  const baseClasses = 'flex p-1 justify-center items-center'
  return index % 2 ? `${baseClasses} flex-row-reverse` : baseClasses
}

const HeadlineProjects: FC = () => {
  return (
    <Carousel className="mx-auto mb-10 w-full max-w-5xl">
      <CarouselContent>
        {carouselProjects.map((proj, index) => (
          <CarouselItem key={proj.name}>
            <div className={contentClassName(index)}>
              <img
                className="size-[500px]"
                src={PlaceholderImg}
                alt="desk image"
              />
              <div className="mx-6 flex w-96 flex-col justify-between">
                <h5 className="mb-6 text-2xl font-semibold leading-none tracking-tight">
                  <a href={proj.github}>{proj.name}</a>
                </h5>
                <p className="mb-6">{proj.description}</p>
                <div className="flex flex-wrap">
                  {proj.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="mb-1 mr-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const cardProjects: CardProject[] = [
  {
    name: 'Snow-Builder',
    description:
      'Type-safe query builder library for Snowflake with smart return type inference, written in Typescript.',
    technologies: ['Typescript', 'NodeJS', 'Snowflake'],
    github: 'https://github.com/j-dumbell/snow-builder',
    npm: 'https://www.npmjs.com/package/snow-builder'
  },
  {
    name: 'CacheMem',
    description:
      'A concurrency safe, strongly typed, in-memory cache for Golang.',
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
    description: 'This site!  My personal portfolio website.',
    technologies: ['Typescript', 'React', 'TailwindCSS', 'AWS', 'CDK'],
    github: 'https://github.com/j-dumbell/me'
  },
  {
    name: 'Splendid',
    description: 'A bootleg online version of the board game Splendor.',
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

export const Projects: FC = () => {
  return (
    <div className="pb-40">
      <Heading text="Projects" />
      <HeadlineProjects />
      <div className="mx-10 flex flex-wrap justify-center">
        {cardProjects.map((proj) => (
          <ProjectCard key={proj.name} {...proj} />
        ))}
      </div>
    </div>
  )
}
