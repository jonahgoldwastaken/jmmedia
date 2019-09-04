import { css } from 'styled-components'
import { styled } from '../../../theme'
import { RotateInDown, RotateOutDown } from '../../Animations'

type ItemTitleProps = {
  hovering: boolean
}

const StyledHeading = styled.h2<ItemTitleProps>`
  position: relative;
  z-index: 4;
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
  text-align: center;
  text-decoration: none;

  ${props =>
    props.hovering &&
    css`
      text-shadow: ${props.theme.textShadow};
    `};

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
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
