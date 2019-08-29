import { keyframes } from 'styled-components'

export const SlideOutLeft = keyframes`
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
`

export const SlideOutRight = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`

export const SlideOutUp = keyframes`
  from {
    bottom: 0vh;
  }
  to {
    bottom: 100vh;
  }
`

export const SlideOutDown = keyframes`
  from {
    top: 0vh;
  }
  to {
    top: 100vh;
  }
`
