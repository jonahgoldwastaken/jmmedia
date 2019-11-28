import { useContext } from 'react'
import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { SwipeInRight, SwipeOutLeft } from '../../Animations'
import { Heading } from '../../Common'
import { FilmContext } from './Context'

type StyledHeadingProps = {
  filmState: filmState
}

const StyledHeading = styled(Heading)<StyledHeadingProps>`
  position: relative;
  z-index: 2;
  margin: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes[3]};
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  justify-self: start;
  align-self: end;
  will-change: clip-path;
  text-align: left;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[4]};
    margin: ${props => props.theme.space[3]};
  }

  .page-transition-enter & {
    opacity: 1;
  }

  .page-transition-enter-active & {
    animation-name: ${SwipeInRight};
  }

  .page-transition-exit-active & {
    animation-name: ${SwipeOutLeft};
  }

  ${props =>
    props.filmState === 'open' &&
    css`
      animation: ${SwipeOutLeft} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}

  ${props =>
    props.filmState === 'closed' &&
    css`
      animation: ${SwipeInRight} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}
`

export const FilmTitle: React.FunctionComponent = props => {
  const { state } = useContext(FilmContext)

  return <StyledHeading filmState={state} {...props} />
}
