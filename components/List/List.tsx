import { styled } from '../../theme'

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: ${props => props.theme.sizes.static[0]};
  grid-auto-flow: row dense;
`

export const List: React.FunctionComponent = props => <StyledList {...props} />
