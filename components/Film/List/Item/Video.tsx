import { useContext, useEffect } from 'react'
import useMedia from 'use-media'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link/Wrapper'
import Video, { useVideo } from '../../../Common/Video'

type ItemVideoProps = {
  video: string
  onLoadedData: any
}

const ItemVideoElement = styled(Video)`
  @media (pointer: coarse) {
    display: none;
  }
`

export const ItemVideo: React.FunctionComponent<ItemVideoProps> = ({
  video,
  onLoadedData,
}) => {
  const { isHovering } = useContext(LinkWrapperContext)
  const [playing, ref, setCanPlayVideo] = useVideo(isHovering)
  const isMobile = useMedia({ pointer: 'coarse' })

  useEffect(() => {
    if (isMobile) onLoadedData()
  }, [isMobile])

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
            onLoadedData(e)
          }}
        />
      )}
    </>
  )
}
