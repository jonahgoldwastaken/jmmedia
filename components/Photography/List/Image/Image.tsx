import { useRef, useState, RefObject } from 'react'
import { useInView } from 'react-intersection-observer'
import { LoadingAnimater } from '../../../Common'
import { ListContext } from '../Context'
import { ImgContainer } from './Container'

export type ListImageCallbacks = {
  setRef: (ref: RefObject<any>) => void
  clickHandler: (ref: RefObject<any>, index: number) => void
}

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
} & ListImageCallbacks

export const ListImage: React.FunctionComponent<ListImageProps> = ({
  photo,
  index,
  setRef,
  clickHandler,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const imgRef = useRef<HTMLImageElement>()

  return (
    <ListContext.Consumer>
      {({ currentIndex, lightboxAnimating }) => (
        <ImgContainer
          {...photo}
          loaded={imageLoaded}
          inView={inView}
          onMouseOver={() => !lightboxAnimating && setRef(imgRef)}
          onClick={() => clickHandler(imgRef, index)}
          ref={inViewRef}
          active={lightboxAnimating && currentIndex === index}
        >
          <img {...photo} ref={imgRef} onLoad={() => setImageLoaded(true)} />
          <LoadingAnimater loaded={imageLoaded} />
        </ImgContainer>
      )}
    </ListContext.Consumer>
  )
}
