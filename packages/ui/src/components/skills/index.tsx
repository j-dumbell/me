import React, { FC } from 'react'
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
import { Icon } from '@iconify/react'

type Column = {
  img: string
  title: string
  iconId: string
  description: string
  skills: FC<TechHoverCardProps>[]
}

const columns: Column[] = [
  {
    img: ComputerImg,
    iconId: 'mynaui:terminal',
    // title: '🛠️ Software engineering',
    title: 'Software engineering',
    description:
      'I design and build scalable systems. I work across the entire stack, everything from distributed event-driven backends to slick UIs.',
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
    iconId: 'carbon:machine-learning-model',
    // title: '🧠 Data engineering & ML',
    title: 'Data engineering & ML',
    description: `I build data platforms using ETL pipelines to populate data lakes warehouses. I model data to support analytics and machine learning applications.`,
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
    iconId: 'charm:rocket',
    // title: '🚀 DevOps',
    title: 'DevOps',
    description:
      'I build CI/CD pipelines to ship software frequently. I use metrics, logs and traces to ensure systems are reliable. I always manage infrastructure as code.',
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
    <section className={'pt-48'}>
      <Heading>🎓 Skills</Heading>
      <div className="grid items-center gap-4 pt-10">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          {columns.map(({ title, description, skills, iconId }) => (
            <div key={title} className="space-y-3">
              <Icon
                icon={iconId}
                className="mx-auto size-16 text-emerald-400"
              />
              <h3 className="text-2xl font-semibold text-gray-400 pt-8">
                {title}
              </h3>
              <Paragraph>{description}</Paragraph>
              <div className="mt-4 flex flex-wrap py-5">
                {skills.map((Skill, index) => (
                  <Skill key={index} className={'mr-2 mt-2'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
