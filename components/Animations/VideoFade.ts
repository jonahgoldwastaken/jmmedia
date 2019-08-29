import { keyframes } from 'styled-components'

export const VideoFade = keyframes`
  from {
    opacity: 0;
    filter: brightness(0.25) contrast(150%);
  }
  to {
    opacity: 1;
    filter: brightness(0.25) contrast(100%);
  }
`
