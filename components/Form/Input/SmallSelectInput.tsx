import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputStyling,
  BaseInputTagProps,
  Label,
} from './BaseInput'
import { rgba } from 'polished'

interface SmallSelectInputTagProps extends BaseInputTagProps {}

interface SmallSelectInputProps
  extends BaseInputProps<string, HTMLSelectElement>,
    SmallSelectInputTagProps {
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

const SmallSelectInputTag = styled.select`
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
      value={value}
    >
      {options.map(option => (
        <option value={option.value}>{option.name}</option>
      ))}
    </SmallSelectInputTag>
  </SmallSelectInputLabel>
)
