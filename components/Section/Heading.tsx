import { styled } from '../../theme'

type SectionHeadingProps = {
  light?: boolean
}

export const SectionHeading = styled.h2<SectionHeadingProps>`
  margin: ${props => props.theme.space[2]} 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props =>
    props.light ? props.theme.colors.primary : props.theme.colors.secondary};
`
