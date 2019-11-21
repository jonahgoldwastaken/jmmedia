import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { SwipeInLeft, SwipeOutRight } from '../../Animations'
import { FilmContext } from './Context'

type StyledParagraphProps = {
  filmState: filmState
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  position: relative;
  z-index: 2;
  margin: ${props => props.theme.space[2]};
  align-self: start;
  justify-self: end;
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[1]};
  grid-row: 1;
  grid-column: 1;
  will-change: clip-path;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin: ${props => props.theme.space[3]};
  }

  .page-transition-enter-active & {
    animation: ${SwipeInLeft}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }

  .page-transition-exit-active & {
    animation: ${SwipeOutRight}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }

  ${props =>
    props.filmState === 'open' &&
    css`
      animation: ${SwipeOutRight} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}

  ${props =>
    props.filmState === 'closed' &&
    css`
      animation: ${SwipeInLeft} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}
`
export const FilmDetails: React.FunctionComponent = props => (
  <FilmContext.Consumer>
    {({ state }) => <StyledParagraph filmState={state} {...props} />}
  </FilmContext.Consumer>
)
