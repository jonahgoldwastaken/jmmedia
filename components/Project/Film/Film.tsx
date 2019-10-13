import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { FadeIn } from '../../Animations'
import { VideoContainer, VideoElement } from '../../Common'
import { FilmContext } from './Context'
import { FilmPlayButton } from './PlayButton'

type StyledVideoProps = {
  filmState: filmState
  src: string
}

const StyledVideo = styled(VideoElement)<StyledVideoProps>`
  position: relative;
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;
  opacity: 0;
  filter: none;
  transition: filter
    ${props =>
      `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};
  object-fit: contain;
  background: ${props => props.theme.colors.secondary};

  ${props =>
    props.filmState !== 'unopened' &&
    css`
      animation: ${FadeIn} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve} forwards;
    `}

  ${props =>
    props.filmState === 'closed' &&
    css`
      filter: brightness(0.25);
      pointer-events: none;
      @media screen and (min-width: ${props.theme.breakpoints[2]}) {
        object-fit: cover;
      }
    `};
`
export const Film: React.FunctionComponent<any> = props => (
  <>
    <FilmPlayButton />
    <FilmContext.Consumer>
      {({ state }) => (
        <VideoContainer mayPlayVideo={state === 'open'}>
          {moreProps => (
            <StyledVideo
              src={props.src}
              controls={state === 'open'}
              playsInline
              filmState={state}
              {...moreProps}
            ></StyledVideo>
          )}
        </VideoContainer>
      )}
    </FilmContext.Consumer>
  </>
)
