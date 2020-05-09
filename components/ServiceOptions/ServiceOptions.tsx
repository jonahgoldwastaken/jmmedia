import styled from 'styled-components'
import { ServiceOption } from './ServiceOption'

const ServiceOptionsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0 0 0 ${props => props.theme.spacing[1]};
  list-style-type: disc;
`

export const ServiceOptions: React.FunctionComponent = () => {
  return (
    <ServiceOptionsList>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
      <ServiceOption>Je oma</ServiceOption>
    </ServiceOptionsList>
  )
}
