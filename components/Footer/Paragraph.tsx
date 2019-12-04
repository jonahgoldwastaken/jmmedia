import { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'

export const FooterParagraph = styled.p`
  font-size: ${props => props.theme.fontSizes[0]};
  font-family: ${props => props.theme.fonts.sans};
  color: ${props => props.theme.colors.primary};
  text-align: center;

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
