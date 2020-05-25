import styled from 'styled-components'
import { BaseHeading, HeadingProps } from './BaseHeading'

export const HeadingThree = styled.h3<HeadingProps>`
  ${BaseHeading};
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
`
