import { styled } from '../../theme'

export const FooterParagraph = styled.p`
  font-size: ${props => props.theme.fontSizes[2]};
  font-family: ${props => props.theme.fonts.sans};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`
