import styled from 'styled-components'
import { BaseRunning } from './BaseRunning'

type LinkProps = {
  colour: 'primary' | 'tertiary'
}

export const Link = styled.a<LinkProps>`
  ${BaseRunning};
  color: ${props => props.theme.colours[props.colour]};
`
