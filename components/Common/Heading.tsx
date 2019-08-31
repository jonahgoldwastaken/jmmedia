import { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'

export const Heading = styled.h1`
  margin-top: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[5]};
  color: ${props => props.theme.colors.primary};

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[3]};
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
  .page-transition-exit-active & {
    animation: ${RotateOutDown}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`
