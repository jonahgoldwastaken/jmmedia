import { styled } from '../../theme'
import { FadeIn, FadeOut } from '../Animations'

export const FooterContactLink = styled.li`
  .page-transition-enter-active & {
    animation: ${FadeIn}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }

  .page-transition-exit-active & {
    animation: ${FadeOut}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
  }

  a {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes[2]};
    text-decoration: none;

    svg {
      display: block;
      margin: 0 auto ${props => props.theme.space[1]};
    }

    span {
      display: block;
      text-align: center;
      font-family: ${props => props.theme.fonts.sans};
      font-size: ${props => props.theme.fontSizes[1]};
      text-transform: uppercase;
      font-weight: ${props => props.theme.fontWeights[0]};
      @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        font-size: ${props => props.theme.fontSizes[2]};
      }
    }
  }
`
