import { keyframes } from 'styled-components'

export const CurtainCloseVertical = keyframes`
  from {
    top: 0%;
    height: 100%;
  }
  to {
    top: 50%;
    height: 0%;
  }
`

export const CurtainCloseHorizontal = keyframes`
  from {
    left: 0%;
    width: 100%;
  }
  to {
    left: 50%;
    width: 0%; 
}
`
