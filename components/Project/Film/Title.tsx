import { css } from 'styled-components'
import { styled } from '../../../theme'
import { SwipeInRight, SwipeOutLeft } from '../../Animations'
import { Heading } from '../../Common'
import { FilmContext } from './Context'

type StyledHeadingProps = {
  filmState: 'unopened' | 'open' | 'closed'
}

export const StyledHeading = styled(Heading)<StyledHeadingProps>`
  position: relative;
  z-index: 2;
  margin: ${props => props.theme.space[3]};
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  justify-self: start;
  align-self: end;
  font-size: ${props => props.theme.fontSizes[4]};
  will-change: clip-path;

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

export const FilmTitle: React.FunctionComponent = props => (
  <FilmContext.Consumer>
    {({ state }) => <StyledHeading filmState={state} {...props} />}
  </FilmContext.Consumer>
)
