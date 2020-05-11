import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { BaseRunning } from '../Text'

type InputProps = {
  type: 'email' | 'text' | 'textarea' | 'number' | 'password' | 'select'
  name: string
  required?: boolean
  value: string
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}

type InputFieldProps = {
  label: string
  options?: Array<{ name: string; value: string }>
} & InputProps

const Label = styled.label`
  ${BaseRunning};
  width: ${props => props.theme.widths[3]};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[1]};
  margin-bottom: ${props => props.theme.spacing[2]};
`

const Input = styled.input<InputProps>`
  all: unset;
  ${BaseRunning};
  display: block;
  margin-top: ${props => props.theme.spacing[0]};
  padding: ${props => props.theme.spacing[0]};
  border: calc(${props => props.theme.spacing[0]} / 4) solid
    ${props => props.theme.colours.secondary};

  ${props => (props.type !== 'select' ? 'cursor: text' : 'cursor: pointer')};
`

export const InputField: React.FunctionComponent<InputFieldProps> = ({
  type,
  label,
  name,
  value,
  required,
  onChange,
  options,
}) => {
  if (type === 'select')
    return (
      <Label>
        {label}
        <Input
          as="select"
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option>Kies een optie...</option>
          {options.map(option => (
            <option value={option.value}>{option.name}</option>
          ))}
        </Input>
      </Label>
    )
  else if (type === 'textarea')
    return (
      <Label>
        {label}
        <Input
          as="textarea"
          type={type}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
        />
      </Label>
    )
  else
    return (
      <Label>
        {label}
        <Input
          name={name}
          type={type}
          required={required}
          onChange={onChange}
          value={value}
        />
      </Label>
    )
}
