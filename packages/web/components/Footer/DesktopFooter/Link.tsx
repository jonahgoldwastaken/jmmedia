import { BaseRunning } from 'components/Text'
import styled from 'styled-components'

export const DestkopFooterLink = styled.a`
  ${BaseRunning};
  display: block;
  margin: 0 0 ${({ theme }) => theme.spacing[0]};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[1]};

  &:not(:first-of-type) {
    margin: ${({ theme }) => theme.spacing[0]} 0;
  }

  &:not(:hover) {
    text-decoration: none;
  }

  color: ${({ theme }) => theme.colours.tertiary};
`
