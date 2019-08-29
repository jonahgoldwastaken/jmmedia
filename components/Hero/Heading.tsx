import theme, { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'
import { Heading } from '../Common'

export const HeroHeading = styled(Heading)`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;

  .page-transition-enter & {
    opacity: 0;
  }
  .page-transition-enter-active & {
    animation: ${RotateInDown} ${theme.animation.timing[1]}
      ${theme.animation.curve} forwards;
  }
  .page-transition-exit & {
    opacity: 1;
  }
  .page-transition-exit-active & {
    opacity: 0;
    animation: ${RotateOutDown} ${theme.animation.timing[1]}
      ${theme.animation.curve} forwards;
  }
`
