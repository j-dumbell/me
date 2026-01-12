import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Icon } from '@iconify/react'

export type HyperlinkProps = {
  className?: string
  linkIconSide?: 'left' | 'right'
  href: string
  title: string
}

export const Hyperlink: FC<HyperlinkProps> = (props: HyperlinkProps) => (
  <a
    className={cn(
      'group text-emerald-400 transition-all duration-300 ease-in-out hover:text-emerald-400',
      !!props.linkIconSide && 'flex items-center',
      props.className
    )}
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    {props.linkIconSide === 'left' && (
      <Icon icon="lucide:external-link" className="mr-2 size-4" />
    )}
    <span className="duration-400 bg-gradient-to-r from-emerald-400 to-emerald-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all ease-out hover:text-emerald-400 group-hover:bg-[length:100%_1px]">
      {props.title}
    </span>
    {props.linkIconSide === 'right' && (
      <Icon icon="lucide:external-link" className="ml-2 " />
    )}
  </a>
)
