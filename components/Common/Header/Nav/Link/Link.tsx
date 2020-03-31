import { LinkWrapper } from '../../../Link'
import { NavAnchor } from './Anchor'

type NavLinkProps = {
  disabled?: boolean
  href: string
}

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  disabled,
  ...props
}) => {
  return (
    <LinkWrapper disabled={disabled} href={href}>
      <li>
        <NavAnchor {...props} />
      </li>
    </LinkWrapper>
  )
}
