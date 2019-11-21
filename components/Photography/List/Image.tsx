import { styled } from '../../../theme'
import { CurtainOpenHorizontal } from '../../Animations'
import { css } from 'styled-components'

type ImageProps = {
  index: number
  photo: {
    src: string
    width: number
    height: number
    title: string
    rotation?: string
  }
  margin: string
  top: any
  left: any
  onClick: any
}

const ImageContainer = styled.div<ImageProps['photo']>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

const StyledImage = styled.img<ImageProps['photo']>`
  ${props =>
    props.rotation && props.rotation === 'left'
      ? css`
          width: ${props.height}px !important;
          height: ${props.width}px !important;
          transform: rotate(-90deg);
          object-fit: cover;
          transform-origin: center center;
        `
      : props.rotation && props.rotation === 'right'
      ? css`
          width: ${props.height}px !important;
          height: ${props.width}px !important;
          transform: rotate(90deg);
          object-fit: cover;
          transform-origin: center center;
        `
      : css`
          width: 100%;
          height: 100%;
        `}
  cursor: pointer;

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${CurtainOpenHorizontal}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
      forwards;
  }
`

export const Image: React.FunctionComponent<ImageProps> = ({
  photo,
  index,
  onClick,
}) => {
  return (
    <ImageContainer {...photo}>
      <StyledImage
        {...photo}
        onClick={e => {
          console.log('click!')
          onClick(e, { photo, index })
        }}
      />
    </ImageContainer>
  )
}
