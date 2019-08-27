import { styled } from '../../theme'

export const PopupHeading = styled.h3`
  margin: ${props => props.theme.space[2]} 0 0 ${props => props.theme.space[2]};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[1]};
  grid-column-end: span 2;
`

export const PopupData = styled.p`
  margin: ${props => props.theme.space[0]} 0 ${props => props.theme.space[2]}
    ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.serif};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.primary};
  grid-column-end: span 3;
`

export const PopupDescription = styled.p`
  margin: 0 ${props => props.theme.space[2]} ${props => props.theme.space[2]};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[0]};
  grid-column: span 1;
`
