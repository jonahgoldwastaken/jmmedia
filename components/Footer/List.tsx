import { styled } from '../../theme'

export const FooterList = styled.ul`
  list-style: none;
  max-width: ${props => props.theme.sizes.static[1]};
  margin: ${props => props.theme.space[4]} auto 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
