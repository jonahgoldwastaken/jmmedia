import styled from 'styled-components'
import { BaseHeading } from './BaseHeading'

export const HeadingThree = styled(BaseHeading).attrs({ as: 'h3' })`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
`
