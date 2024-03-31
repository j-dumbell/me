import { cn } from '@/lib/utils'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Section: FC<SectionProps> = ({ className, ...otherProps }) => (
  <section
    {...otherProps}
    className={cn('pt-20 pb-40 md:px-36 px-2', className)}
  ></section>
)
