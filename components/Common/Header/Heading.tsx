import { styled } from '../../../theme'
import { Heading } from '..'

type HeaderHeadingProps = {
  dark?: boolean
}

export const HeaderHeading = styled(Heading)<HeaderHeadingProps>`
  z-index: 2;
  margin: 0;
  color: ${props =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
`
