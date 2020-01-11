import { useState } from 'react'
import { css, keyframes } from 'styled-components'
import { styled } from '../../theme'

type StyledDivProps = {
  show: boolean
}

type LoadingAnimatorProps = {
  loaded: boolean
}

const loadingAnimation = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
  }
  50% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 100%);
  }
`

const StyledDiv = styled.div<StyledDivProps>`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colours.loading};
  animation: ${loadingAnimation}
    ${props =>
      `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
    infinite forwards;

  ${props =>
    !props.show &&
    css`
      animation-play-state: paused;
      opacity: 0;
    `}
`

export const LoadingAnimator: React.FunctionComponent<LoadingAnimatorProps> = ({
  loaded,
}) => {
  const [showAnimation, setShowAnimation] = useState(true)

  return (
    <StyledDiv
      onAnimationIteration={() => loaded && setShowAnimation(false)}
      show={showAnimation}
    />
  )
}
