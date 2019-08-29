import { styled } from '../../theme'
import { useState, useRef, MutableRefObject, ReactElement } from 'react'

export type VideoProps = {
  mayPlayVideo: boolean
  isNavigating: boolean
  children: ({
    onCanPlayThrough,
    onLoadStart,
    loaded,
    isNavigating,
    ref,
  }: {
    onCanPlayThrough: () => void
    onLoadStart: () => void
    loaded: boolean
    isNavigating: boolean
    ref: MutableRefObject<HTMLVideoElement>
  }) => ReactElement<'video'>
}

export type VideoElementProps = {
  loaded: boolean
  isNavigating: boolean
  src: string
  onCanPlayThrough: () => void
  onLoadStart: () => void
}

export const VideoElement = styled.video<VideoElementProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: cover;
  pointer-events: none;
  opacity: ${props => (props.isNavigating ? 0 : 1)};
  filter: ${props =>
    props.isNavigating
      ? `brightness(0.25) contrast(150%)`
      : `brightness(0.25) contrast(100%)`};
  transition: opacity
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`},
    filter
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};

  @media speech {
    display: none;
  }
`

export const Video = (props: VideoProps) => {
  const { mayPlayVideo, isNavigating, children } = props
  const videoRef: MutableRefObject<HTMLVideoElement> = useRef()
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>()
  if (videoRef.current) {
    if (!mayPlayVideo || !canPlayVideo) {
      videoRef.current.pause()
    }
    if (mayPlayVideo && canPlayVideo) {
      videoRef.current.play()
    }
  }
  return children({
    loaded: mayPlayVideo && canPlayVideo,
    onLoadStart: () => setCanPlayVideo(false),
    onCanPlayThrough: () => setCanPlayVideo(true),
    isNavigating,
    ref: videoRef,
  })
}
