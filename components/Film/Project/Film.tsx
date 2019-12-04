import { useContext } from 'react'
import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
import { FadeIn } from '../../Animations'
import Video, { useVideo } from '../../Common/Video'
import { FilmContext } from './Context'
import { FilmPlayButton } from './PlayButton'

type StyledVideoProps = {
  filmState: filmState
  src: string
}

const StyledVideo = styled(Video)<StyledVideoProps>`
  position: relative;
  grid-row: 1 / span 2;
  grid-column: 1;
  opacity: 0;
  filter: none;
  transition: filter
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
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
export const Film: React.FunctionComponent<any> = props => {
  const { state } = useContext(FilmContext)
  const [playing, ref, setCanPlayVideo] = useVideo(state === 'open')

  return (
    <>
      <FilmPlayButton />
      <StyledVideo
        src={props.src}
        controls={state === 'open'}
        playsInline
        filmState={state}
        ref={ref}
        playing={playing}
        onLoadStart={() => setCanPlayVideo(false)}
        onLoadedData={() => setCanPlayVideo(true)}
      ></StyledVideo>
    </>
  )
}
