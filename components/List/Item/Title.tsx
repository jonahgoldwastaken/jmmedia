import { styled } from '../../../theme'
import { css } from 'styled-components'
import { RotateInDown, RotateOutDown } from '../../Animations'

type ItemTitleProps = {
  hovering: boolean
}

export const StyledHeading = styled.h2<ItemTitleProps>`
  position: relative;
  z-index: 2;
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
  pointer-events: none;

  ${props =>
    props.hovering &&
    css`
      /* font-size: ${props.theme.fontSizes[4]}; */
      text-shadow: ${props.theme.textShadow};
    `};

  .page-transition-enter-active & {
    opacity: 0;
    animation: ${RotateInDown}
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
      forwards;
  }

  .page-transition-exit-active & {
    animation: ${RotateOutDown}
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
      forwards;
  }
`

export const ItemTitle: React.FunctionComponent<ItemTitleProps> = ({
  children,
  ...props
}) => {
  return <StyledHeading {...props}>{children}</StyledHeading>
}
