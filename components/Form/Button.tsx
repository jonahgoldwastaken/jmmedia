import styled, { css } from 'styled-components'
import { BaseRunning } from 'components/Text'

type ButtonProps = {
  small?: boolean
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  box-sizing: border-box;
  ${BaseRunning};
  font-weight: ${props => props.theme.fontWeights[2]};
  padding: ${props => props.theme.spacing[0]};
  background: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.tertiary};
  width: 100%;
  text-align: center;

  ${props =>
    props.small &&
    css`
      font-size: ${props => props.theme.fontSizes[0]};
      padding: calc(${props => props.theme.spacing[0]} / 2);
    `}

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
