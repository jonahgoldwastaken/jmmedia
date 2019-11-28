import { css } from 'styled-components'
import { styled } from '../../../../theme'

type LightboxBackgroundProps = {
  open?: boolean
}

export const LightboxBackground = styled.div<LightboxBackgroundProps>`
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.colors.secondary};
  transition: top
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  ${props =>
    props.open &&
    css`
      top: 0;
    `}
`
