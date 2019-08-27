import { styled } from '../../../theme'

export const ItemHeading = styled.h3`
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 10;
  text-transform: uppercase;
  text-shadow: ${props => props.theme.textShadow};
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: ${props => props.theme.fontWeights[0]};
  margin-left: ${props => props.theme.space[2]};
`
