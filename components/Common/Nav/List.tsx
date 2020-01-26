import styled from 'styled-components'

export const NavList = styled.ul`
  display: block;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.theme.sizes.static[2]};

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: column;
  }
`
