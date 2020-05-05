import { keyframes } from 'styled-components'

export const SwipeOutRight = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
`

export const SwipeOutLeft = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 100% 0 0);
  }
`

export const SwipeOutDown = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(100% 0 0 0);
  }
`

export const SwipeOutUp = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
`
