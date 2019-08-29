import { styled } from '../../../theme'
import { PageContext } from '../../Page'
import { Video, VideoElement } from '../../Common'
import { NavContext } from './NavContext'

const StyledVideo = styled(VideoElement)`
  filter: ${props =>
    props.isNavigating
      ? `brightness(0.25) contrast(150%)`
      : props.loaded
      ? `brightness(0.25) contrast(100%)`
      : `brightness(0.25) contrast(150%)`};
  opacity: ${props => (props.isNavigating ? '0' : props.loaded ? '1' : '0')};
  transition: all
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
`

export const NavVideo: React.FunctionComponent = () => {
  return (
    <PageContext.Consumer>
      {({ isNavigating }) => (
        <NavContext.Consumer>
          {({ video, mayPlayVideo }) => {
            return (
              <Video isNavigating={isNavigating} mayPlayVideo={mayPlayVideo}>
                {props => (
                  <StyledVideo
                    autoPlay
                    playsInline
                    muted
                    loop
                    src={video}
                    {...props}
                  />
                )}
              </Video>
            )
          }}
        </NavContext.Consumer>
      )}
    </PageContext.Consumer>
  )
}
