import { styled } from '../../theme'
import {
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  CurtainCloseHorizontal,
  CurtainCloseVertical,
  ZoomOut,
} from '../Animations'
import animationChooser from '../../utils/animationChooser'

type StyledBackgroundProps = {
  route: string
}

type PageBackgroundProps = {
  route: string
}

const closeAnimations = [
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  ZoomOut,
]

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: relative;
  overflow-y: scroll;
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.pageColours[props.route]};

  .page-transition-exit-active & {
    position: fixed;
    animation: ${animationChooser(closeAnimations)}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
      forwards;
    transform-origin: center;
  }
`

export const Background: React.FunctionComponent<
  PageBackgroundProps
> = props => {
  return <StyledBackground {...props} />
}
