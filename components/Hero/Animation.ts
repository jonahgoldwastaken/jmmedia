import { keyframes, css } from 'styled-components'

export const HeroAnimation = css`
  ${keyframes`
  from {
    transform: translateY(-100%) rotateX(-90deg);
    opacity: 0;
  }
  to {
    transform: translateY(0%) rotateZ(0deg);
    opacity: 1;
  }
`}
`
