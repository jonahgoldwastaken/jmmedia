import { keyframes } from 'styled-components'

export const CurtainOpenVertical = keyframes`
  from {
    top: 50%;
    height: 0%;
  }
  to {
    top: 0%;
    height: 100%;
  }
`

export const CurtainOpenHorizontal = keyframes`
  from {
    left: 50%;
    width: 0%; 
  }
  to {
    left: 0%;
    width: 100%;
}
`
