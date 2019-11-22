import { styled } from '../../../theme'
import { NavList } from './List'

const StyledNav = styled.nav`
  margin: 0;
  padding: 0 ${props => props.theme.space[3]};
  width: 100%;
  max-width: ${props => props.theme.sizes.static[2]};
`

export const HeroNav: React.FunctionComponent = ({ children }) => {
  return (
    <StyledNav>
      <NavList>{children}</NavList>
    </StyledNav>
  )
}
