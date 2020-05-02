import styled from 'styled-components'
import { BaseHeading, HeadingProps } from './BaseHeading'

export const HeadingOne = styled.h1<HeadingProps>`
  ${BaseHeading};
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.colour
      ? props.theme.colours[props.colour]
      : props.theme.colours.secondary};
`
