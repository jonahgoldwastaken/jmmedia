import styled from 'styled-components'
import { NavLink } from './Link'

const List = styled.ul`
  padding: 0;
  list-style: none;
  &,
  & li {
    display: inline;
  }
`

export const HeaderNav: React.FunctionComponent = () => (
  <nav>
    <List>
      <NavLink href="/over">Over</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/Portfolio">Portfolio</NavLink>
      <NavLink href="mailto:hoi@jonahmeijers.nl?SUBJECT=Aanvraag:%20">
        Contact
      </NavLink>
    </List>
  </nav>
)
