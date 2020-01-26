import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react'

export const useVideo = (
  mayPlayVideo: boolean
): [
  boolean,
  MutableRefObject<HTMLVideoElement | undefined>,
  Dispatch<SetStateAction<boolean>>
] => {
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>()

  if (videoRef.current) {
    if (!mayPlayVideo || !canPlayVideo) {
      videoRef.current.pause()
    }
    if (mayPlayVideo && canPlayVideo) {
      videoRef.current.play()
    }
  }

  return [mayPlayVideo && canPlayVideo, videoRef, setCanPlayVideo]
}
