import { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { LoadingAnimater } from '../../../Common'
import { ListContext } from '../Context'
import { ImgContainer } from './Container'

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

export const ListImage: React.FunctionComponent<ListImageProps> = ({
  photo,
  index,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const imgRef = useRef<HTMLImageElement>()

  return (
    <ListContext.Consumer>
      {({ currentIndex, setState, lightboxAnimating }) => (
        <ImgContainer
          {...photo}
          loaded={imageLoaded}
          inView={inView}
          onMouseOver={() =>
            !lightboxAnimating &&
            setState({
              ref: imgRef,
            })
          }
          onClick={() =>
            setState({
              ref: imgRef,
              currentIndex: index,
            })
          }
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
