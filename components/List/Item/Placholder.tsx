import { styled } from '../../../theme'

type ItemPlaceholderProps = {
  hovering: boolean
}

export const ItemPlaceholder = styled.img<ItemPlaceholderProps>`
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0%;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: cover;
  opacity: ${props => (props.hovering ? 0 : 1)};
  filter: brightness(0.75);
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};

  @media speech {
    display: none;
  }
`
