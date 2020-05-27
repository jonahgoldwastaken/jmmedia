import { keyframes } from 'styled-components'

export const RotateOutRight = keyframes`
  from {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) rotateY(-90deg);
    opacity: 0;
  }
`

export const RotateOutLeft = keyframes`
  from {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
  to {
    transform: translateX(50%) rotateY(90deg);
    opacity: 0;
  }
`

export const RotateOutDown = keyframes`
  from {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }
  to {
    transform: translateY(50%) rotateX(90deg);
    opacity: 0;
  }
`

export const RotateOutUp = keyframes`
  from {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }
  to {
    transform: translateY(-50%) rotateX(-90deg);
    opacity: 0;
  }
`
