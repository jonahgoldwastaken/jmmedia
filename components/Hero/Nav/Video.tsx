import { useRef, useState } from 'react'
import { styled } from '../../../theme'
import { PageContext } from '../../Page'
import { Video } from '../../Common'
import { NavContext } from './NavContext'

type StyledVideoProps = {
  loaded: boolean
  isNavigating: boolean
}

const StyledVideo = styled(Video)<StyledVideoProps>`
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
                playsInline
                muted
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
