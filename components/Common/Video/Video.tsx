import { MutableRefObject } from 'react'
import { styled } from '../../../theme'

type VideoProps = {
  playing: boolean
  src: string
  ref: MutableRefObject<HTMLVideoElement | undefined>
  onLoadedData: (e?: any) => void
  onLoadStart: (e?: any) => void
  poster?: string
}

export const Video = styled.video<VideoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: cover;
  filter: brightness(1);
  transition: filter
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  &:not(:hover) {
    filter: brightness(0.75);
  }

  @media speech {
    display: none;
  }
`
