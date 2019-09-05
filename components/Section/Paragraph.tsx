import { styled } from '../../theme'

type SectionParagraphProps = {
  light?: boolean
}

export const SectionParagraph = styled.p<SectionParagraphProps>`
  margin: ${props => props.theme.space[2]} 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.3;
  color: ${props =>
    props.light ? props.theme.colors.primary : props.theme.colors.secondary};
`
