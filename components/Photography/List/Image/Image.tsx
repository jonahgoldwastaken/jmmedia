import { keyframes, css } from 'styled-components'
import { styled } from '../../../../theme'
import { CurtainCloseHorizontal } from '../../../Animations'
import InviewMonitor from 'react-inview-monitor'

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
}

const loadingAnimation = keyframes`
  0% {
    top: 0%;
    height: 0%;
  }
  50% {
    top: 0%;
    height: 100%;
  }
  100% {
    top: 100%;
    height: 0%;
  }
`

const displayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const ImgContainer = styled.div<ListImageProps['photo'] & { inView?: boolean }>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;

  img {
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  ${props =>
    props.inView &&
    css`
      img {
        animation: ${displayAnimation}
          ${props =>
            `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
          forwards;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.colors.primary};
        animation: ${loadingAnimation}
          ${props =>
            `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
          forwards;
      }
    }
  `}

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
  return (
    <InviewMonitor childPropsInView={{ inView: true }} intoViewMargin="-10%">
      <ImgContainer {...photo} onClick={e => onClick(e, { photo, index })}>
        <img {...photo} />
      </ImgContainer>
    </InviewMonitor>
  )
}
