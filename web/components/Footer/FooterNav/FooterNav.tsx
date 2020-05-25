import { NavList } from 'components/Nav'
import styled from 'styled-components'
import { FooterNavLink } from './Link'

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: ${props => props.theme.spacing[1]};
  background: ${props => props.theme.colours.primary};

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`

export const FooterNav: React.FunctionComponent = () => (
  <StyledNav>
    <NavList>
      <FooterNavLink href="/about">Over</FooterNavLink>
      <FooterNavLink href="/services">Services</FooterNavLink>
      <FooterNavLink href="/portfolio">Portfolio</FooterNavLink>
      <FooterNavLink
        outbound
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Contact
      </FooterNavLink>
    </NavList>
  </StyledNav>
)
