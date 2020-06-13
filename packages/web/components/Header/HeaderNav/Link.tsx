import { BaseHeading } from 'components/Text/Headings/BaseHeading'
import styled from 'styled-components'

type NavLinkProps = {
  href?: string
}

export const HeaderNavLink = styled(BaseHeading).attrs({
  as: 'a',
})<NavLinkProps>`
  display: block;
  margin: 0 0 0 ${props => props.theme.spacing[1]} !important;
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.colours.secondary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights[2]};
  cursor: pointer;
`
