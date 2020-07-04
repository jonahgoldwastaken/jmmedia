import styled from 'styled-components'
import { SelectInput } from 'components/Form'

export const ContactTypeSelect = styled(SelectInput)`
  border: none;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
`
