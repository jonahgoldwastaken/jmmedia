import { rgba } from 'polished'
import { useState } from 'react'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import Header from '../../Common/Header'
import { FilmContext } from './Context'
import { FilmPlayButton } from './PlayButton'
import { FilmCloseButton } from './CloseButton'

type StyledHeaderProps = {
  background: string
  state: 'open' | 'unopened' | 'closed'
}

type FilmHeroProps = {
  background: string
}

const StyledHeader = styled(Header)<StyledHeaderProps>`
  background: linear-gradient(${rgba('black', 0.75)}, ${rgba('black', 0.75)}),
    url(${props => props.background}) no-repeat center/cover;
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: initial;
  align-items: initial;

  ${props =>
    props.state === 'open' &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    transition: opacity
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  }
`

export const FilmHero: React.FunctionComponent<FilmHeroProps> = ({
  children,
  ...props
}) => {
  const [filmState, setFilmState] = useState<'unopened' | 'open' | 'closed'>(
    'unopened'
  )
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
