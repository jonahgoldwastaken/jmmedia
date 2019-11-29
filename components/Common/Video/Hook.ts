import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from 'react'

export const useVideo = (
  mayPlayVideo: boolean
): [
  boolean,
  MutableRefObject<HTMLVideoElement>,
  Dispatch<SetStateAction<boolean>>
] => {
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>(false)
  const videoRef: MutableRefObject<HTMLVideoElement> = useRef()

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
