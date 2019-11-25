import { css } from 'styled-components'
import { positionData } from '../../../../interfaces/positionData'
import { styled } from '../../../../theme'

type LightboxImageProps = {
  positionData: positionData
  open: boolean
  index: number
  fallback: string
}

export const LightboxImage = styled.img<LightboxImageProps>`
  position: fixed;
  top: ${props => (props.positionData ? props.positionData.y : '0')}px;
  left: ${props => (props.positionData ? props.positionData.x : '0')}px;
  width: ${props => (props.positionData ? props.positionData.width : '0')}px;
  height: ${props => (props.positionData ? props.positionData.height : '0')}px;
  object-fit: contain;
  background: url(${props => props.fallback}) no-repeat center/contain;

  ${props =>
    typeof props.index !== 'undefined'
      ? css`
          transition: all
              ${`${props.theme.animation.timing[1]} ${props.theme.animation.curve}`},
            opacity 0s;
        `
      : css`
          pointer-events: none;
          opacity: 0;
        `}

  ${props =>
    props.open &&
    css`
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    `}
`
