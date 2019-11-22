import { styled } from '../../../theme'
import { CurtainOpenHorizontal, CurtainCloseHorizontal } from '../../Animations'

type ImageProps = {
  index: number
  photo: {
    src: string
    width: number
    height: number
    title: string
  }
  margin: string
  top: any
  left: any
  onClick: any
}

const ImgContainer = styled.img<ImageProps['photo']>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    animation: ${CurtainOpenHorizontal}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
      forwards;
  }

  .page-transition-exit-active & {
    animation: ${CurtainCloseHorizontal}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`

export const Image: React.FunctionComponent<ImageProps> = ({
  photo,
  index,
  onClick,
}) => {
  return (
    <ImgContainer
      {...photo}
      onClick={e => {
        console.log('click!')
        onClick(e, { photo, index })
      }}
    />
  )
}
