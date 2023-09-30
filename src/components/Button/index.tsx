import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'

export type ButtonProps = {
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: ButtonHTMLAttributes<unknown>['type']
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <button
    className="bg-transparent text-cyan-500 border border-cyan-500 rounded py-2 px-4"
    onClick={props.onClick}
  >
    {props.title}
  </button>
)
