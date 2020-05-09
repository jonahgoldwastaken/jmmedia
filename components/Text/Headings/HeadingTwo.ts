import styled from 'styled-components'
import { BaseHeading, HeadingProps } from './BaseHeading'

type HeadingTwoProps = {
  noMargin?: boolean
}

export const HeadingTwo = styled.h2<HeadingProps & HeadingTwoProps>`
  ${BaseHeading};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};
  ${props => props.noMargin && 'margin: 0'};
`
