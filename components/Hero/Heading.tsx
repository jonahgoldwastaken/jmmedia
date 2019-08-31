import theme, { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'
import { Heading } from '../Common'

export const HeroHeading = styled(Heading)`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-top: ${props => props.theme.space[2]};
    margin-bottom: ${props => props.theme.space[4]};
  }
`
