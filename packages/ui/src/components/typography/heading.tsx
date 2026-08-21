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
    className={cn('text-3xl font-bold text-white', className)}
  >
    {children}
  </h2>
)
