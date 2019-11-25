import { keyframes, css } from 'styled-components'
import { styled } from '../../theme'
import { useState } from 'react'

type StyledDivProps = {
  show: boolean
}

type LoadingAnimaterProps = {
  loaded: boolean
}

const loadingAnimation = keyframes`
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    left: 0%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`

const StyledDiv = styled.div<StyledDivProps>`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  animation: ${loadingAnimation}
    ${props =>
      `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
    infinite alternate forwards;

  ${props =>
    !props.show &&
    css`
      animation-play-state: paused;
      opacity: 0;
    `}
`

export const LoadingAnimater: React.FunctionComponent<LoadingAnimaterProps> = ({
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
