import { styled } from '../../theme'
import { keyframes, css } from 'styled-components'
import { PageContext } from './Context'

type StyledBackgroundProps = {
  background: string
  isNavigating: boolean
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
  width: 100%;
  min-height: 100vh;
  background: ${props => props.background};
  padding: 0 30rem;

  ${props =>
    props.isNavigating &&
    css`
      position: fixed;
      animation: ${closeAnimation} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve};
    `}
`

export const PageBackground: React.FunctionComponent<
  PageBackgroundProps
> = props => (
  <PageContext.Consumer>
    {({ isNavigating }) => (
      <StyledBackground isNavigating={isNavigating} {...props} />
    )}
  </PageContext.Consumer>
)
