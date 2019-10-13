import { styled } from '../../../../theme'
import { VideoContainer, VideoElement } from '../../../Common'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'

type LinkVideoProps = {
  video: string
}

const StyledVideo = styled(VideoElement)`
  position: absolute;
  opacity: ${props => (props.playing ? '0.25' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  .page-transition-exit & {
    opacity: 1;
  }

  .page-transition-exit-active & {
    opacity: 0;
    transition: opacity
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};
  }
`

export const LinkVideo: React.FunctionComponent<LinkVideoProps> = ({
  video,
}) => {
  return (
    <LinkWrapperContext.Consumer>
      {({ isHovering }) => (
        <VideoContainer mayPlayVideo={isHovering}>
          {props => (
            <StyledVideo playsInline muted loop src={video} {...props} />
          )}
        </VideoContainer>
      )}
    </LinkWrapperContext.Consumer>
  )
}
