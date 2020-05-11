import styled from 'styled-components'
import { BaseRunning } from '../../Text'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  outbound?: boolean
}

const StyledAnchor = styled.a`
  ${BaseRunning}
  color: ${props => props.theme.colours.tertiary};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights[1]};
`

export const FooterNavLink: React.FunctionComponent<NavLinkProps> = ({
  outbound,
  ...props
}) => (
  <li>
    {outbound ? (
      <StyledAnchor {...props} />
    ) : (
      <Link href={props.href}>
        <StyledAnchor children={props.children} />
      </Link>
    )}
  </li>
)
