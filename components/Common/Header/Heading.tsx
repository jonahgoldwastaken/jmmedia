import styled from 'styled-components'
import { Heading } from '..'

export const HeaderHeading = styled(Heading)`
  margin: 0;
  padding: 0;
  z-index: 2;
  color: ${props => props.theme.colours.lightText};
`
