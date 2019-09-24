import { css } from 'styled-components'
import { styled } from '../../../theme'
import { FadeIn, FadeOut } from '../../Animations'
import { FilmContext } from './Context'
import { VideoElement, VideoContainer } from '../../Common'
import { FilmPlayButton } from './PlayButton'

type StyledVideoProps = {
  filmState: 'unopened' | 'open' | 'closed'
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
              controls
              filmState={state}
              {...moreProps}
            ></StyledVideo>
          )}
        </VideoContainer>
      )}
    </FilmContext.Consumer>
  </>
)
