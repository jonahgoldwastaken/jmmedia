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
}

const SelectInputTag = styled.select<SelectInputTagProps>`
  ${BaseInputStyling}
  cursor: pointer;
`

export const SelectInput: React.FunctionComponent<SelectInputProps> = ({
  label,
  options,
  ...props
}) => (
  <Label>
    {label}
    <SelectInputTag {...props}>
      <option>Kies een optie...</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectInputTag>
  </Label>
)
