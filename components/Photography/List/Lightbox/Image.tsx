import { css, keyframes } from 'styled-components'
import { positionData } from '../../../../interfaces/positionData'
import { styled } from '../../../../theme'

type LightboxImageProps = {
  positionData: positionData
  open: boolean
  index: number
  small?: boolean
  animating?: boolean
}

const borderFade = keyframes`
  to: {
    border-width: 0;
  }
`

export const LightboxImage = styled.img<LightboxImageProps>`
  position: fixed;
  top: ${props => (props.positionData ? props.positionData.y : '0')}px;
  left: ${props => (props.positionData ? props.positionData.x : '0')}px;
  width: ${props => (props.positionData ? props.positionData.width : '0')}px;
  height: ${props => (props.positionData ? props.positionData.height : '0')}px;
  object-fit: contain;

  ${props =>
    typeof props.index !== 'undefined'
      ? css`
          transition: all
              ${`${props.theme.animation.timing[1]} ${props.theme.animation.curve}`},
            opacity 0s;
        `
      : css`
          opacity: 0;
        `}

  ${props =>
    props.open &&
    css`
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      border-width: 0px;
    `}

    ${props =>
      props.small &&
      css`
        display: ${(props.open || props.animating) && 'none'};
        border: ${props => props.theme.borderWidth} solid
          ${props => props.theme.colours.primary};
        animation: ${borderFade} ${props.theme.animation[1]}
          ${props.theme.animation.curve} forwards;

        @media print and speech {
          display: none;
        }
      `}
`
