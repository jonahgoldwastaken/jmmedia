import { keyframes } from 'styled-components'

export const HeadingAnimation = keyframes`
  from {
    transform: translateX(-25%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`
