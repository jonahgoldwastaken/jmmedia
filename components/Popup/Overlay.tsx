import { styled } from '../../theme'
import { keyframes } from 'styled-components'

type PopupOverlayProps = {
  closeHandler: () => void
}

const OverlayAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.height[3]};
  background: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  animation: ${OverlayAnimation} ${props => props.theme.timing} forwards;
`

export const PopupOverlay: React.FunctionComponent<PopupOverlayProps> = ({
  children,
  closeHandler,
}) => {
  return <StyledOverlay onClick={closeHandler}>{children}</StyledOverlay>
}
