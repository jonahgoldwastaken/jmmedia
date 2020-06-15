import { BaseRunning } from 'components/Text'
import Link from 'next/link'
import styled from 'styled-components'

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

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`

export const FooterNavLink: React.FC<NavLinkProps> = ({
  outbound,
  ...props
}) => (
  <li>
    {outbound ? (
      <StyledAnchor {...props} />
    ) : (
      <Link href={props.href} scroll={false}>
        <StyledAnchor children={props.children} />
      </Link>
    )}
  </li>
)
