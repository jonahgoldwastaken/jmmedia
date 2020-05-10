import styled from 'styled-components'
import { BaseRunning } from '../Text'
import { ChangeEvent } from 'react'

type InputFieldProps = {
  type: 'email' | 'text' | 'number' | 'password'
  label: string
  name: string
  required?: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Label = styled.label`
  ${BaseRunning};
  width: ${props => props.theme.widths[3]};
  display: flex;
  flex-flow: row nowrap;
  font-weight: ${props => props.theme.fontWeights[1]};
  margin-bottom: ${props => props.theme.spacing[1]};
`

const Input = styled.input`
  all: unset;
  ${BaseRunning};
  display: block;
  margin-left: auto;
  border: 2px solid ${props => props.theme.colours.primary};
  cursor: text;
`

export const InputField: React.FunctionComponent<InputFieldProps> = ({
  type,
  label,
  required,
  onChange,
}) => (
  <Label>
    <span>{label}:</span>
    <Input type={type} required={required} onChange={onChange} />
  </Label>
)
