import styled from 'styled-components'
import { BaseHeading, HeadingProps } from './BaseHeading'

export const HeadingTwo = styled.h2<HeadingProps>`
  ${BaseHeading};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.colour
      ? props.theme.colours[props.colour]
      : props.theme.colours.secondary};
`
