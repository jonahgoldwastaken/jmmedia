import { keyframes } from 'styled-components'

export const PopInRight = keyframes`
  from {
    transform: translateX(-25%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`

export const PopInLeft = keyframes`
  from {
    transform: translateX(25%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`

export const PopInUp = keyframes`
  from {
    transform: translateY(-25%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`

export const PopInDown = keyframes`
  from {
    transform: translateY(25%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`
