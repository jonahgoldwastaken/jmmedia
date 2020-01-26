import { useContext } from 'react'
import { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link'

type StyledImageProps = {
  isHovering: boolean
}

const StyledImage = styled.img<StyledImageProps>`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  z-index: 1;
  opacity: ${props => (props.isHovering ? '0' : '1')};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  @media print, speech {
    display: none;
  }
`

export const ItemImage: React.FunctionComponent<{
  src: string
  onLoad: any
}> = props => {
  const { isHovering } = useContext(LinkWrapperContext)

  return <StyledImage isHovering={isHovering} {...props} />
}
