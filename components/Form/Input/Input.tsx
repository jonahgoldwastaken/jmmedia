import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface InputTagProps extends BaseInputTagProps {
  type: string
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
  onKeyPress,
}) => (
  <Label>
    {label}
    <InputTag
      name={name}
      type={type}
      required={required}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value as string}
    />
  </Label>
)
