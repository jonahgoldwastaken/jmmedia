import { styled } from '../../theme'

type SectionParagraphProps = {
  light?: boolean
  alignRight?: boolean
}

export const SectionParagraph = styled.p<SectionParagraphProps>`
  margin: ${props => props.theme.space[2]} 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.5;
  color: ${props =>
    props.light ? props.theme.colours.lightText : props.theme.colours.darkText};
  text-align: ${props => (props.alignRight ? 'right' : 'left')};

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: inherit;
  }
`
