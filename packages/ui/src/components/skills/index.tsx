import { FC } from 'react'
import { Heading, Paragraph } from '@/components/typography'
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
import { Section } from '@/components/section'

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
      'From event-driven microservices to slick UIs and everything between - I build for the web.',
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
    <Section>
      <Heading>Skills</Heading>
      <div className="container grid items-center justify-center gap-4 px-4 py-12 text-center md:px-6 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          {columns.map(({ title, description, img, skills }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center justify-center">
                <img
                  className="mb-8 size-36 transition duration-300 hover:scale-[115%]"
                  src={img}
                  alt={''}
                />
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-slate-800">
                {title}
              </h3>
              <Paragraph>{description}</Paragraph>
              <div className="mt-4 flex flex-wrap justify-center p-5">
                {skills.map((Skill, index) => (
                  <Skill key={index} className={'mr-2 mt-2'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
