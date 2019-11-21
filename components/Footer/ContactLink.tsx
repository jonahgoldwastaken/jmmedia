import { styled } from '../../theme'
import { FadeIn, FadeOut } from '../Animations'
import { logEvent } from '../../utils/analytics'

type StyledContactLink = {}

type FooterContactLinkProps = {
  type: 'phone' | 'mail' | 'instagram' | 'linkedin'
}

const StyledContactLink = styled.li<StyledContactLink>`
  .page-transition-enter & {
    opacity: 0;
  }

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
    display: block;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes[2]};
    text-decoration: none;
    text-align: center;

    svg {
      display: block;
      margin: 0 auto ${props => props.theme.space[0]};
    }

    span {
      position: relative;
      display: inline-block;
      font-family: ${props => props.theme.fonts.sans};
      font-size: ${props => props.theme.fontSizes[1]};
      text-transform: uppercase;
      font-weight: ${props => props.theme.fontWeights[0]};

      @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        font-size: ${props => props.theme.fontSizes[1]};
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0%;
        width: 0%;
        height: calc(${props => props.theme.borderWidth} / 2);
        background: ${props => props.theme.colors.primary};
        z-index: 100;
        transition: width
          ${props =>
            `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
      }
    }

    &:hover {
      span:after {
        width: ${props => props.theme.sizes.dynamic[2]};
      }
    }
  }
`

export const FooterContactLink: React.FunctionComponent<FooterContactLinkProps> = ({
  type,
  ...props
}) => {
  const LogClick = () => {
    logEvent('Footer link clicks', `Click on ${type}`)
  }

  return <StyledContactLink {...props} onClick={LogClick} />
}
