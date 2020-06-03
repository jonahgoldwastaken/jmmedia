import styled from 'styled-components'
import { BaseHeading } from './BaseHeading'

export const HeadingTwo = styled(BaseHeading).attrs({ as: 'h2' })`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};
  ${props => props.noMargin && 'margin: 0'};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`
