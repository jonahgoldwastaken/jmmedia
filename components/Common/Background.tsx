import { styled } from '../../theme'
import { keyframes } from 'styled-components'
import { PageContext } from '../Page/Context'
import { withTransition } from '../../utils/page-transitions'

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
  width: ${props => props.theme.sizes.dynamic[2]};
  min-height: 100vh;
  background: ${props => props.background};
`

const BackgroundWithoutTransition: React.FunctionComponent<
  PageBackgroundProps
> = props => (
  <PageContext.Consumer>
    {({ isNavigating }) => (
      <StyledBackground isNavigating={isNavigating} {...props} />
    )}
  </PageContext.Consumer>
)
export const Background = withTransition(
  BackgroundWithoutTransition,
  `
    position: fixed;
    animation: ${closeAnimation}
      ${props => `${props.theme.animation.timing[1]}
  ${props.theme.animation.curve}`};
  `
)
