import React from 'react'

export type HyperlinkProps = {
  href: string
  title: string
}

export const Hyperlink: React.FC<HyperlinkProps> = (props: HyperlinkProps) => (
  <a
    className="group text-cyan-500 transition-all duration-300 ease-in-out"
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-400 ease-out">
      {props.title}
    </span>
  </a>
)
