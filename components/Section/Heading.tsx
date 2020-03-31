import styled from 'styled-components'

export const SectionHeading = styled.h2`
  margin: 0 0 ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props => props.theme.colours.lightText};
`
