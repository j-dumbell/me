import { FC } from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { IconProps } from '@/components/icons/iconprops'

export const GithubIcon: FC<IconProps> = (props) => {
  return (
    <a
      aria-label="Github profile"
      className={props.className}
      href={props.href}
    >
      <GitHubLogoIcon className={props.className} />
    </a>
  )
}
