import { css } from 'styled-components'

export type HeadingProps = {
  colour?: 'secondary' | 'tertiary'
}

export const BaseHeading = css`
  font-family: ${props => props.theme.fontFamilies.heading};
  letter-spacing: 0.03125em;
  line-height: 1.1666666667em;
  text-transform: uppercase;
`
