import { styled } from '../../theme'
import { keyframes } from 'styled-components'

type StyledBackgroundProps = {
  background: string
}

type PageBackgroundProps = {
  background: string
}

const closeAnimation = keyframes`
  from {
    top: 0vh;
  }
  to {
    top: 100vh;
  }
`

const StyledBackground = styled.div<StyledBackgroundProps>`
  width: ${props => props.theme.sizes.dynamic[2]};
  min-height: 100vh;
  background: ${props => props.background};

  .page-transition-exit-active & {
    position: fixed;
    animation: ${closeAnimation}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`};
  }
`

export const Background: React.FunctionComponent<
  PageBackgroundProps
> = props => <StyledBackground {...props} />
