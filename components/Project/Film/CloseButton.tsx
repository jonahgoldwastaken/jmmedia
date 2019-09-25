import { css } from 'styled-components'
import { styled } from '../../../theme'
import { FilmContext } from './Context'
import { NavButton } from '../../Common'

type StyledButtonProps = {
  filmState: 'open' | 'unopened' | 'closed'
}

const StyledButton = styled(NavButton)<StyledButtonProps>`
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

export const FilmCloseButton: React.FunctionComponent = () => (
  <FilmContext.Consumer>
    {({ setState, state }) => (
      <StyledButton
        icon="times"
        onClick={() =>
          state === 'open' ? setState('closed') : setState('open')
        }
        hide={state !== 'open'}
        filmState={state}
      />
    )}
  </FilmContext.Consumer>
)
