import { FC } from 'react'

export type HyperlinkProps = {
  href: string
  title: string
}

export const Hyperlink: FC<HyperlinkProps> = (props: HyperlinkProps) => (
  <a
    className="group text-cyan-500 transition-all duration-300 ease-in-out"
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    <span className="duration-400 bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all ease-out group-hover:bg-[length:100%_1px]">
      {props.title}
    </span>
  </a>
)
