import { styled } from '../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
`

export const OpenButton: React.FunctionComponent = ({ children, ...props }) => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon="play" />
  </StyledButton>
)
