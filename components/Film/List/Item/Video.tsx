import { useContext, useEffect } from 'react'
import useMedia from 'use-media'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'
import Video, { useVideo } from '../../../Common/Video'

type ItemVideoProps = {
  video: string
}

const ItemVideoElement = styled(Video)`
  display: static;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  width: 100%;
  height: 100%;

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
          onLoadedData={e => {
            setCanPlayVideo(true)
          }}
        />
      )}
    </>
  )
}
