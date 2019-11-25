import { keyframes, css } from 'styled-components'
import { styled } from '../../../../theme'
import { CurtainCloseHorizontal, SwipeInRight } from '../../../Animations'
import InviewMonitor from 'react-inview-monitor'
import { useState } from 'react'
import { LoadingAnimater } from '../../../Common'

type ListImageProps = {
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
  loaded: boolean
}

type ImgContainerProps = {
  inView?: boolean
  loaded: boolean
}

const ImgContainer = styled.div<ListImageProps['photo'] & ImgContainerProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;

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
        opacity: 1;
        animation: ${SwipeInRight}
          ${props =>
            `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
          forwards;
      }
    `};

  .page-transition-exit-active & {
    animation: ${CurtainCloseHorizontal}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`
export const ListImage: React.FunctionComponent<ListImageProps> = ({
  photo,
  index,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <InviewMonitor childPropsInView={{ inView: true }} intoViewMargin="-10%">
      <ImgContainer
        {...photo}
        loaded={imageLoaded}
        onClick={e => onClick(e, { photo, index })}
      >
        <img {...photo} onLoad={() => setImageLoaded(true)} />
        <LoadingAnimater loaded={imageLoaded} />
      </ImgContainer>
    </InviewMonitor>
  )
}
