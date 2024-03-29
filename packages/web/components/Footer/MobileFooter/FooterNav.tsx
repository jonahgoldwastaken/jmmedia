import { NavList } from 'components/Nav'
import styled from 'styled-components'
import { FooterNavLink } from './Link'

const StyledNav = styled.nav`
  display: block;
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
    padding: ${props => props.theme.spacing[2]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: none;
  }
`

export const MobileFooterNav: React.FC = () => (
  <StyledNav>
    <NavList>
      <FooterNavLink href="/">Home</FooterNavLink>
      <FooterNavLink href="/about">Over</FooterNavLink>
      <FooterNavLink href="/services">Services</FooterNavLink>
      <FooterNavLink href="/projects">Projecten</FooterNavLink>
      <FooterNavLink
        outbound
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Contact
      </FooterNavLink>
    </NavList>
  </StyledNav>
)
