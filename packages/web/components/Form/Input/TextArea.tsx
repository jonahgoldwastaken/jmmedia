import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface TextAreaProps extends BaseInputTagProps {}

interface TextAreaInputProps
  extends BaseInputProps<string, HTMLTextAreaElement> {}

const TextArea = styled.textarea<TextAreaProps>`
  ${BaseInputStyling}
`

export const TextAreaInput: React.FunctionComponent<TextAreaInputProps> = ({
  required,
  value,
  onChange,
  onKeyUp,
  name,
  label,
}) => (
  <Label>
    {label}
    <TextArea
      wrap="soft"
      onKeyUp={onKeyUp}
      name={name}
      required={required}
      onChange={onChange}
      value={value as string}
    />
  </Label>
)
