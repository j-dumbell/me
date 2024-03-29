import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Icon } from '@iconify/react'

export type HyperlinkProps = {
  className?: string
  withIcon?: boolean
  href: string
  title: string
}

export const Hyperlink: FC<HyperlinkProps> = (props: HyperlinkProps) => (
  <a
    className={cn(
      'group text-black transition-all duration-300 ease-in-out hover:text-indigo-600',
      props.withIcon && 'flex items-center',
      props.className
    )}
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    <span className="duration-400 bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all ease-out hover:text-indigo-600 group-hover:bg-[length:100%_1px]">
      {props.title}
    </span>
    {props.withIcon && (
      <Icon icon="lucide:external-link" className="ml-2 size-4" />
    )}
  </a>
)
