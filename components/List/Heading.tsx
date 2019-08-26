import styled from 'styled-components'

export const ListHeading = styled.h3`
  position: sticky;
  top: 0%;
  margin: 0;
  padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]} 0 0;
  width: 12%;
  align-self: flex-start;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.primary};
`
