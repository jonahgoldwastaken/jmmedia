import { useContext } from 'react'
import styled from 'styled-components'
import { logEvent } from '../../../utils/analytics'
import { Button } from '../../Common'
import { BackgroundContext } from '../../Common/Background'
import { FilmContext } from './Context'

const StyledButton = styled(Button)`
  position: absolute;
`

export const FilmCloseButton: React.FunctionComponent = () => {
  const { setState, state } = useContext(FilmContext)
  const { setShowNavButton } = useContext(BackgroundContext)
  return (
    <StyledButton
      icon="compress"
      onClick={() => {
        setState('closed')
        setShowNavButton(true)
        logEvent(
          `Video plays on ${window.location.pathname}`,
          `Stopped playing video`
        )
      }}
      hide={state !== 'open'}
    />
  )
}
