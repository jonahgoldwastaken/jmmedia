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

export const Input: React.FC<InputProps> = ({
  label,
  bottomSpacing,
  ...props
}) => (
  <Label bottomSpacing={bottomSpacing}>
    {label}
    <InputTag {...props} />
  </Label>
)
