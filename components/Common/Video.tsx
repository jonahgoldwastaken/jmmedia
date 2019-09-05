import { MutableRefObject, ReactElement, useRef, useState } from 'react'
import { styled } from '../../theme'

type VideoContainerChildrenProps = {
  onCanPlayThrough: () => void
  onLoadStart: () => void
  loaded: boolean
  ref: MutableRefObject<HTMLVideoElement>
}

export type VideoContainerProps = {
  mayPlayVideo: boolean
  children: ({
    onCanPlayThrough,
    onLoadStart,
    loaded,
    ref,
  }: VideoContainerChildrenProps) => ReactElement<'video'>
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
  filter: brightness(0.25);

  @media speech {
    display: none;
  }

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

export const VideoContainer = (props: VideoContainerProps) => {
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
