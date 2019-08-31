import { keyframes } from 'styled-components'

export const ZoomOut = keyframes`
  from {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100vh;
  }
  to {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
  }
`
