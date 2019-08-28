import { styled } from '../../../theme'
import { NavContext } from './NavContext'
import { useState, useRef } from 'react'
import { PageContext } from '../../Page'

type StyledVideoProps = {
  loaded: boolean
  isNavigating: boolean
}

const StyledVideo = styled.video<StyledVideoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
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
  pointer-events: none;

  @media speech {
    display: none;
  }
`

export const NavVideo = () => {
  const videoRef: React.MutableRefObject<HTMLVideoElement> = useRef()
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>()

  return (
    <PageContext.Consumer>
      {({ isNavigating }) => (
        <NavContext.Consumer>
          {({ video, mayPlayVideo }) => {
            if (videoRef.current) {
              if (!mayPlayVideo || !canPlayVideo) {
                videoRef.current.pause()
              }
              if (mayPlayVideo && canPlayVideo) {
                videoRef.current.play()
              }
            }

            return (
              <StyledVideo
                ref={videoRef}
                onCanPlay={() => setCanPlayVideo(true)}
                onLoadStart={() => setCanPlayVideo(false)}
                loaded={mayPlayVideo && canPlayVideo}
                isNavigating={isNavigating}
                autoPlay
                loop
                src={video}
              />
            )
          }}
        </NavContext.Consumer>
      )}
    </PageContext.Consumer>
  )
}
