import { useState } from 'react'
import styled from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { FadeIn } from '../../Animations'
import Header from '../../Common/Header'
import { FilmCloseButton } from './CloseButton'
import { FilmContext } from './Context'
import { FilmPlayButton } from './PlayButton'

type StyledHeaderProps = {
  state: filmState
}

type FilmHeroProps = {}

const StyledHeader = styled(Header)<StyledHeaderProps>`
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]} !important;
  display: grid !important;
  grid-template-rows: 1fr 1fr !important;
  justify-content: initial !important;
  align-items: initial !important;

  &:not(:only-child) {
    transition: height
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
    height: ${props =>
      props.state === 'open'
        ? props.theme.sizes.height[3]
        : props.theme.sizes.height[2]};
  }

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${FadeIn}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`

export const FilmHero: React.FunctionComponent<FilmHeroProps> = ({
  children,
  ...props
}) => {
  const [filmState, setFilmState] = useState<filmState>('unopened')

  return (
    <FilmContext.Provider value={{ state: filmState, setState: setFilmState }}>
      <StyledHeader state={filmState} {...props}>
        {children}
        <FilmCloseButton />
        <FilmPlayButton />
      </StyledHeader>
    </FilmContext.Provider>
  )
}
