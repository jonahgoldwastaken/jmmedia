import { styled } from '../../../theme'
import { Heading } from '..'

type HeaderHeadingProps = {
  dark?: boolean
}

export const HeaderHeading = styled(Heading)<HeaderHeadingProps>`
  z-index: 2;
  margin: ${props => props.theme.space[2]};
  color: ${props =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin: ${props => props.theme.space[3]};
  }
`
