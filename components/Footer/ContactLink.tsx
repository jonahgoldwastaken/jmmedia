import { styled } from '../../theme'

export const FooterContactLink = styled.li`
  a {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes[3]};
  }
`
