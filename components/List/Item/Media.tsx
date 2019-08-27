import { css } from 'styled-components'
import { createRef, useState } from 'react'
import { styled } from '../../../theme'

type ItemVideoProps = {
  src: string
  placeholder?: string
}

type StyledVideoProps = {
  playing: boolean
}

export const StyledVideo = styled.video<StyledVideoProps>`
  position: relative;
  object-fit: cover;
  z-index: 1;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  opacity: 0;
  transition: opacity ${props => props.theme.timing};
  pointer-events: auto;

  ${props =>
    props.playing &&
    css`
      opacity: 1;
    `}
`

const VideoContainer = styled.div`
  position: relative;
  height: ${props => props.theme.sizes.dynamic[2]};
  overflow: hidden;
  filter: brightness(0.75);
`

const VideoPlaceHolder = styled.img`
  display: block;
  position: absolute;
  top: 0;
  object-fit: cover;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  pointer-events: none;

  @media print, speech {
    display: none;
  }
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
      <StyledVideo
        playing={isPlaying}
        ref={videoElement}
        src={src}
        loop
        placeholder={placeholder}
      />
      {placeholder && <VideoPlaceHolder src={placeholder} />}
    </VideoContainer>
  )
}
