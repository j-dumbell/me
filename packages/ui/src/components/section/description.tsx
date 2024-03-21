import { FC } from 'react'
import { cn } from '@/lib/utils'

export type DescriptionProps = {
  text: string
  className?: string
}

export const Description: FC<DescriptionProps> = ({ text, className }) => (
  <p className={cn('leading-7 [&:not(:first-child)]:mt-6 text-lg', className)}>
    {text}
  </p>
)
