import { FC } from 'react'
import { cn } from '@/lib/utils'

export type HeadingProps = {
  text: string
  className?: string
}

export const Heading: FC<HeadingProps> = (props) => (
  <h2
    className={cn(
      'mb-20 scroll-m-20 text-center text-5xl font-bold tracking-tight',
      props.className
    )}
  >
    {props.text}
  </h2>
)
