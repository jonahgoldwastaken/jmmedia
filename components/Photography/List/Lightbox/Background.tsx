import { css } from 'styled-components'
import { styled } from '../../../../theme'

type LightboxBackgroundProps = {
  open?: boolean
}

export const LightboxBackground = styled.div<LightboxBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.colors.secondary};
  clip-path: inset(0 0 100% 0);
  transition: clip-path
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  ${props =>
    props.open &&
    css`
      clip-path: inset(0 0 0 0);
    `}
`
