import { Heading } from '..'
import styled from 'styled-components'

type HeaderHeadingProps = {
  dark?: boolean
}

export const HeaderHeading = styled(Heading)<HeaderHeadingProps>`
  z-index: 2;
  margin: ${props => props.theme.space[2]};
  color: ${props =>
    props.dark ? props.theme.colours.darkText : props.theme.colours.lightText};

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin: ${props => props.theme.space[3]};
  }
`
