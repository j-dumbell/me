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
import { Heading } from '@/components/section'
import PlaceholderImg from '@/assets/placeholder1.png'
import SplendidImg from '@/assets/splendid.jpeg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

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
    name: 'Splendid',
    description:
      'An online version of the board game Splendor build with websockets in Golang with a React UI.  Deployed on AWS with Terraform.',
    technologies: [
      'Golang',
      'Websockets',
      'Typescript',
      'React',
      'Docker',
      'Terraform',
      'AWS'
    ],
    github: 'www.blah.com',
    image: SplendidImg
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
    <Card className="m-1 flex h-72 w-80 flex-col justify-between p-5 transition duration-300 hover:scale-105">
      <div>
        <div className="flex justify-end">
          {npm && (
            <Icon
              icon="iconoir:npm"
              className="mr-2 size-8 hover:text-indigo-600"
            />
          )}
          <Icon
            icon="mingcute:github-line"
            className="size-7 hover:text-indigo-600"
          />
        </div>
        <CardHeader className="mt-4">
          <CardTitle className="text-2xl">
            <a className="hover:text-indigo-600" href={github}>
              {name}
            </a>
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

const HeadlineProjects: FC = () => {
  return (
    <Carousel className="mx-auto mb-10 w-full max-w-5xl">
      <CarouselContent>
        {carouselProjects.map((proj, index) => (
          <CarouselItem key={proj.name}>
            {/*<div className={contentClassName(index)}>*/}
            <div
              className={cn(
                'flex p-1 justify-center items-center',
                !(index % 2 === 0) && 'flex-row-reverse'
              )}
            >
              <img
                className="size-[400px] rounded-lg border-2"
                src={proj.image}
                alt="desk image"
              />
              <div
                className={cn(
                  'mx-6 flex w-96 flex-col',
                  index % 2 === 0 && 'items-end'
                )}
              >
                <h5
                  className={cn(
                    'mb-6 text-2xl font-semibold leading-none tracking-tight hover:text-indigo-600',
                    index % 2 === 0 && 'text-right'
                  )}
                >
                  <a href={proj.github}>{proj.name}</a>
                </h5>
                <p className={cn('mb-6', index % 2 === 0 && 'text-right')}>
                  {proj.description}
                </p>
                <div
                  className={cn(
                    'flex flex-wrap mb-4',
                    index % 2 === 0 && 'justify-end'
                  )}
                >
                  {proj.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="mb-1 mr-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex">
                  <Icon
                    icon="mingcute:github-line"
                    className="mr-2 size-7 hover:text-indigo-600"
                  />
                  <Icon
                    icon="lucide:external-link"
                    className="size-7 hover:text-indigo-600"
                  />
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
  }
]

export const Projects: FC = () => {
  return (
    <div className="bg-slate-100 py-20">
      <Heading text="Projects" />
      <HeadlineProjects />
      <div className="mt-20 flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cardProjects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
      </div>
    </div>
  )
}
