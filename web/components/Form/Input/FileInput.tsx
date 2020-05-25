import { BaseRunning } from 'components/Text'
import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface FileInputTagProps extends BaseInputTagProps {}

interface FileInputProps extends BaseInputProps<string, HTMLInputElement> {}

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

export const FileInput: React.FunctionComponent<FileInputProps> = ({
  onChange,
  label,
  name,
  value,
  required,
}) => {
  return (
    <Label>
      {label}
      <FileInputTag
        type="file"
        name={name}
        required={required}
        onChange={onChange}
      />
      {value && <InputImage src={value} />}
    </Label>
  )
}
