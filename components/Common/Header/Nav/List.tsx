import styled from 'styled-components'

export const NavList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${props => props.theme.sizes.dynamic[2]};
`
