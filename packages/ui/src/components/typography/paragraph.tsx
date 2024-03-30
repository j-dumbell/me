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
    className={cn(
      'leading-7 [&:not(:first-child)]:mt-6 text-slate-600 text-base sm:text-lg',
      className
    )}
  >
    {children}
  </p>
)
