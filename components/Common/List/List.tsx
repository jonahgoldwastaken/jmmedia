import styled from 'styled-components'

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  max-width: ${props => props.theme.sizes.static[2]};
  list-style: none;
`
