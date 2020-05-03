import styled from 'styled-components'
import { Logo } from '../Logo'
import { HeaderNav } from './HeaderNav'

const StyledHeader = styled.header`
  background: ${props => props.theme.colours.tertiary};
  padding: 0 0 ${props => props.theme.spacing[1]};
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    justify-content: space-between;

    nav {
      display: block;
    }
  }
`
export const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderNav />
    </StyledHeader>
  )
}
