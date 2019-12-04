import { useContext } from 'react'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link'
import Video, { useVideo } from '../../../Common/Video'
import useMedia from 'use-media'

type LinkVideoProps = {
  video: string
}

const StyledVideo = styled(Video)`
  position: absolute;
  opacity: ${props => (props.playing ? '0.25' : '0')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
`

export const LinkVideo: React.FunctionComponent<LinkVideoProps> = ({
  video,
}) => {
  const { isHovering } = useContext(LinkWrapperContext)
  const [playing, ref, setCanPlayVideo] = useVideo(isHovering)
  const isMobile = useMedia({ pointer: 'coarse' })

  return (
    <>
      {!isMobile && (
        <StyledVideo
          playsInline
          muted
          loop
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
