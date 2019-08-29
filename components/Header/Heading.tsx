import { styled } from '../../theme'
import { Heading } from '../Common'
import { RotateInDown, RotateOutDown } from '../Animations'

export const HeaderHeading = styled(Heading)`
  z-index: 2;

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    opacity: 1;
    animation: ${RotateInDown}
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
      forwards;
  }

  .page-transition-exit-active & {
    animation: ${RotateOutDown}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }
`
