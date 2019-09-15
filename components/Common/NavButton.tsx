import { styled } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { PopInRight, PopOutLeft } from '../Animations'
import { css } from 'styled-components'

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
  position: fixed;
  top: ${props => props.theme.space[3]};
  left: ${props => props.theme.space[3]};
  z-index: 9999;
  background: none;
  border: none;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]};
  color: ${props =>
    !props.colour || props.colour === 'white'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  outline: none;
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
        `}

  .page-transition-enter & {
    opacity: 0;
  }

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
`

export const NavButton: React.FunctionComponent<NavButtonProps> = ({
  icon,
  ...props
}) => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon={icon} />
  </StyledButton>
)
