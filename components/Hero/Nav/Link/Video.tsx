import { styled } from '../../../../theme'
import { VideoContainer, VideoElement } from '../../../Common'

type LinkVideoProps = {
  mayPlayVideo: boolean
  video: string
}

const StyledVideo = styled(VideoElement)`
  position: absolute;
  opacity: ${props => (props.loaded ? '0.25' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
`

export const LinkVideo: React.FunctionComponent<LinkVideoProps> = ({
  mayPlayVideo,
  video,
}) => {
  return (
    <VideoContainer mayPlayVideo={mayPlayVideo}>
      {props => <StyledVideo playsInline muted loop src={video} {...props} />}
    </VideoContainer>
  )
}
