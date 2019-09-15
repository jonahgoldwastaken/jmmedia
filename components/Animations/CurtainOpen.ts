import { keyframes } from 'styled-components'

export const CurtainOpenVertical = keyframes`
  from {
    clip-path: inset(50% 0 50% 0);
  }
  to {
    clip-path: inset(0);
  }
`

export const CurtainOpenHorizontal = keyframes`
  from {
    clip-path: inset(0 50% 0 50%);
  }
  to {
    clip-path: inset(0);
  }
`
