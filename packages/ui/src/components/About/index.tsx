import React from 'react'
import { Section } from '../Section'
import myImage from '../../assets/images/me.png'
import { ReactComponent as Typescript } from '../../assets/svgs/typescript.svg'
import { ReactComponent as Golang } from '../../assets/svgs/golang.svg'
import { ReactComponent as Scala } from '../../assets/svgs/scala.svg'
import { ReactComponent as Python } from '../../assets/svgs/python.svg'
import { ReactComponent as Docker } from '../../assets/svgs/docker.svg'
import { ReactComponent as Kubernetes } from '../../assets/svgs/kubernetes.svg'
import { ReactComponent as ReactLogo } from '../../assets/svgs/react.svg'
import { ReactComponent as Next } from '../../assets/svgs/next.svg'
import { ReactComponent as Spark } from '../../assets/svgs/spark.svg'
import { ReactComponent as Postgres } from '../../assets/svgs/postgres.svg'
import { ReactComponent as Mongo } from '../../assets/svgs/mongo.svg'
import { ReactComponent as Snowflake } from '../../assets/svgs/snowflake.svg'
import { ReactComponent as Dynamo } from '../../assets/svgs/dynamo.svg'
import { ReactComponent as AWS } from '../../assets/svgs/aws.svg'
import { ReactComponent as Nest } from '../../assets/svgs/nest.svg'
import { ReactComponent as Kafka } from '../../assets/svgs/kafka.svg'
import { ReactComponent as Cloud } from '../../assets/svgs/cloud.svg'
import { ReactComponent as Chart } from '../../assets/svgs/chart.svg'
import { ReactComponent as Software } from '../../assets/svgs/software.svg'

const iconList: {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  name: string
}[] = [
  { Svg: Golang, name: 'Golang' },
  { Svg: Typescript, name: 'Typescript' },
  { Svg: Python, name: 'Python' },
  { Svg: Scala, name: 'Scala' },
  { Svg: Docker, name: 'Docker' },
  { Svg: Kubernetes, name: 'Kubernetes' },
  { Svg: Kafka, name: 'Kafka' },
  { Svg: ReactLogo, name: 'React' },
  { Svg: Next, name: 'NextJS' },
  { Svg: Nest, name: 'NestJS' },
  { Svg: Spark, name: 'Apache Spark' },
  { Svg: Postgres, name: 'Postgres' },
  { Svg: Mongo, name: 'MongoDB' },
  { Svg: Snowflake, name: 'Snowflake' },
  { Svg: Dynamo, name: 'DynamoDB' },
  { Svg: AWS, name: 'AWS' }
]

type Pillar = {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
}

const pillars: Pillar[] = [
  { Svg: Software, title: 'Full stack software engineering' },
  { Svg: Chart, title: 'Data engineering' },
  { Svg: Cloud, title: 'DevOps' }
]

export const About: React.FC = () => (
  <Section id="about" title="About me">
    <div className="flex justify-around py-10">
      {pillars.map(({ Svg, title }) => (
        <div key={title}>
          <Svg className="h-20 w-20" />
          <h3 className="font-bold">{title}</h3>
        </div>
      ))}
    </div>

    <div className="flex">
      <div className="mr-10">
        <div>
          <p className="mb-3">
            Hello! My name is James. I'm a master of mathematics turned software
            engineer with over 5 years experience.
          </p>

          <p className="mb-3">
            I've been lucky to have worked across a variety of stacks. Here's a
            few technologies I'm proficient in:
          </p>
        </div>
      </div>
      <div className="shadow-2xl">
        <img className="max-w-sm" src={myImage} alt="James Dumbell" />
      </div>
    </div>

    <div className="flex flex-wrap justify-center">
      {iconList.map(({ Svg, name }) => (
        <div key={name} className="w-24 py-5">
          <Svg className="h-12 w-12 mx-auto" />
          <p className="text-center">{name}</p>
        </div>
      ))}
    </div>
  </Section>
)
