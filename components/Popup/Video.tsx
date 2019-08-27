import { styled } from '../../theme'
import ReactHtmlParser from 'react-html-parser'

type PopupVideoProps = {
  embed: string
}

const VideoContainer = styled.div`
  grid-row-end: span 1;
  grid-column-end: span 3;

  > :first-child {
    width: 100%;
    height: 100%;
  }
`

export const PopupVideo: React.FunctionComponent<PopupVideoProps> = ({
  embed,
}) => <VideoContainer>{ReactHtmlParser(embed)}</VideoContainer>
