import { NavList } from '../../Nav'
import { HeaderNavLink } from './Link'

export const HeaderNav: React.FunctionComponent = () => (
  <nav>
    <NavList>
      <HeaderNavLink href="/over">Over</HeaderNavLink>
      <HeaderNavLink href="/services">Services</HeaderNavLink>
      <HeaderNavLink href="/Portfolio">Portfolio</HeaderNavLink>
      <HeaderNavLink href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20">
        Contact
      </HeaderNavLink>
    </NavList>
  </nav>
)
