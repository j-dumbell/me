import { FC } from 'react'
import { Heading } from '@/components/section'
import DevopsImg from '../../assets/devops.png'
import DBImg from '../../assets/db.png'
import ComputerImg from '../../assets/computer.png'
import {
  ApacheAirflowCard,
  ApacheSparkCard,
  AWSCard,
  AWSCDKCard,
  DBTCard,
  DockerCard,
  DynamoDBCard,
  GithubActionsCard,
  GolangCard,
  GrafanaCard,
  GraphQLCard,
  KafkaCard,
  KEDACard,
  KubernetesCard,
  MongoDBCard,
  PostgresCard,
  PrometheusCard,
  ProtobufCard,
  PythonCard,
  ReactCard,
  ScalaCard,
  SnowflakeCard,
  TechHoverCardProps,
  TerraformCard,
  TypescriptCard
} from '@/components/hovercard'

type Column = {
  img: string
  title: string
  description: string
  skills: FC<TechHoverCardProps>[]
}

const columns: Column[] = [
  {
    img: ComputerImg,
    title: 'Software engineering',
    description:
      'From REST / GraphQL APIs and event-driven microservices, to slick UIs - I build for the web.',
    skills: [
      GolangCard,
      TypescriptCard,
      KafkaCard,
      ProtobufCard,
      GraphQLCard,
      PostgresCard,
      MongoDBCard,
      DynamoDBCard,
      ReactCard
    ]
  },
  {
    img: DBImg,
    title: 'Data engineering',
    description:
      'I build and orchestrate high throughput ETL pipelines to power analytics and machine learning applications.',
    skills: [
      ScalaCard,
      PythonCard,
      SnowflakeCard,
      DBTCard,
      ApacheSparkCard,
      ApacheAirflowCard
    ]
  },
  {
    img: DevopsImg,
    title: 'DevOps',
    description:
      'I architect cloud-native systems and provision with infrastructure-as-code.  I write CI/CD pipelines to enable shipping to production frequently and safely.',
    skills: [
      AWSCard,
      TerraformCard,
      DockerCard,
      KubernetesCard,
      KEDACard,
      GithubActionsCard,
      AWSCDKCard,
      PrometheusCard,
      GrafanaCard
    ]
  }
]

export const Skills: FC = () => {
  return (
    <div className="py-20">
      <Heading text="Skills" />
      <div className="container grid items-center justify-center gap-4 px-4 py-12 text-center md:px-6 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
          {columns.map(({ title, description, img, skills }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center justify-center">
                <img
                  className="mb-8 size-36 transition duration-300 hover:scale-110"
                  src={img}
                  alt={''}
                />
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
              <p className="text-gray-500">{description}</p>
              <div className="mt-4 flex flex-wrap justify-center p-5">
                {skills.map((Skill, index) => (
                  <Skill key={index} className={'mr-2 mt-2'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
