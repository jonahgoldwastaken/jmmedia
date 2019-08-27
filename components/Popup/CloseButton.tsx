import { styled } from '../../theme'

type CloseButtonProps = {
  closeHandler: () => void
}

const StyledButton = styled.button`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  justify-self: end;
  align-self: start;

  margin: ${props => props.theme.space[2]} ${props => props.theme.space[2]} 0 0;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[1]};
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

export const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  closeHandler,
}) => {
  return <StyledButton onClick={closeHandler}>Sluiten</StyledButton>
}
