import { BaseRunning } from 'components/Text'
import styled, { css } from 'styled-components'

export type BaseInputTagProps<
  Element extends React.ElementType
> = React.ComponentPropsWithoutRef<Element> & {}

export type BaseInputProps<
  Element extends React.ElementType
> = BaseInputTagProps<Element> & {
  name: string
  label: string
  bottomSpacing?: boolean
}

export const BaseInputStyling = css`
  all: unset;
  ${BaseRunning};
  display: block;
  margin-top: calc(${({ theme }) => theme.spacing[0]} / 2);
  padding: ${props => props.theme.spacing[0]};
  border: calc(${props => props.theme.spacing[0]} / 4) solid
    ${props => props.theme.colours.secondary};

  ::placeholder {
    opacity: 0.6;
  }
`

export const Label = styled.label<{ bottomSpacing?: boolean }>`
  ${BaseRunning};
  width: ${props => props.theme.widths[3]};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[2]};
  margin-bottom: ${({ theme, bottomSpacing }) =>
    bottomSpacing ? theme.spacing[3] : theme.spacing[1]};
`
