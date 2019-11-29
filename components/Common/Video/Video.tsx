import { MutableRefObject } from 'react'
import { styled } from '../../../theme'

type VideoProps = {
  playing: boolean
  src: string
  ref: MutableRefObject<HTMLVideoElement>
  onLoadedData: () => void
  onLoadStart: () => void
}

export const Video = styled.video<VideoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: cover;

  @media speech {
    display: none;
  }
`
