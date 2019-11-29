import { useContext } from 'react'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'
import Video, { useVideo } from '../../../Common/Video'

type ItemVideoProps = {
  video: string
  onLoad: any
}

const ItemVideoElement = styled(Video)`
  opacity: ${props => (props.playing ? '1' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};
`

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  video,
  onLoad,
}) => {
  const { isHovering } = useContext(LinkWrapperContext)
  const [playing, ref, setCanPlayVideo] = useVideo(isHovering)

  return (
    <ItemVideoElement
      muted
      loop
      playsInline
      src={video}
      playing={playing}
      ref={ref}
      onLoadStart={() => setCanPlayVideo(false)}
      onLoadedData={() => {
        setCanPlayVideo(true)
        onLoad()
      }}
    />
  )
}
