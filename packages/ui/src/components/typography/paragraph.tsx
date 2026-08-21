import { cn } from '@/lib/utils'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export const Paragraph: FC<ParagraphProps> = ({
  className,
  children,
  ...otherProps
}) => (
  <p
    {...otherProps}
    className={cn('text-lg leading-7 text-gray-400 not-first:mt-6', className)}
  >
    {children}
  </p>
)
