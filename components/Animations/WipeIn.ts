import { keyframes } from 'styled-components'

export const WipeInDown = keyframes`
  0% {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 0%;
  }
  50% {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
  }
  100% {
    top: 100%;
    left: 0%;
    width: 0%;
    height: 0%;
  }
`
