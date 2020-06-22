import { useField } from 'formik'
import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'
import { useMemo } from 'react'

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
  const valueIsArray = useMemo(() => typeof value !== 'string', [value])
  return (
    <Label>
      {label}
      <TextArea
        onKeyUp={onKeyUp}
        value={value && valueIsArray ? value.join('\n') : value}
        onChange={e => {
          valueIsArray
            ? setValue(e.currentTarget.value.split('\n'))
            : setValue(e.currentTarget.value)
        }}
        {...props}
        {...field}
      />
    </Label>
  )
}
