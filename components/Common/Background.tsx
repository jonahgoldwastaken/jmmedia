import { styled } from '../../theme'
import animationChooser from '../../utils/animationChooser'
import {
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  ZoomOut,
} from '../Animations'
import { useRouter, NextRouter } from 'next/router'
import { css } from 'styled-components'

type StyledBackgroundProps = {
  route: string
  router: NextRouter
}

type TransititonBackgroundProps = {
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

export const StyledBackground = styled.div<StyledBackgroundProps>`
  position: relative;
  overflow-y: scroll;
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.pageColours[props.route]};
  z-index: 2;
  ${props =>
    (props.router.route === '/' ||
      props.router.route === '/film' ||
      props.router.route === '/photography') &&
    css`
      .page-transition-exit-active & {
        position: fixed;
        animation: ${animationChooser(closeAnimations)}
          ${props =>
            `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
          forwards;
        transform-origin: center;
      }
    `}
`

const TransititonBackground = styled.div<TransititonBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: ${props => props.theme.pageColours[props.route]};
`

export const Background: React.FunctionComponent<
  PageBackgroundProps
> = props => {
  const router = useRouter()
  return (
    <>
      <StyledBackground {...props} router={router} />
      <TransititonBackground route={router.route} />
    </>
  )
}
