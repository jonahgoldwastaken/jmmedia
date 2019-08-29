import { css } from 'styled-components'
import { styled } from '../../theme'
import { PageContext } from '../Page'
import { Heading } from '../Common'
import { RotateInDown } from '../Animations'

type StyledHeadingProps = {
  isNavigating: boolean
}

const StyledHeading = styled(Heading)<StyledHeadingProps>`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  animation: ${RotateInDown}
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  transition: opacity
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  ${props =>
    props.isNavigating &&
    css`
      opacity: 0;
    `}
`

export const HeroHeading: React.FunctionComponent = props => (
  <PageContext.Consumer>
    {({ isNavigating }) => (
      <StyledHeading isNavigating={isNavigating} {...props} />
    )}
  </PageContext.Consumer>
)
