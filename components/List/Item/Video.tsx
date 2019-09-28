import { LinkWrapperContext } from '../../Common/LinkWrapper'
import { VideoContainer, VideoElement } from '../../Common'

type ItemVideoProps = {
  video: string
}

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  video,
}) => (
  <LinkWrapperContext.Consumer>
    {({ isHovering }) => (
      <VideoContainer mayPlayVideo={isHovering}>
        {props => (
          <VideoElement muted loop playsInline src={video} {...props} />
        )}
      </VideoContainer>
    )}
  </LinkWrapperContext.Consumer>
)
