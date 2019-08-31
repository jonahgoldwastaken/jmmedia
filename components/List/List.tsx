import { styled } from '../../theme'

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 80rem;
  list-style: none;
`

export const List: React.FunctionComponent = props => <StyledList {...props} />
