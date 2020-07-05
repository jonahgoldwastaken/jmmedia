import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface SelectInputTagProps extends BaseInputTagProps<'select'> {}

interface SelectInputProps extends BaseInputProps<'select'> {
  options: Array<{ name: string; value: string }>
  defaultText?: string
}

const SelectInputTag = styled.select<SelectInputTagProps>`
  ${BaseInputStyling}
  cursor: pointer;
`

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  defaultText,
  ...props
}) => (
  <Label>
    {label}
    <SelectInputTag {...props}>
      <option>{defaultText ?? 'Kies een optie'}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectInputTag>
  </Label>
)
