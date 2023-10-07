import React from 'react'
import { Section } from '../Section'
import Me from '../../assets/images/me.jpeg'
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
import { ReactComponent as Terraform } from '../../assets/svgs/terraform.svg'
import { Hyperlink } from '../Hyperlink'
import Navbar from '../Navbar'

type SvgFC = React.FC<React.SVGProps<SVGSVGElement>>

const Chart: SvgFC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={`fill-transparent ${props.className}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="stroke-slate-700"
      d="M3 21V17M9 21V13M15 21V15M21 21V11M8.43934 5.56066C8.71079 5.83211 9.08579 6 9.5 6C9.91421 6 10.2892 5.83211 10.5607 5.56066M8.43934 5.56066C8.16789 5.28921 8 4.91421 8 4.5C8 3.67157 8.67157 3 9.5 3C10.3284 3 11 3.67157 11 4.5C11 4.91421 10.8321 5.28921 10.5607 5.56066M8.43934 5.56066L5.56066 8.43934M5.56066 8.43934C5.28921 8.16789 4.91421 8 4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 9.08579 5.83211 8.71079 5.56066 8.43934ZM10.5607 5.56066L13.4393 8.43934M13.4393 8.43934C13.1679 8.71079 13 9.08579 13 9.5C13 10.3284 13.6716 11 14.5 11C15.3284 11 16 10.3284 16 9.5C16 9.08579 15.8321 8.71079 15.5607 8.43934M13.4393 8.43934C13.7108 8.16789 14.0858 8 14.5 8C14.9142 8 15.2892 8.16789 15.5607 8.43934M15.5607 8.43934L18.4393 5.56066M18.4393 5.56066C18.7108 5.83211 19.0858 6 19.5 6C20.3284 6 21 5.32843 21 4.5C21 3.67157 20.3284 3 19.5 3C18.6716 3 18 3.67157 18 4.5C18 4.91421 18.1679 5.28921 18.4393 5.56066Z"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Cloud: SvgFC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={`${props.className}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9 13.2222L10.8462 15L15 11M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
        className="stroke-slate-700"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)

const Software: SvgFC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={`${props.className} fill-slate-700`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 419.931 419.931"
  >
    <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z" />
    <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327 c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336 c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z" />
    <g>
      <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z" />
      <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z" />{' '}
      <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z" />
    </g>
  </svg>
)

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
  { Svg: AWS, name: 'AWS' },
  { Svg: Terraform, name: 'Terraform' }
]

type Pillar = {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    Svg: Software,
    title: 'Full stack software engineering',
    description: 'From distributed microservices to slick UIs.'
  },
  {
    Svg: Chart,
    title: 'Data engineering',
    description:
      'I build and orchestrate high throughput data pipelines for machine learning and analytics'
  },
  {
    Svg: Cloud,
    title: 'DevOps',
    description:
      'I architect cloud-native systems and implement them using infrastructure as code'
  }
]

export const About: React.FC = () => (
  <Section
    id="about"
    title="About me"
    verticallyCenter={true}
    backgroundColour="white"
  >
    <div className="flex justify-around mx-10 rounded-3xl border-black border-2">
      {pillars.map(({ Svg, title, description }) => (
        <div key={title} className="flex-1 border-r-black border-r-2 px-10">
          <div className="mx-auto block h-24 w-24 rounded-full bg-teal-500 mt-8">
            <Svg className="mx-auto block h-14 w-14 translate-y-1/3" />
          </div>
          <h3 className="pt-5 text-center font-bold">{title}</h3>
          <p className="pt-5 text-center mb-5">{description}</p>
        </div>
      ))}
    </div>

    <div className="flex mt-10 mx-10">
      <div className="mr-10">
        <div>
          <p className="my-6 max-w-xl text-slate-500">
            I'm a master of mathematics turned software engineer with over 5
            years experience across full stack web development, data engineering
            and devOps. I'm currently based in London, building full-stack
            applications for&nbsp;
            <Hyperlink href="https://grafana.com/" title="Grafana" />.
          </p>
        </div>
      </div>
      <div>
        <img className="h-60 w-60 rounded-full" src={Me} alt="James Dumbell" />
      </div>
    </div>

    {/*<div className="flex flex-wrap justify-center">*/}
    {/*  {iconList.map(({ Svg, name }) => (*/}
    {/*    <div key={name} className="w-24 py-5">*/}
    {/*      <Svg className="mx-auto h-12 w-12" />*/}
    {/*      <p className="text-center">{name}</p>*/}
    {/*    </div>*/}
    {/*  ))}*/}
    {/*</div>*/}
  </Section>
)
