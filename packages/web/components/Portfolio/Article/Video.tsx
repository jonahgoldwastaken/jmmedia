import Vimeo from '@u-wave/react-vimeo'
import { MouseEvent } from 'react'
import styled, { useTheme } from 'styled-components'

type ArticleVideoProps = {
  id: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

const VideoContainer = styled.div`
  display: block;
  width: 100%;
  > * {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const ArticleVideo: React.FunctionComponent<ArticleVideoProps> = ({
  id,
  onClick,
}) => {
  const {
    colours: { primary },
  } = useTheme()
  return (
    <VideoContainer onClick={onClick}>
      <Vimeo
        video={id}
        responsive={true}
        color={primary.slice(1)}
        onClick={onClick}
      />
    </VideoContainer>
  )
}
