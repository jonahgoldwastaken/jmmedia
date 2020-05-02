import styled from 'styled-components'

export const Header = styled.header`
  background: ${props => props.theme.colours.tertiary};
  padding: 0 0 ${props => props.theme.spacing[1]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
      display: none;
    }
  }
`
