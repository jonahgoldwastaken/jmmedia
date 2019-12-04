import { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'

export const Heading = styled.h1`
  margin: 0 0 ${props => props.theme.space[3]};
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[3]};
  color: ${props => props.theme.colors.primary};
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[5]};
  }

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${RotateInDown}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`
