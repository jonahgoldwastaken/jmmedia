import { styled } from '../../theme'

export const ListHeading = styled.h2`
  position: sticky;
  top: 7.6rem;
  margin: 0;
  padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]} 0 0;
  width: ${props => props.theme.sizes.dynamic[0]};
  align-self: flex-start;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.primary};
`
