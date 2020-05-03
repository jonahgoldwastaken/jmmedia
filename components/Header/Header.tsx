import styled from 'styled-components'
import { HeaderNav } from './HeaderNav'

const StyledHeader = styled.header`
  background: ${props => props.theme.colours.tertiary};
  padding: 0 0 ${props => props.theme.spacing[1]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: none;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      display: block;
    }
  }
`
export const Header: React.FunctionComponent = ({ children }) => (
  <StyledHeader>
    {children}
    <HeaderNav />
  </StyledHeader>
)
