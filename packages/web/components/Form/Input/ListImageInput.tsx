import { BaseRunning } from 'components/Text'
import { useField } from 'formik'
import { useListImageUploadMutation } from 'generated/graphql'
import { ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface FileInputTagProps extends BaseInputTagProps<'input'> {}

interface FileInputProps extends BaseInputProps<'input'> {
  name: string
}

const InputImage = styled.img`
  position: relative;
  width: ${props => props.theme.widths[3]};
  border: calc(${props => props.theme.spacing[0]} / 4) solid
    ${props => props.theme.colours.secondary};
  border-top: none;
  cursor: pointer;

  @media speech {
    display: none;
  }

  + input {
    all: unset;
    display: inline-block;
    width: 0px;
    height: 0px;
  }
`

const FileInputTag = styled.input<FileInputTagProps>`
  ${BaseInputStyling}

  &::-webkit-file-upload-button {
    all: unset;
    box-sizing: border-box;
    ${BaseRunning};
    font-weight: ${props => props.theme.fontWeights[2]};
    padding: ${props => props.theme.spacing[0]};
    background: ${props => props.theme.colours.primary};
    color: ${props => props.theme.colours.tertiary};
    text-align: center;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const ListImageInput: React.FC<FileInputProps> = ({
  label,
  onChange,
  name,
}) => {
  const [mutation, { data }] = useListImageUploadMutation()
  const [{ value, onChange: _onChange, ...field }, , { setValue }] = useField({
    name,
  })

  useEffect(() => {
    if (data) setValue(data.uploadListImage)
  }, [data])

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files, validity } = e.currentTarget
    if (validity && files?.length)
      mutation({ variables: { imageFile: files[0] } })
  }

  return (
    <Label>
      {label}
      <FileInputTag
        type="file"
        onChange={onChange ? onChange : uploadFile}
        {...field}
      />
      {value && <InputImage src={value} />}
    </Label>
  )
}
