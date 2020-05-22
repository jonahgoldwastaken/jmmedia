import styled, { css } from 'styled-components'
import { BaseRunning } from 'components/Text'

type FooterLinkProps = {
  colour: 'primary' | 'secondary'
  href: string
}

const StyledLink = styled.a<FooterLinkProps>`
  ${BaseRunning};
  display: none;
  align-items: center;
  justify-content: center;
  height: calc(${props => props.theme.heights[1]} / 2);
  padding: ${props => props.theme.spacing[1]};
  flex: 1;
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  text-align: center;

  
  &:not(:hover) {
    text-decoration: none;
  }

  ${props =>
    props.colour !== 'primary'
      ? css`
          background: ${props.theme.colours.primary};
          color: ${props.theme.colours.tertiary};
        `
      : css`
          background: ${props.theme.colours.tertiary};
          color: ${props.theme.colours.primary};
        `}

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    height: ${props => props.theme.heights[1]};
  }
`

export const FooterLink: React.FunctionComponent<FooterLinkProps> = ({
  children,
  ...props
}) => (
  <StyledLink {...props}>
    <span>{children}</span>
  </StyledLink>
)
