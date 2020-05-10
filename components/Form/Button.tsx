import styled from 'styled-components'

import { BaseRunning } from '../Text'

export const Button = styled.button`
  all: unset;
  ${BaseRunning};
  font-weight: ${props => props.theme.fontWeights[2]};
  padding: ${props => props.theme.spacing[0]};
  background: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.tertiary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
