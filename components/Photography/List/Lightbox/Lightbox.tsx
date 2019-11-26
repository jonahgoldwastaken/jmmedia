import { useContext } from 'react'
import { css } from 'styled-components'
import Photo from '../../../../interfaces/photo'
import { styled } from '../../../../theme'
import { ListContext } from '../Context'
import { LightboxBackground } from './Background'
import { LightboxImage } from './Image'

type LightboxProps = {
  photos: {
    large: Photo[]
    small: Photo[]
  }
  index: number
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
  photos,
}) => {
  const { ref, currentIndex: index, lightboxOpen: open, setState } = useContext<
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
      <LightboxContainer
        onClickCapture={() =>
          setState({ lightboxOpen: false, lightboxAnimating: true })
        }
        open={open}
      >
        <LightboxImage
          index={index}
          open={open}
          positionData={positionData()}
          src={photos.large[index] && photos.large[index].src}
          alt={photos.large[index] && photos.large[index].title}
          onLoad={() => {
            setState({
              lightboxOpen: true,
              lightboxAnimating: true,
            })
          }}
          onTransitionEnd={() =>
            !open
              ? setState({
                  currentIndex: undefined,
                  lightboxAnimating: false,
                })
              : setState({
                  lightboxAnimating: false,
                })
          }
        />
      </LightboxContainer>
      <LightboxBackground open={open} />
    </>
  )
}
