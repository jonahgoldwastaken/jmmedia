import { useContext } from 'react'
import { css } from 'styled-components'
import { styled } from '../../../../theme'
import { ListContext } from '../Context'
import { LightboxBackground } from './Background'
import { LightboxImage } from './Image'

type LightboxProps = {
  lightboxClickHandler: () => void
  lightboxOnLoad: () => void
  lightboxOnTransitionEnd: () => void
}

type LightboxContainerProps = {
  open: boolean
}

export const LightboxContainer = styled.div<LightboxContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1001;
  cursor: zoom-out;

  ${props =>
    props.open
      ? css`
          pointer-events: auto;
        `
      : css`
          pointer-events: none;
        `}
`

export const Lightbox: React.FunctionComponent<LightboxProps> = ({
  lightboxClickHandler,
  lightboxOnLoad,
  lightboxOnTransitionEnd,
}) => {
  const { ref, currentIndex: index, lightboxOpen: open, photos } = useContext<
    ListContext
  >(ListContext)
  const positionData = () => {
    if (ref && ref.current) {
      const bounds = ref.current.getBoundingClientRect()

      return {
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      }
    }
  }

  return (
    <>
      <LightboxContainer onClickCapture={lightboxClickHandler} open={open}>
        <LightboxImage
          index={index}
          open={open}
          positionData={positionData()}
          src={photos.large[index].src}
          alt={photos.large[index].title}
          onLoad={lightboxOnLoad}
          onTransitionEnd={lightboxOnTransitionEnd}
        />
      </LightboxContainer>
      <LightboxBackground open={open} />
    </>
  )
}
