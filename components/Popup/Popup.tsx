import { styled } from '../../theme'
import { PopupOverlay } from './Overlay'
import { CloseButton } from './CloseButton'
import { VideoItem } from '../../types/content'
import { PopupVideo } from './Video'
import { PopupHeading, PopupDescription, PopupData } from './Metadata'
import { keyframes } from 'styled-components'

type PopupProps = {
  closeHandler: () => void
  video?: VideoItem
}

const PopupAnimation = keyframes`
from {
  top: 100vh;
} to {
  top: 0;
}`

const StyledPopup = styled.article`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  overflow: auto;
  margin: ${props => props.theme.space[2]} 0 0;
  max-width: ${props => props.theme.sizes.static[2]};
  width: ${props => props.theme.sizes.dynamic[2]};
  max-height: calc(
    ${props => props.theme.sizes.height[3]} - ${props => props.theme.space[3]}
  );
  background: ${props => props.theme.colors.tertiary};
  display: grid;
  grid-template-rows: calc(80rem / 16 * 9) auto auto 1fr;
  grid-template-columns: repeat(3, 1fr);
  animation: ${PopupAnimation} ${props => props.theme.timing};

  @media screen and (max-width: ${props => props.theme.sizes.static[2]}) {
    grid-template-rows: calc(100vw / 16 * 9) auto auto 1fr;
  }
`

export const Popup: React.FunctionComponent<PopupProps> = ({
  children,
  closeHandler,
  video,
}) => {
  if (video) {
    return (
      <>
        <PopupOverlay closeHandler={closeHandler} />
        <StyledPopup>
          <PopupVideo embed={video.videoEmbed}></PopupVideo>
          <PopupHeading>{video.title}</PopupHeading>
          <PopupData>
            {video.type} - {video.year}
          </PopupData>
          <CloseButton closeHandler={closeHandler} />
          {video.description.map(paragraph => (
            <PopupDescription>{paragraph}</PopupDescription>
          ))}
        </StyledPopup>
      </>
    )
  } else {
    return (
      <>
        <PopupOverlay closeHandler={closeHandler} />
        <StyledPopup>
          {children}
          <CloseButton closeHandler={closeHandler} />
        </StyledPopup>
      </>
    )
  }
}
