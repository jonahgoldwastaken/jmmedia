import { styled } from '../../theme'
import { useState, useRef, MutableRefObject, ReactElement } from 'react'

export type VideoProps = {
  mayPlayVideo: boolean
  children: ({
    onCanPlayThrough,
    onLoadStart,
    loaded,
    ref,
  }: {
    onCanPlayThrough: () => void
    onLoadStart: () => void
    loaded: boolean
    ref: MutableRefObject<HTMLVideoElement>
  }) => ReactElement<'video'>
}

export type VideoElementProps = {
  loaded: boolean
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
  filter: brightness(0.25) contrast(100%);

  @media speech {
    display: none;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active & {
    filter: brightness(0.25) contrast(150%);
    opacity: 0;
    transition: opacity
        ${props =>
          `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`},
      filter
        ${props =>
          `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};
  }
`

export const Video = (props: VideoProps) => {
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>(false)
  const videoRef: MutableRefObject<HTMLVideoElement> = useRef()
  const { mayPlayVideo, children } = props

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
    ref: videoRef,
  })
}
