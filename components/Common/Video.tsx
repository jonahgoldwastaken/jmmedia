import { styled } from '../../theme'

type VideoProps = {
  isNavigating?: boolean
}

export const Video = styled.video<VideoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: ${props => (props.isNavigating ? 0 : 1)};
  filter: ${props =>
    props.isNavigating
      ? `brightness(0.25) contrast(100%)`
      : `brightness(0.25) contrast(150%)`};
  transition: opacity
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`},
    filter
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`};

  @media speech {
    display: none;
  }
`
