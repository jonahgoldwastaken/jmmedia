import { styled } from '../../theme'
import {
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
} from '../Animations'

type StyledBackgroundProps = {
  background: string
}

type PageBackgroundProps = {
  background: string
}

const slideDirectionChooser = () => {
  const randomNumber = Math.random()
  if (randomNumber < 0.25) {
    return SlideOutDown
  } else if (randomNumber < 0.5) {
    return SlideOutLeft
  } else if (randomNumber < 0.75) {
    return SlideOutRight
  } else {
    return SlideOutUp
  }
}

const StyledBackground = styled.div<StyledBackgroundProps>`
  width: ${props => props.theme.sizes.dynamic[2]};
  min-height: 100vh;
  background: ${props => props.background};

  .page-transition-exit-active & {
    position: fixed;
    animation: ${() => slideDirectionChooser()}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
      forwards;
  }
`

export const Background: React.FunctionComponent<
  PageBackgroundProps
> = props => {
  return <StyledBackground {...props} />
}
