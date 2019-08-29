import { styled } from '../../theme'
import { keyframes, css } from 'styled-components'
import { PageContext } from '../Page/Context'

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
  padding: 0 ${props => props.theme.space[4]};

  ${props =>
    props.isNavigating &&
    css`
      position: fixed;
      animation: ${closeAnimation} ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve};
    `}
`

export const Background: React.FunctionComponent<
  PageBackgroundProps
> = props => (
  <PageContext.Consumer>
    {({ isNavigating }) => (
      <StyledBackground isNavigating={isNavigating} {...props} />
    )}
  </PageContext.Consumer>
)
