import styled from 'styled-components'
import { BaseHeading } from '../../Text/Headings/BaseHeading'

type NavLinkProps = {
  href: string
}

const StyledAnchor = styled.a`
  ${BaseHeading};
  margin-left: ${props => props.theme.spacing[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.colours.secondary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights[2]};
`

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  children,
}) => (
  <li>
    <StyledAnchor href={href}>{children}</StyledAnchor>
  </li>
)
