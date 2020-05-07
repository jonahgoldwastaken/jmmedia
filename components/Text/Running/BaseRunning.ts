import { css } from 'styled-components'

export const BaseRunning = css`
  font-family: ${props => props.theme.fontFamilies.running};
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: ${props => props.theme.fontWeights[0]};
  line-height: 1.3125em;
  letter-spacing: 0.01875em;
`
