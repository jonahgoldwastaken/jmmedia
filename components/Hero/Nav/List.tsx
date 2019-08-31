import { styled } from '../../../theme'

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: column;
  }
`
