import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface InputTagProps extends BaseInputTagProps<'input'> {}

interface InputProps extends BaseInputProps<'input'> {}

const InputTag = styled.input<InputTagProps>`
  ${BaseInputStyling}
`

export const Input: React.FunctionComponent<InputProps> = ({
  label,
  ...props
}) => (
  <Label>
    {label}
    <InputTag {...props} />
  </Label>
)
