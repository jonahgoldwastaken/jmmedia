import { css } from 'styled-components'
import { styled } from '../../../theme'
import { LinkWrapperContext } from '../../Common/LinkWrapper'

type ItemTitleProps = {
  hovering: boolean
}

const StyledHeading = styled.h2<ItemTitleProps>`
  position: relative;
  z-index: 2;
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
  text-align: center;
  text-decoration: none;
  pointer-events: none;

  ${props =>
    props.hovering &&
    css`
      text-shadow: ${props.theme.textShadow};
    `};
`

export const ItemTitle: React.FunctionComponent = ({ children }) => {
  return (
    <LinkWrapperContext.Consumer>
      {({ isHovering }) => (
        <StyledHeading hovering={isHovering}>{children}</StyledHeading>
      )}
    </LinkWrapperContext.Consumer>
  )
}
