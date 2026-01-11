import { FC } from 'react'
import { Heading, Paragraph } from '@/components/typography'
import MeImg from '../../assets/me.jpeg'
import { Hyperlink } from '@/components/hyperlink'

export const About: FC = () => {
  return (
    <section>
      <div className="flex items-center">
        <div className="w-1/2">
          <Heading>🙋🏻‍♂️ About me</Heading>
          <Paragraph>
            {`Hi, I'm James, nice to meet you! I'm a London-based mathematics
            graduate turned engineer with over 8 years experience across
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
        <div className={'flex w-1/2 justify-center'}>
          <img
            className="size-72 rounded-full border-4 border-emerald-400"
            src={MeImg}
            alt="James Dumbell"
          />
        </div>
      </div>
    </section>
  )
}
