import { BaseRunning } from 'components/Text'
import styled from 'styled-components'

export const DesktopFooterList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  padding: 0;
  width: auto;
`

export const DesktopFooterListItem = styled.li`
  ${BaseRunning};
  display: block;
  width: auto;
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
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${({ theme }) => theme.colours.tertiary};
    }
  }
`
