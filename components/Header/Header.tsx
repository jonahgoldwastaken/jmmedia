import styled from 'styled-components'
import HeaderHeading from './Heading'
import HeaderNav, { NavLink } from './Nav'

type HeaderProps = {
  active: number
}

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 0;
  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header: React.FunctionComponent<HeaderProps> = ({ active }) => {
  return (
    <StyledHeader>
      <HeaderHeading>Jonah Meijers</HeaderHeading>
      <HeaderNav>
        <NavLink active={active === 0} href="/">
          Film
        </NavLink>
        <NavLink active={active === 1} href="/photography">
          Fotografie
        </NavLink>
        <NavLink active={active === 2} href="/about">
          Over mij
        </NavLink>
      </HeaderNav>
    </StyledHeader>
  )
}
