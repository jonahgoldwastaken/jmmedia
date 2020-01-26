import { useContext } from 'react'
import { css } from 'styled-components'
import { filmState } from '../../../interfaces/filmState'
import { styled } from '../../../theme'
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
  object-fit: contain;
  background: ${props => props.theme.colours.darkText};
  filter: brightness(1) !important;

  ${props =>
    (props.filmState === 'closed' || props.filmState === 'unopened') &&
    css`
      filter: brightness(0.5) !important;
      pointer-events: none;
      @media screen and (min-width: ${props.theme.breakpoints[2]}) {
        object-fit: cover;
      }
    `};
`
export const Film: React.FunctionComponent<any> = ({ src, poster }) => {
  const { state } = useContext(FilmContext)
  const [playing, ref, setCanPlayVideo] = useVideo(state === 'open')

  return (
    <>
      <FilmPlayButton />
      <StyledVideo
        src={src}
        controls={state === 'open'}
        playsInline
        filmState={state}
        ref={ref}
        poster={poster}
        playing={playing}
        onLoadStart={() => setCanPlayVideo(false)}
        onLoadedData={() => setCanPlayVideo(true)}
      ></StyledVideo>
    </>
  )
}
