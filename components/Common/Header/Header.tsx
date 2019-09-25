import { styled } from '../../../theme'

const StyledHeader = styled.header`
  position: relative;
  width: ${props => props.theme.sizes.dynamic[2]};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header: React.FunctionComponent = props => (
  <StyledHeader {...props} />
)
