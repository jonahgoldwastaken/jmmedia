import { keyframes } from 'styled-components'
import { styled } from '../../../../theme'

const LoadingAnimation = keyframes`
  0% {
    top: 0%;
    height: 0%;
    bottom: 100%;
  }
  50% {
    top: 0%;
    height: 100%;
    bottom: 0%;
  }
  100% {
    top: 100%;
    height: 0%;
    bottom: 0%;
  }
`

const LoaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    background: ${props => props.theme.colors.secondary};
    animation: ${LoadingAnimation}
      ${props =>
        `${props.theme.animation.timing[2]} ${props.theme.animation.curve}`}
      infinite;
  }
`

export const Loader = props => <LoaderContainer />
