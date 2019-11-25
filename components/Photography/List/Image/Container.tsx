import styled, { css } from 'styled-components'
import { SwipeInRight, SwipeOutRight } from '../../../Animations'

type ImgContainerProps = {
  inView: boolean
  loaded: boolean
  src: string
  width: number
  height: number
  title: string
  active: boolean
}

export const ImgContainer = styled.div<ImgContainerProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: zoom-in;

  img {
    position: relative;
    z-index: 10;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props =>
    props.inView &&
    props.loaded &&
    css`
      img {
        opacity: ${props.active ? '0' : '1'};
        animation: ${SwipeInRight}
          ${props =>
            `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
          forwards;
      }
    `};

  .page-transition-exit-active & {
    animation: ${SwipeOutRight}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`
