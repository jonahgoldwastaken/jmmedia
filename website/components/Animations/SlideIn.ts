import { keyframes } from 'styled-components'

export const SlideInRight = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
`

export const SlideInLeft = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
`

export const SlideInDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0vh;
  }
`

export const SlideInUp = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 0vh;
  }
`
