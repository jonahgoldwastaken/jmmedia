import HeaderHeading from './Heading'
import HeaderNav, { NavLink } from './Nav'
import { styled } from '../../theme'

type HeaderProps = {
  active: number
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding-top: ${props => props.theme.space[2]};
  background: ${props => props.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 99;
`

export const Header: React.FunctionComponent<HeaderProps> = ({ active }) => {
  return (
    <StyledHeader>
      <HeaderHeading>Jonah Meijers</HeaderHeading>
      <HeaderNav>
        <NavLink active={active === 0} href="/">
          Film
        </NavLink>
        <NavLink disabled active={active === 1} href="/photography">
          Fotografie
        </NavLink>
        <NavLink disabled active={active === 2} href="/about">
          Over mij
        </NavLink>
      </HeaderNav>
    </StyledHeader>
  )
}
