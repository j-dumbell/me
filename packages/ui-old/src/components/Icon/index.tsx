import React from 'react'

export type IconProps = {
  name: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon: React.FC<IconProps> = ({ Svg, name }: IconProps) => (
  <div className="w-24">
    <Svg className="h-12 w-12 mx-auto" />
    <p className="text-center">{name}</p>
  </div>
)
