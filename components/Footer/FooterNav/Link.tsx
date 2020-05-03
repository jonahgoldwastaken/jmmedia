import styled from 'styled-components'
import { BaseRunning } from '../../Text'

type NavLinkProps = {
  href: string
}

const StyledAnchor = styled.a`
  ${BaseRunning}
  color: ${props => props.theme.colours.tertiary};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights[1]};
`

export const FooterNavLink: React.FunctionComponent<NavLinkProps> = props => (
  <li>
    <StyledAnchor {...props} />
  </li>
)
