import { styled } from '../../../theme'
import { Video, VideoElement } from '../../Common'
import { NavContext } from './Context'

const StyledVideo = styled(VideoElement)`
  opacity: ${props => (props.loaded ? '1' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
`

export const NavVideo: React.FunctionComponent = () => {
  return (
    <NavContext.Consumer>
      {({ video, mayPlayVideo }) => {
        return (
          <Video mayPlayVideo={mayPlayVideo}>
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
  )
}
