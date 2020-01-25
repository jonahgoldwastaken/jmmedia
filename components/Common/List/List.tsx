import { styled } from '../../../theme'

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  max-width: ${props => props.theme.sizes.static[3]};
  list-style: none;
`
