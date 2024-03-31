import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export const Heading: FC<HeadingProps> = ({
  className,
  children,
  ...otherProps
}) => (
  <h2
    {...otherProps}
    className={cn(
      'mb-20 scroll-m-20 text-center text-3xl xs:text-5xl font-bold tracking-tight text-slate-900 ',
      className
    )}
  >
    {children}
  </h2>
)
