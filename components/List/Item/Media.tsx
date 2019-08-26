import styled, { css } from 'styled-components'
import { createRef, useState } from 'react'

type ItemVideoProps = {
  src: string
  placeholder?: string
}

type StyledVideoProps = {
  active: boolean
}

export const StyledVideo = styled.video<StyledVideoProps>`
  position: relative;
  object-fit: cover;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity ${props => props.theme.timing};
  pointer-events: auto;
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  filter: brightness(0.6);
`

const VideoPlaceHolder = styled.img`
  display: block;
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  src,
  placeholder,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoElement = createRef<HTMLVideoElement>()

  const handleHover = (isHovering: boolean) => () => {
    if (isHovering) {
      videoElement.current.currentTime = 0
      videoElement.current.play()
      setIsPlaying(true)
    } else {
      videoElement.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <VideoContainer
      onMouseOver={handleHover(true)}
      onMouseOut={handleHover(false)}
    >
      <StyledVideo active={isPlaying} ref={videoElement} src={src} loop />
      {placeholder && <VideoPlaceHolder src={placeholder} />}
    </VideoContainer>
  )
}
