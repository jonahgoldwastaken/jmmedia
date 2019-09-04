import { darken, lighten } from 'polished'
import { styled } from '../../theme'

type ContentSectionProps = {
  light?: boolean
  dark?: boolean
  route: string
}

export const ContentSection = styled.section<ContentSectionProps>`
  width: 100%;
  background: ${props =>
    props.light
      ? lighten(0.1, props.theme.pageColours[props.route])
      : props.dark
      ? darken(0.1, props.theme.pageColours[props.route])
      : props.theme.pageColours[props.route]};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`
