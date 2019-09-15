import { keyframes } from 'styled-components'

export const CurtainCloseHorizontal = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 50% 0 50%);
  }
`

export const CurtainCloseVertical = keyframes`
  from {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(50% 0% 50% 0);
}
`
