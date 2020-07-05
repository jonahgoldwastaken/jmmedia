import styled from 'styled-components'
import {
  BaseInputProps,
  BaseInputTagProps,
  BaseInputStyling,
  Label,
} from './BaseInput'

interface ContactTypeSelectTagProps extends BaseInputTagProps<'select'> {}

interface ContactTypeSelectProps extends BaseInputProps<'select'> {}

const ContactTypeSelectTag = styled.select<ContactTypeSelectTagProps>`
  ${BaseInputStyling}
  cursor: pointer;
`

const ContactTypeLabel = styled(Label)`
  width: ${({ theme }) => theme.widths[1]};
  margin-left: auto;
  margin-right: auto;
`

export const ContactTypeSelect: React.FC<ContactTypeSelectProps> = ({
  label,
  ...props
}) => (
  <ContactTypeLabel bottomSpacing>
    {label}
    <ContactTypeSelectTag {...props}>
      <option>Kies een optie</option>
      <option value="message">Ik wil een bericht sturen</option>
      <option value="request">
        Ik wil (potentieel) samenwerken aan een project
      </option>
    </ContactTypeSelectTag>
  </ContactTypeLabel>
)
