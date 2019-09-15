import { rgba } from 'polished'
import { styled } from '../../../theme'
import Header from '../../Common/Header'
import { FilmContext } from './Context'
import { useState } from 'react'
import { FilmPlayButton } from './PlayButton'
import { FilmCloseButton } from './CloseButton'

const StyledHeader = styled(Header)`
  background: ${rgba('black', 0.75)};
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: initial;
  align-items: initial;

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

export const FilmHero: React.FunctionComponent = ({ children, ...props }) => {
  const [filmState, setFilmState] = useState<'unopened' | 'open' | 'closed'>(
    'unopened'
  )
  return (
    <FilmContext.Provider value={{ state: filmState, setState: setFilmState }}>
      <StyledHeader {...props}>
        {children}
        <FilmPlayButton />
        <FilmCloseButton />
      </StyledHeader>
    </FilmContext.Provider>
  )
}
