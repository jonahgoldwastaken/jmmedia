import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { LoadingAnimater } from '../../../Common'
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
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <ImgContainer
      {...photo}
      loaded={imageLoaded}
      inView={inView}
      onClick={e => onClick(e, { photo, index })}
      ref={ref}
    >
      <img {...photo} onLoad={() => setImageLoaded(true)} />
      <LoadingAnimater loaded={imageLoaded} />
    </ImgContainer>
  )
}
