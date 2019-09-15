import { css } from 'styled-components'
import { styled } from '../../../theme'
import { FadeIn, FadeOut } from '../../Animations'
import { FilmContext } from './Context'

type StyledIframeContainerProps = {
  filmState: 'unopened' | 'open' | 'closed'
}

const IframeContainer = styled.div<StyledIframeContainerProps>`
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;
  opacity: 0;

  ${props =>
    props.filmState === 'open' &&
    css`
      animation: ${FadeIn} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}

  ${props =>
    props.filmState === 'closed' &&
    css`
      animation: ${FadeOut} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}
  iframe {
    width: ${props => props.theme.sizes.dynamic[2]};
    height: ${props => props.theme.sizes.height[3]};
  }
`
export const FilmEmbed: React.FunctionComponent<any> = props => (
  <FilmContext.Consumer>
    {({ state }) => (
      <IframeContainer filmState={state}>
        <iframe {...props} />
      </IframeContainer>
    )}
  </FilmContext.Consumer>
)
