import { styled } from '../../../../theme'
import {
  CurtainOpenHorizontal,
  CurtainCloseHorizontal,
} from '../../../Animations'
import ShimmeredImage from 'react-shimmer'
import { Loader } from './Loader'

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

const ImgContainer = styled.div<ImageProps['photo']>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
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
    >
      <ShimmeredImage src={photo.src} fallback={<Loader />} />
    </ImgContainer>
  )
}
