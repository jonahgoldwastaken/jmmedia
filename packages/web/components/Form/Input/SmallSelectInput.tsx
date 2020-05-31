import { rgba } from 'polished'
import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'

interface SmallSelectInputTagProps extends BaseInputTagProps<'select'> {}

interface SmallSelectInputProps extends BaseInputProps<'select'> {
  options: Array<{ name: string; value: string }>
}

const SmallSelectInputLabel = styled(Label)`
  position: absolute;
  top: 0;
  left: -${props => props.theme.spacing[2]};
  margin-top: ${props => props.theme.spacing[0]};
  z-index: 1000;
  text-align: center;
  color: ${props => props.theme.colours.tertiary};
  height: ${props => props.theme.spacing[2]};
  width: ${props => props.theme.spacing[2]};
  line-height: calc(${props => props.theme.spacing[2]} - 0.1em);
  background: ${props => rgba(props.theme.colours.primary, 0.25)};
  &:hover {
    background: ${props => props.theme.colours.primary};
  }
`

const SmallSelectInputTag = styled.select<SmallSelectInputTagProps>`
  ${BaseInputStyling};
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.theme.spacing[2]};
  width: ${props => props.theme.spacing[2]};
  border: none;
  overflow: hidden;
  color: transparent;
  margin: 0;
  cursor: pointer;
  opacity: 0;
`

export const SmallSelectInput: React.FunctionComponent<SmallSelectInputProps> = ({
  label,
  name,
  onChange,
  value,
  required,
  options,
}) => (
  <SmallSelectInputLabel>
    {label}
    <SmallSelectInputTag
      required={required}
      name={name}
      onChange={onChange}
      value={value as string}
    >
      {options.map(option => (
        <option value={option.value}>{option.name}</option>
      ))}
    </SmallSelectInputTag>
  </SmallSelectInputLabel>
)
