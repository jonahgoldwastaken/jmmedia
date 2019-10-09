import { styled } from '../../theme'
import { Heading } from '../Common/Heading'

export const FooterHeading = styled(Heading)`
  margin: 0;
  font-size: ${props => props.theme.fontSizes[2]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`
