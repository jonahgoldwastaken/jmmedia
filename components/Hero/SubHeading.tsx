import { styled } from '../../theme'
import { RotateInDown, RotateOutDown } from '../Animations'

export const HeroSubHeading = styled.h2`
  position: relative;
  z-index: 2;
  margin: ${props => props.theme.space[0]} 0 ${props => props.theme.space[4]};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.colors.primary};
  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[1]};
    margin: ${props => props.theme.space[2]} 0 ${props => props.theme.space[4]};
  }

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${RotateInDown}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
      forwards;
  }
`
