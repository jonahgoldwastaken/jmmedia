import styled from 'styled-components'

export const FooterParagraph = styled.p`
  font-size: ${props => props.theme.fontSizes[0]};
  font-family: ${props => props.theme.fonts.sans};
  color: ${props => props.theme.colours.lightText};
  text-align: center;
`
