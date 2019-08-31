import { styled } from '../../theme'

const StyledItem = styled.li`
  padding: 0;
  margin: 0;
`

export const Item: React.FunctionComponent = props => <StyledItem {...props} />
