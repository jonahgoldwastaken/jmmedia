import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface InputTagProps extends BaseInputTagProps {
  type: 'email' | 'text' | 'number' | 'password'
}

interface InputProps
  extends BaseInputProps<string, HTMLInputElement>,
    InputTagProps {}

const InputTag = styled.input<InputTagProps>`
  ${BaseInputStyling}
`

export const Input: React.FunctionComponent<InputProps> = ({
  type,
  label,
  name,
  value,
  required,
  onChange,
}) => (
  <Label>
    {label}
    <InputTag
      name={name}
      type={type}
      required={required}
      onChange={onChange}
      value={value as string}
    />
  </Label>
)
