import styled from 'styled-components'
import { BaseHeading } from './BaseHeading'

export const HeadingOne = styled(BaseHeading)`
  margin: ${props => (props.noMargin ? `0` : `${props.theme.spacing[1]} 0`)};
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.colour
      ? props.colour === 'secondary' && props.theme.colours.tertiary
      : props.theme.colours.secondary};
  ${props => props.centre && 'text-align: center'};

  img {
    margin-top: -0.65rem;
  }
`
