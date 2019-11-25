import { useState } from 'react'
import InviewMonitor from 'react-inview-monitor'
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
