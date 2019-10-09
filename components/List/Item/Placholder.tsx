import { styled } from '../../../theme'
import { LinkWrapperContext } from '../../Common/LinkWrapper'

type StyledImgProps = {
  hovering: boolean
}

type ItemPlaceholderProps = {
  src: string
  alt: string
}

const StyledImg = styled.img<StyledImgProps>`
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0%;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: cover;
  opacity: ${props => (props.hovering ? 0 : 1)};
  filter: brightness(0.5);
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};

  @media speech {
    display: none;
  }
`
export const ItemPlaceholder: React.FunctionComponent<
  ItemPlaceholderProps
> = props => (
  <LinkWrapperContext.Consumer>
    {({ isHovering }) => <StyledImg hovering={isHovering} {...props} />}
  </LinkWrapperContext.Consumer>
)
