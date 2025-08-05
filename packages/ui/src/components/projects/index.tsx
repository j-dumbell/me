import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { FC } from 'react'
import { Heading, Paragraph } from 'src/components/typography'
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
import {
  AWSCard,
  AWSCDKCard,
  DockerCard,
  GolangCard,
  GoogleAnalyticsCard,
  NodeJSCard,
  ReactCard,
  SnowflakeCard,
  TailwindCSSCard,
  TechHoverCardProps,
  TerraformCard,
  TypescriptCard,
  WebsocketsCard
} from '@/components/hovercard'
import { Section } from '@/components/section'
import { AsciinemaPlayer } from '@/components/asciinemaPlayer'

type CardProject = {
  name: string
  description: string
  technologies: FC<TechHoverCardProps>[]
  github: string
  npm?: string
}

type ImageContent = {
  _type: 'image'
  image: string
}

type CastContent = {
  _type: 'cast'
  src: string
}

type CarouselProject = CardProject & {
  content: ImageContent | CastContent
}

const carouselProjects: CarouselProject[] = [
  {
    name: 'cmdgenie',
    description:
      'An AI-powered assistant that generates shell commands from the comfort of your command line',
    technologies: [GolangCard],
    github: 'https://github.com/j-dumbell/cmdgenie',
    content: {
      _type: 'cast',
      src: 'cmdgenie-demo.cast'
    }
  },
  {
    name: 'Splendid',
    description:
      'An online version of the board game Splendor build with websockets in Golang with a React UI.  Deployed on AWS with Terraform.',
    technologies: [
      GolangCard,
      WebsocketsCard,
      TypescriptCard,
      ReactCard,
      DockerCard,
      TerraformCard,
      AWSCard
    ],
    github: 'https://github.com/j-dumbell/splendid',
    content: {
      _type: 'image',
      image: SplendidImg
    }
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
            <a href={npm} target="_blank" rel="noopener noreferrer">
              <Icon
                icon="iconoir:npm"
                className="mr-2 size-8 hover:text-indigo-600"
              />
            </a>
          )}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Icon
              icon="mingcute:github-line"
              className="size-7 hover:text-indigo-600"
            />
          </a>
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
        {technologies.map((Tech, index) => (
          <Tech key={index} className="mb-1 mr-1" />
        ))}
      </CardFooter>
    </Card>
  )
}

const HeadlineProjects: FC = () => {
  return (
    <Carousel className="mx-auto mb-10 w-full max-w-5xl px-12 md:px-16">
      <CarouselContent>
        {carouselProjects.map((proj, index) => (
          <CarouselItem key={proj.name}>
            <div
              className={cn(
                'flex p-1 justify-center items-center flex-col md:flex-row',
                !(index % 2 === 0) && 'md:flex-row-reverse'
              )}
            >
              {proj.content._type === 'image' ? (
                <img
                  className="w-full max-w-[400px] h-auto rounded-lg border-2 mb-4 md:mb-0"
                  src={proj.content.image}
                  alt="desk image"
                />
              ) : (
                <div 
                  className="w-full max-w-[640px] h-[300px] md:h-[400px] flex items-center justify-center mb-4 md:mb-0"
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <AsciinemaPlayer className="w-full h-full" src={proj.content.src} />
                </div>
              )}

              <div
                className={cn(
                  'mx-2 md:mx-6 flex w-full md:w-96 flex-col',
                  index % 2 === 0 && 'md:items-end'
                )}
              >
                <h5
                  className={cn(
                    'mb-6 text-2xl font-semibold leading-none tracking-tight hover:text-indigo-600 text-center md:text-left',
                    index % 2 === 0 && 'md:text-right'
                  )}
                >
                  <a href={proj.github}>{proj.name}</a>
                </h5>
                <Paragraph
                  className={cn('mb-6 text-center md:text-left', index % 2 === 0 && 'md:text-right')}
                >
                  {proj.description}
                </Paragraph>
                <div
                  className={cn(
                    'flex flex-wrap mb-4 justify-center md:justify-start',
                    index % 2 === 0 && 'md:justify-end'
                  )}
                >
                  {proj.technologies.map((Tech, index) => (
                    <Tech key={index} className="mb-1 mr-1" />
                  ))}
                </div>
                <div className="flex justify-center md:justify-start">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon="mingcute:github-line"
                      className="mr-2 size-7 hover:text-indigo-600"
                    />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon="lucide:external-link"
                      className="size-7 hover:text-indigo-600"
                    />
                  </a>
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
    technologies: [TypescriptCard, NodeJSCard, SnowflakeCard],
    github: 'https://github.com/j-dumbell/snow-builder',
    npm: 'https://www.npmjs.com/package/snow-builder'
  },
  {
    name: 'Go-bytes',
    description:
      'A Golang package for working with quantities of bytes, inspired by time.Duration.',
    technologies: [GolangCard],
    github: 'https://github.com/j-dumbell/go-bytes'
  },
  {
    name: 'CacheMem',
    description:
      'A concurrency safe, strongly typed, in-memory cache for Golang.',
    technologies: [GolangCard],
    github: 'https://github.com/j-dumbell/cachemem'
  },
  {
    name: 'Go-FP',
    description: 'Functional programming utilities for Golang.',
    technologies: [GolangCard],
    github: 'https://github.com/j-dumbell/go-fp'
  },
  {
    name: 'Me',
    description: 'This site!  My personal portfolio website.',
    technologies: [
      TypescriptCard,
      ReactCard,
      TailwindCSSCard,
      AWSCard,
      AWSCDKCard,
      GoogleAnalyticsCard
    ],
    github: 'https://github.com/j-dumbell/me'
  }
]

export const Projects: FC = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <HeadlineProjects />
      <div className="mt-20 flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cardProjects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
      </div>
    </Section>
  )
}
