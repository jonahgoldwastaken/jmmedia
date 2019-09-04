import { useRouter } from 'next/router'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import animationChooser from '../../../utils/animationChooser'
import { SlideOutDown, SlideOutRight, ZoomOut } from '../../Animations'
import { BackgroundContext } from './Context'

type StyledBackgroundProps = {
  currentPage: string
  route: string
}

type TransititonBackgroundProps = {
  route: string
}

type PageBackgroundProps = {
  currentPage: string
}

const closeAnimations = [SlideOutDown, SlideOutRight, ZoomOut]

export const StyledBackground = styled.div<StyledBackgroundProps>`
  position: relative;
  overflow-y: scroll;
  height: ${props => props.theme.sizes.height[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.pageColours[props.currentPage]};
  z-index: 2;

  .page-transition-enter-active & {
    * {
      pointer-events: none;
    }
  }

  .page-transition-exit-active & {
    ${props =>
      (props.route === '/' ||
        props.route === '/film' ||
        props.route === '/photography') &&
      css`
        position: fixed;
        animation: ${animationChooser(closeAnimations)}
          ${props =>
            `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
          forwards;
        transform-origin: center;
      `}
  }
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
    <BackgroundContext.Provider value={{ currentPage: props.currentPage }}>
      <StyledBackground {...props} route={router.route} />
      <TransititonBackground route={router.route} />
    </BackgroundContext.Provider>
  )
}
