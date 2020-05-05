import { keyframes } from 'styled-components'

export const RotateInLeft = keyframes`
  from {
    transform: translateX(-50%) rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`

export const RotateInRight = keyframes`
  from {
    transform: translateX(50%) rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`

export const RotateInUp = keyframes`
  from {
    transform: translateY(50%) rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }
`

export const RotateInDown = keyframes`
  from {
    transform: translateY(-50%) rotateX(-90deg);
    opacity: 0;
  }
  to {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }
`
