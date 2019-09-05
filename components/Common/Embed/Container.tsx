import { styled } from '../../../theme'
import { CurtainOpenHorizontal } from '../../Animations'

export const EmbedContainer = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: ${props => props.theme.colors.secondary};
  animation: ${CurtainOpenHorizontal}
    ${props =>
      `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
    forwards;
  display: flex;
  align-items: center;
  justify-content: center;
`
