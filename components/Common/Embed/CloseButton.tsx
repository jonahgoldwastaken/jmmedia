import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import { PopInLeft, PopOutLeft } from '../../Animations'
import { EmbedContext } from './Context'

type StyledButtonProps = {
  embedState: 'unopened' | 'open' | 'closed'
  onClick: () => void
}

type CloseButtonProps = {
  onClick: () => void
}

const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  top: ${props => props.theme.space[3]};
  left: ${props => props.theme.space[3]};
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  outline: none;
  opacity: 0;
  pointer-events: none;
  cursor: pointer;

  ${props =>
    props.embedState === 'open'
      ? css`
          pointer-events: auto;
          animation: ${PopInLeft} ${props.theme.animation.timing[1]}
            ${props.theme.animation.curve} ${props.theme.animation.timing[1]}
            forwards;
        `
      : props.embedState === 'closed' &&
        css`
          animation: ${PopOutLeft} ${props.theme.animation.timing[1]}
            ${props.theme.animation.curve} forwards;
        `}
`

export const EmbedCloseButton: React.FunctionComponent<
  CloseButtonProps
> = props => (
  <EmbedContext.Consumer>
    {({ embedState }) => (
      <StyledButton {...props} embedState={embedState}>
        <FontAwesomeIcon icon="times" />
      </StyledButton>
    )}
  </EmbedContext.Consumer>
)
