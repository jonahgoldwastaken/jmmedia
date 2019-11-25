import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'styled-components'
import { styled } from '../../theme'
import { PopInRight, PopOutLeft } from '../Animations'

type NavButtonProps = {
  onClick?: () => any
  icon: IconProp
  colour?: 'white' | 'black'
  hide?: boolean
}

type StyledButtonProps = {
  colour?: 'white' | 'black'
  hide?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  position: fixed;
  top: ${props => props.theme.space[2]};
  left: ${props => props.theme.space[2]};
  z-index: 999;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props =>
    !props.colour || props.colour === 'white'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  cursor: pointer;

  ${props =>
    props.hide
      ? css`
          animation: ${PopOutLeft}
            ${props =>
              `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
            forwards;
          pointer-events: none;
        `
      : css`
          animation: ${PopInRight}
            ${props =>
              `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
            forwards;

          .page-transition-enter-active & {
            animation: ${PopInRight}
              ${props =>
                `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
              forwards;
          }

          .page-transition-exit-active & {
            animation: ${PopOutLeft}
              ${props =>
                `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
              forwards;
          }
        `};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    top: ${props => props.theme.space[3]};
    left: ${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes[3]};
  }

  .page-transition-enter & {
    opacity: 0;
  }
`

export const NavButton: React.FunctionComponent<NavButtonProps> = ({
  icon,
  ...props
}) => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon={icon} />
  </StyledButton>
)
