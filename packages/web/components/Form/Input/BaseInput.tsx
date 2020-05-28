import { BaseRunning } from 'components/Text'
import { ChangeEvent, KeyboardEvent } from 'react'
import styled, { css } from 'styled-components'

export interface BaseInputTagProps {
  name: string
  required?: boolean
}

export interface BaseInputProps<ValueType, Element> extends BaseInputTagProps {
  value?: ValueType
  label: string
  onChange: (event: ChangeEvent<Element>) => void
  onKeyUp?: (event: KeyboardEvent<Element>) => void
}

export const BaseInputStyling = css`
  all: unset;
  ${BaseRunning};
  display: block;
  margin-top: ${props => props.theme.spacing[0]};
  padding: ${props => props.theme.spacing[0]};
  border: calc(${props => props.theme.spacing[0]} / 4) solid
    ${props => props.theme.colours.secondary};
`

export const Label = styled.label`
  ${BaseRunning};
  width: ${props => props.theme.widths[3]};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[1]};
  margin-bottom: ${props => props.theme.spacing[2]};
`
