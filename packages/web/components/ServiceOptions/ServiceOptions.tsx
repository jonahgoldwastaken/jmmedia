import styled from 'styled-components'
import { ServiceOption } from './ServiceOption'

type ServiceOptionsProps = {
  options: string[]
}

const ServiceOptionsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0 0 0 ${props => props.theme.spacing[1]};
  list-style-type: disc;
`

export const ServiceOptions: React.FunctionComponent<ServiceOptionsProps> = ({
  options,
}) => {
  return (
    <ServiceOptionsList>
      {options.map(option => (
        <ServiceOption>{option}</ServiceOption>
      ))}
    </ServiceOptionsList>
  )
}
