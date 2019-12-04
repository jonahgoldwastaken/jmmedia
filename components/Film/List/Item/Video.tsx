import { useContext } from 'react'
import useMedia from 'use-media'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'
import Video, { useVideo } from '../../../Common/Video'

type ItemVideoProps = {
  video: string
}

const ItemVideoElement = styled(Video)`
  opacity: ${props => (props.playing ? '1' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  @media (pointer: coarse) {
    display: none;
  }
`

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  video,
}) => {
  const { isHovering } = useContext(LinkWrapperContext)
  const [playing, ref, setCanPlayVideo] = useVideo(isHovering)
  const isMobile = useMedia({ pointer: 'coarse' })

  return (
    <>
      {!isMobile && (
        <ItemVideoElement
          muted
          loop
          playsInline
          src={video}
          playing={playing}
          ref={ref}
          onLoadStart={() => setCanPlayVideo(false)}
          onLoadedData={() => setCanPlayVideo(true)}
        />
      )}
    </>
  )
}
