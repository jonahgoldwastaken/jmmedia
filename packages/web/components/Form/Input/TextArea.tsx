import { useField } from 'formik'
import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface TextAreaProps extends BaseInputTagProps<'textarea'> {}

interface TextAreaInputProps extends BaseInputProps<'textarea'> {}

const TextArea = styled.textarea<TextAreaProps>`
  ${BaseInputStyling}
`

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  onKeyUp,
  name,
  label,
  ...props
}) => {
  const [{ value, onChange: _onChange, ...field }, , { setValue }] = useField({
    name,
  })
  return (
    <Label>
      {label}
      <TextArea
        onKeyUp={onKeyUp}
        value={value ? value.join('\n') : value}
        onChange={e => {
          setValue(e.currentTarget.value.split('\n'))
        }}
        {...props}
        {...field}
      />
    </Label>
  )
}
