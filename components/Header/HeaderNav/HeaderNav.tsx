import { NavList } from '../../Nav'
import { HeaderNavLink } from './Link'
import styled from 'styled-components'

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
      <HeaderNavLink href="/over">Over</HeaderNavLink>
      <HeaderNavLink href="/services">Services</HeaderNavLink>
      <HeaderNavLink href="/Portfolio">Portfolio</HeaderNavLink>
      <HeaderNavLink href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20">
        Contact
      </HeaderNavLink>
    </NavList>
  </StyledNav>
)
