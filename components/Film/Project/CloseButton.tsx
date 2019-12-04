import { useContext } from 'react'
import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { logEvent } from '../../../utils/analytics'
import { Button } from '../../Common'
import { FilmContext } from './Context'

type StyledButtonProps = {
  filmState: filmState
}

const StyledButton = styled(Button)<StyledButtonProps>`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  ${props =>
    props.filmState === 'open' &&
    css`
      pointer-events: auto;
    `}

  ${props =>
    props.filmState === 'unopened' &&
    css`
      animation: none;
    `}

  svg {
    transform: none;
  }
`

export const FilmCloseButton: React.FunctionComponent = () => {
  const { setState, state } = useContext(FilmContext)
  return (
    <StyledButton
      icon="times"
      onClick={() => {
        setState('closed')
        logEvent(
          `Video plays on ${window.location.pathname}`,
          `Stopped playing video`
        )
      }}
      hide={state !== 'open'}
      filmState={state}
    />
  )
}
