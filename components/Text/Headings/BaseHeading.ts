import { css } from 'styled-components'

export type HeadingProps = {
  colour?: 'secondary' | 'tertiary'
  centre?: boolean
}

export const BaseHeading = css`
  font-family: ${props => props.theme.fontFamilies.heading};
  letter-spacing: 0.03125em;
  line-height: 1em;
  text-transform: uppercase;
  margin: ${props => props.theme.spacing[2]} 0;
`
