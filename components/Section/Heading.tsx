import { styled } from '../../theme'

type SectionHeadingProps = {
  light?: boolean
  alignRight?: boolean
}

export const SectionHeading = styled.h2<SectionHeadingProps>`
  margin: 0 0 ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.light ? props.theme.colours.lightText : props.theme.colours.darkText};
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
`
