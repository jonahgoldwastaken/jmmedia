import { styled } from '../../../theme'
import { Video, VideoElement } from '../../Common'
import { NavContext } from './NavContext'

const StyledVideo = styled(VideoElement)`
  filter: ${props =>
    props.loaded
      ? 'brightness(0.25) contrast(100%)'
      : 'brightness(0.25) contrast(150%)'};
  opacity: ${props => (props.loaded ? '1' : '0')};
  transition: all
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  .page-transition-exit-active {
    opacity: 0;
    filter: brightness(0.25) contrast(150%);
    transition: all
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  }
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
