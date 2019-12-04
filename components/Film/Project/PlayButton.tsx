import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { logEvent } from '../../../utils/analytics'
import { FadeIn, FadeOut } from '../../Animations'
import { FilmContext } from './Context'

type StyledButtonProps = {
  filmState: filmState
}

const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props => props.theme.space[2]};
  background: ${props => props.theme.colors.primary};
  mix-blend-mode: screen;
  border: none;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1;
  text-align: center;
  outline: none;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  z-index: 3;

  ${props =>
    props.filmState === 'open' &&
    css`
      animation: ${FadeOut} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
      pointer-events: none;
    `}

  ${props =>
    props.filmState === 'closed' &&
    css`
      animation: ${FadeIn} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}

  svg {
    transform: translate(9%, 2%);
    width: 1em !important;
    height: 1em !important;
    vertical-align: center !important;
  }
`

export const FilmPlayButton: React.FunctionComponent = () => {
  const { setState, state } = useContext(FilmContext)

  return (
    <StyledButton
      onClick={() => {
        logEvent(`Video plays on ${window.location.pathname}`, `Playing video`)
        setState('open')
      }}
      filmState={state}
    >
      <FontAwesomeIcon icon="play" />
    </StyledButton>
  )
}
