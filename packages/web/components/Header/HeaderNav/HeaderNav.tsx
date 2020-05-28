import { NavList } from 'components/Nav'
import styled from 'styled-components'
import { HeaderNavLink } from './Link'

const StyledNav = styled.nav`
  display: none;

  &:only-child {
    margin: 1rem 0 1rem auto;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
  }
`

export const HeaderNav: React.FunctionComponent = () => (
  <StyledNav>
    <NavList>
      <HeaderNavLink href="/about">Over</HeaderNavLink>
      <HeaderNavLink href="/services">Services</HeaderNavLink>
      <HeaderNavLink href="/projects">Projecten</HeaderNavLink>
      <HeaderNavLink
        outbound
        href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20"
      >
        Contact
      </HeaderNavLink>
    </NavList>
  </StyledNav>
)
