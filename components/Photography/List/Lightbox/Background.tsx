import styled from 'styled-components'
import { SlideInDown } from '../../../Animations'

type LightboxBackgroundProps = {
  closing?: boolean
}

export const LightboxBackground = styled.div<LightboxBackgroundProps>`
  position: fixed;
  top: ${props => (props.closing ? '-100%' : '0')};
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.colours.darkText};
  transition: top
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  animation: ${SlideInDown}
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
`
