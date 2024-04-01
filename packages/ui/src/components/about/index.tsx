import { FC } from 'react'
import { Heading, Paragraph } from '@/components/typography'
import MeImg from '../../assets/me.jpeg'
import { Hyperlink } from '@/components/hyperlink'
import { Section } from '@/components/section'

export const About: FC = () => {
  return (
    <Section className="bg-slate-100">
      <Heading>About</Heading>
      <div className="container flex max-w-4xl flex-wrap items-center justify-center space-x-8 space-y-8">
        <div className="max-w-lg">
          <Paragraph>
            {`Hi, I'm James, nice to meet you! I'm a London-based mathematics
            graduate turned engineer with over 5 years experience across
            software engineering, devOps and data engineering.`}
          </Paragraph>

          <Paragraph>
            Fast forward to today, and I've had the privilege of working on some
            interesting projects in a variety of industries including{' '}
            <Hyperlink href="https://www.wonderbly.com/uk" title="ecommerce" />,{' '}
            <Hyperlink href="https://www.nectar360.co.uk/" title="marketing" />,{' '}
            <Hyperlink href="https://convexin.com/" title="insurtech" /> and
            observability. I'm currently building things for{' '}
            <Hyperlink href="https://www.grafana.com" title="Grafana Labs" />,
            helping companies monitor their mission critical applications.
          </Paragraph>
        </div>
        <img
          className="size-72 rounded-lg border-0 border-[#000B60] [box-shadow:10px_10px_0px_#4f45e482]"
          src={MeImg}
          alt="James Dumbell"
        />
      </div>
    </Section>
  )
}
