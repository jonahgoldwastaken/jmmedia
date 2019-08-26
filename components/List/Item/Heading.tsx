import styled from 'styled-components'

export const ItemHeading = styled.h3`
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 10;
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: ${props => props.theme.fontWeights[0]};
  margin-left: ${props => props.theme.space[2]};
`
