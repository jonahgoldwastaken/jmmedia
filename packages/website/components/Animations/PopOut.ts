import { keyframes } from 'styled-components'

export const PopOutLeft = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(-25%);
    opacity: 0;
  }
`

export const PopOutRight = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(25%);
    opacity: 0;
  }
`

export const PopOutUp = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
`

export const PopOutDown = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(25%);
    opacity: 0;
  }
`
