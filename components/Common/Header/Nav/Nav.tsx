import { useContext } from 'react'
import styled from 'styled-components'
import { BackgroundContext } from '../../Background'
import NavLink from './Link'
import { NavList } from './List'

type StyledNavProps = {
  currentPage: string
}

const StyledNav = styled.nav<StyledNavProps>`
  margin: 0;
  display: flex;
  width: ${props => props.theme.sizes.dynamic[1]};
`

export const Nav: React.FunctionComponent = () => {
  const { currentPage } = useContext(BackgroundContext)
  return (
    <StyledNav currentPage={currentPage}>
      <NavList>
        <NavLink href="/fotografie">Fotografie</NavLink>
        <NavLink href="/">Films</NavLink>
        <NavLink href="/over">Over mij</NavLink>
      </NavList>
    </StyledNav>
  )
}
