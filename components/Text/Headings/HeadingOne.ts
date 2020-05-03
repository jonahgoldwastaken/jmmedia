import styled from 'styled-components'
import { BaseHeading, HeadingProps } from './BaseHeading'

export const HeadingOne = styled.h1<HeadingProps>`
  ${BaseHeading};
  margin: ${props => props.theme.spacing[1]} 0;
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.colour
      ? props.theme.colours[props.colour]
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};

  img {
    margin-top: -0.65rem;
  }
`
