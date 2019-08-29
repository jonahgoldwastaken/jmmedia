import { Video, VideoElement } from '../Common'
import { styled } from '../../theme'
import { VideoFade } from '../Animations'
import { css } from 'styled-components'

type HeaderVideoProps = {
  src: string
}

const HeaderVideoElement = styled(VideoElement)`
  opacity: 0;
  ${props =>
    props.loaded &&
    css`
      animation: ${VideoFade}
        ${props =>
          `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
        forwards;
    `}
`

export const HeaderVideo: React.FunctionComponent<HeaderVideoProps> = ({
  src,
}) => (
  <Video mayPlayVideo>
    {props => (
      <HeaderVideoElement
        autoPlay
        muted
        loop
        playsInline
        src={src}
        {...props}
      />
    )}
  </Video>
)
