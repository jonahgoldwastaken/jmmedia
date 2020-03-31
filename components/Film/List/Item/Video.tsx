import { useContext } from 'react'
import styled from 'styled-components'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'
import Video, { useVideo } from '../../../Common/Video'

type ItemVideoProps = {
  video: string
  onLoadedData: any
  poster: string
}

const ItemVideoElement = styled(Video)`
  display: static;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  width: 100%;
  height: 100%;
`

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  video,
  onLoadedData,
  poster,
}) => {
  const { isHovering } = useContext(LinkWrapperContext)
  const [playing, ref, setCanPlayVideo] = useVideo(isHovering)

  return (
    <ItemVideoElement
      muted
      loop
      playsInline
      src={video}
      poster={poster}
      playing={playing}
      ref={ref}
      onLoadStart={() => setCanPlayVideo(false)}
      onLoadedData={() => {
        setCanPlayVideo(true)
        onLoadedData()
      }}
    />
  )
}
