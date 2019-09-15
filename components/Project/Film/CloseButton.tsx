import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import { PopInRight, PopOutLeft } from '../../Animations'
import { FilmContext } from './Context'

type StyledButtonProps = {
  filmState: 'unopened' | 'open' | 'closed'
}

const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  top: ${props => props.theme.space[3]};
  left: ${props => props.theme.space[3]};
  z-index: 3;
  background: none;
  border: none;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]};
  color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  opacity: 0;

  ${props =>
    props.filmState === 'open' &&
    css`
      animation: ${PopInRight} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}
  ${props =>
    props.filmState === 'closed' &&
    css`
      animation: ${PopOutLeft} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
      pointer-events: none;
    `}

  svg {
    transform: translate(9%, 2%);
    width: 1em !important;
    height: 1em !important;
    vertical-align: center !important;
  }
`

export const FilmCloseButton: React.FunctionComponent = () => (
  <FilmContext.Consumer>
    {({ setState, state }) => (
      <StyledButton
        onClick={() =>
          state === 'open' ? setState('closed') : setState('open')
        }
        filmState={state}
      >
        <FontAwesomeIcon icon="times" />
      </StyledButton>
    )}
  </FilmContext.Consumer>
)
