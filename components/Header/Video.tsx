import { Video, VideoElement } from '../Common'
import { styled } from '../../theme'
import { VideoFade } from '../Animations'
import { css } from 'styled-components'

type HeaderVideoProps = {
  src: string
}

const HeaderVideoElement = styled(VideoElement)`
  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    ${props =>
      css`
        animation: ${VideoFade}
          ${props =>
            `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
          forwards;
      `}
  }
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
