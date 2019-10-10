import { LinkWrapperContext } from '../../Common/LinkWrapper'
import { VideoContainer, VideoElement } from '../../Common'

type ItemVideoProps = {
  video: string
  placeholder: string
}

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  placeholder,
  video,
}) => (
  <LinkWrapperContext.Consumer>
    {({ isHovering }) => (
      <VideoContainer mayPlayVideo={isHovering}>
        {props => (
          <VideoElement
            placeholder={placeholder}
            muted
            loop
            playsInline
            src={video}
            {...props}
          />
        )}
      </VideoContainer>
    )}
  </LinkWrapperContext.Consumer>
)
