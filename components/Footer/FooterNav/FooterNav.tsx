import styled from 'styled-components'
import { NavList } from '../../Nav'
import { FooterNavLink } from './Link'

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[1]};
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`

export const FooterNav: React.FunctionComponent = props => (
  <StyledNav>
    <NavList>
      <FooterNavLink href="/over">Over</FooterNavLink>
      <FooterNavLink href="/services">Services</FooterNavLink>
      <FooterNavLink href="/Portfolio">Portfolio</FooterNavLink>
      <FooterNavLink href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20">
        Contact
      </FooterNavLink>
    </NavList>
  </StyledNav>
)
